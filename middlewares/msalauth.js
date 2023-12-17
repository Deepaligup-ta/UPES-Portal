import jwt from 'jsonwebtoken'
export const jwtCheck = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (authHeader) {
      const token = authHeader.split(" ")[1]
      const decodedToken = jwt.decode(token)
      req.mauth = decodedToken
      next()
    }else 
        res.status(401).json({
            error: true,
            message: "Cannot validate the JWT token"
        })
}