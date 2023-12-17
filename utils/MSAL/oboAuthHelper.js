// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as msal from '@azure/msal-node'
import jwt from 'jsonwebtoken'
import JwksRsa from 'jwks-rsa'
const DISCOVERY_KEYS_ENDPOINT = "https://login.microsoftonline.com/91cc1fb6-1275-4acf-b3ea-c213ec16257b/discovery/keys?appid=2f39588f-57c2-4be7-a4e8-0d29104506af"

const config = {
  auth: {
    clientId: process.env.CLIENT_ID,
    authority: "https://login.microsoftonline.com/common",
    clientSecret: process.env.CLIENT_SECRET,
  },
  system: {
    loggerOptions: {
      loggerCallback(loglevel, message, containsPii) {
        if (containsPii) {
          return
        }
        console.log(message)
      },
      piiLoggingEnabled: false,
      logLevel: msal.LogLevel.Verbose,
    },
  },
}

export const getConfidentialClientApplication =
  function getConfidentialClientApplication() {
    return new msal.ConfidentialClientApplication(config)
  }

export const validateJwt =  (req, res, next) => {
  console.log("Called")
  const authHeader = req.headers.authorization
  if (authHeader) {
    const token = authHeader.split(" ")[1]
    const validationOptions = {
      audience: config.auth.clientId, // v2.0 token
      //issuer: config.auth.authority + "/v2.0", // v2.0 token  **can't use this one
    }
    console.log(jwt.decode(token))
    jwt.verify(token, getSigningKeys, validationOptions, (err, payload) => {
      if (err) {
        console.log(err)
        if (err.name === "TokenExpiredError") {
          return res
            .status(401)
            .send({ type: "TokenExpiredError", errorDetails: err })
        } else {
          return res.status(403).send({ type: "Unknown", errorDetails: err })
        }
      }
      next()
    })
  } else {
    res.status(401).send({ error: true, message: "Invalid JWT Token" })
  }
}

const getSigningKeys = (header, callback) => {
  var client = JwksRsa({
      jwksUri: DISCOVERY_KEYS_ENDPOINT
  })

  client.getSigningKey(header.kid, (err, key) => {
    console.log(key)
    var signingKey = key.publicKey || key.rsaPublicKey
    callback(null, signingKey)
  })
}