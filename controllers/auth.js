import { User } from '../models/User.js'
import jwt from 'jsonwebtoken'
import { expressjwt } from 'express-jwt'
import crypto from 'crypto'
import { cache } from '../middlewares/cache.js'
import { showLog } from '../utils/timeLog.js'
import { error } from 'console'

//Create Hashed Password
const createHash = async (plainText, salt) => {
    showLog('Error Creating Hash')
    return crypto.createHmac('sha256', salt).update(`${plainText}`).digest('hex')
}

//Get User By SAPID
const getUser =  (id) => {
    showLog(`getUser() Function Called At controllers/auth.js ( Requested By USER: ${id}}`)
    return User.findOne({_id: id})
            .select('-profilePic -salt -encpy_password')
            .then(user => {
                if(!user)
                    return null
                return user
            })
            .catch(error => {
                showLog('Error At getUser() Function Called At controllers/auth.js')
                return null
            })
}

export const outlookCheck = (req, res) => {
    showLog('outlookCheck() Function Called At controllers/auth.js')
     const authHeader = req.headers.authorization;
     let decodedToken = null
     if (authHeader) {
       const token = authHeader.split(" ")[1];
       decodedToken = jwt.decode(token);
     } else{
        res.status(400).json({error:true})
     }
       User.findOne({ email: decodedToken.unique_name }).then((user) => {
         if (!user)
           return res.status(404).json({
             error: true,
             errorMessage: "Can't Find The User With The EmaiL!",
             solution: "Linking Email To The DB Accounts",
           });

         if (
           user.activeAccount === "" ||
           user.activeAccount === "disabled" ||
           user.activeAccount === "suspened"
         )
           return res.status(403).json({
             error: true,
             message: "Your Account Is Not Active!",
           });

         const token = jwt.sign(
           {
             _id: user._id,
             user: {
               sapId: user.sapId,
               firstName: user.firstName,
               role: user.role,
             },
           },
           process.env.SECRET
         );
         let time = new Date();
         const { _id, firstName, lastName, sapId, designations, role } = user;
         time.setTime(time.getTime() + 1800 * 1000);
         res.cookie("socis", token, {
           expire: time,
           path: "/",
           domain: "localhost",
         });
         showLog(`User With SAPID: ${user.sapId} Logged In`);
         return res.json({
           token,
           user: { _id, firstName, lastName, sapId, designations, role },
         });
       });
}

//Signin Function
export const signin = (req, res) => {
    showLog('signin() Function Called At controllers/auth.js')

    const {sapId, password, email} = req.body
    
    User.findOne({sapId})
        .then(user => {
            if(!user)
                return res.status(401).json({ error: true, message: "User Or Password Is Incorrect!"})
            if(!user.authenticate(password))
                return res.status(401).json({ error: true, message: "User Or Password Is Incorrect!"})
            if(user.activeAccount === '' || user.activeAccount === 'disabled' || user.activeAccount === 'suspened')
                return res.status(403).json({ error: true, message: "Your account is not active!"})

            User.updateOne({ sapId }, { email: email })
                .then((update) => {
                    console.log(update)
                    if(!update) 
                        return res.status(400).json({
                            error: true
                        })

                        const token = jwt.sign({_id: user._id, user: { sapId: user.sapId, firstName: user.firstName, role: user.role, outlookRefreshToken: user.outlookToken }}, process.env.SECRET)
                        let time = new Date()
                        const { _id, firstName, lastName, sapId, designations, role } = user
                        time.setTime(time.getTime() + (1800 * 1000))
                        res.cookie('socis', token,  { expire: time, path: '/', domain: 'localhost' })
                        showLog(`User With SAPID: ${user.sapId} Logged In`)
                        return res.json({
                            token, 
                            user: { _id, firstName, lastName, sapId, designations, role }
                        })
                })
                .catch((error) => {
                    return res.status(400).json({
                        error: true,
                        message: error.toString()
                    })
                })
          
        })  
        .catch((error) => {
            return res.status(400).json({
                error: true,
                message: error.toString()
            })
        })
}

export const loggout = (req, res) => {
    showLog(`User With SAPID: ${req.auth.user.sapId} Signed Out`)
    res.clearCookie('socis', { path: '/', domain: 'localhost', expires: new Date(1) })
    res.status(200).json({
        logout: true,
        redirect: true
    })
}
export const changePasswordFlag = (req, res) => {
    showLog('changePasswordFlag() Function Called At controllers/auth.js')

    const { sapId } = req.auth.user
    User
        .findOne({ sapId })
        .then(user => {
            if(!user){
                showLog('Cannot Find User, Function changePasswordFlag() Called At controllers/auth.js')
                return res.status(400).json({ error: true, errorMessage: "Error Occured!"})
            }
            User
                .updateOne({ sapId }, { changePassword: "yes" })
                .then(update => {
                    showLog(`Change Password Flag Changed To TRUE For SAPID: ${user.sapId}`)
                    res.json({
                        success: true,
                        successMessage: "Changed The Flag"
                    })
                })
                .catch(error => {
                    showLog('Error Occured At changePasswordFlag() Function Called At controllers/auth.js')
                    res.status(400).json({
                        error: true,
                        errorMessage: error
                    })
                })
        })
        .catch(error => {
            showLog('Error Occured At changePasswordFlag() Function Called At controllers/auth.js')
            res.status(400).json({
                error: true,
                errorMessage: error
            })
        })
}

export const changePassword =  (req, res) => {
    showLog('changePassword() Function Called At controllers/auth.js')

    const { password, newpassword } = req.body
    const { sapId } = req.auth.user
    User
        .findOne({sapId})
        .then(user => {
            if(!user) 
                return res.status(400).json({ error: true, errorMessage: "User Not Found!" })
            if(user.changePassword === "no")
                return res.status(400).json({ error: true, errorMessage: "Can't make this request"})
            createHash(password, user.salt)
                .then((pass) => {
                    if(pass !== user.encpy_password)
                        return res.status(400).json({ error: true, errorMessage: "Old Password Is Not Correct" })
                    createHash(newpassword, user.salt)
                        .then((newpass) => {
                            if(newpass === user.encpy_password)
                                return res.status(400).json({
                                    error: true,
                                    errorMessage: "New Passsword Is Same As Old Password"
                                })
                            User.updateOne({sapId}, { encpy_password: newpass, changePassword: "no" })
                                .then(update => {
                                    if(update){
                                        showLog(`Password Changed For The SAPID: ${user.sapId}`)
                                        return res.json({ success: true, successMessage: "Password Changed!", redirect: true })
                                    }else    
                                        return res.status(400).json({ error: true, errorMessage: "Error Updating Password!" })
                                })
                                .catch(error => {
                                    showLog('Error Occured At changePassword() Function Called At controllers/auth.js')
                                    return res.status(400).json({
                                        error: true,
                                        errorMessage: error
                                    })
                                })
                        })
                        .catch((error) => {
                            showLog('Error Occured At changePassword() Function Called At controllers/auth.js')
                            return res.status(400).json({
                                error: true,
                                errorMessage: "Unknown Error!"
                            })
                        })
                    
                })
                .catch((error) => {
                    showLog('Error Occured At changePassword() Function Called At controllers/auth.js')
                    return res.status(400).json({ error: true, errorMessge: "Unknown error"})
                })
            })
            .catch((error) => {
                showLog('Error Occured At changePassword() Function Called At controllers/auth.js')
                return res.status(400).json({
                    error: true,
                    errorMessage: error
                })
            })
            
}

export const getAllUser = (req, res) => {
    // try {
    //     const users = await User.find().select('firstName lastName sapId email designations')
    //     res.json(users)
    // }catch(error) {
    //     res.status(400).json({
    //         error: true,
    //         errorMessage: error
    //     })
    // }
    showLog('getAllUser() Function Called At controllers/auth.js')

    User.find().select('firstName lastName sapId email designations')
        .then((users) => {
            cache.set(req.url, users)
            res.json(users)
        })
        .catch((error) => {
            res.status(400).json({
                error: true,
                errorMessage: error
            })
        })
}


export const getUsers = (req, res) => {
    showLog('getUsers() Function Called At controllers/auth.js')

    const pageOptions = {
        page: req.query.page || 1,
        limit: req.query.limit || 10,
    }
    User
        .paginate({

        }, pageOptions, (err, result) => {
            if(err)
                return res.status(400).json({
                    error: true,
                    errorMessage: err
                })
            res.json(result)
        })
}
export const getFaculty = (req, res) => {
    showLog('getFaculty() Function Called At controllers/auth.js')

    User.findOne({ _id: req.params.userId })
        .select('-salt -encpy_password -profilePic')
        .populate({ path: 'reportingManager', select: 'firstName lastName sapId email designations'})
        .then((user) => {
            res.json(user)
        })
        .catch((error) => {
            showLog('Error Occured At getFaculty() Function Called At controllers/auth.js')
            return res.status(400).json({
                error: true,
                errorMessage: error
            })
        })
}

//Get User By SAP Id
export const getUserById = (req, res) => {
    showLog('getUserById() Function Called At controllers/auth.js')
    
    getUser(req.auth._id)
        .then(user => {
            if(user.activeAccount === 'suspend' || user.activeAccount === 'disabled')
                return res.status(401).json({
                    error: true,
                    errorMesssage: "User is not allowed!"
                })
            res.json(user)
        })
        .catch(error => {
            showLog('Error Occured At getUserById() Function Called At controllers/auth.js')
            res.status(400).json({
                error: true,
                errorMesssage: error
            })
        })

}

//Admin Signin Function
export const authenticateAdmin = (email, password) => {
    showLog('authenticateAdmin() Function Called At controllers/auth.js')
    return User.findOne({email})
                .select('-profilePic')
                .then((user) => {
                    if(!user) 
                        return { error1 : true }
                    if(!user.authenticate(password))
                        return { error2: true }
                
                    if(user.role !== "admin")
                        return { error3 : true }
                    const { _id, firstName, lastName, role, sapId, designations  } = user
                    const profile = {
                        _id, 
                        firstName,
                        lastName,
                        sapId,
                        designations,
                        role,
                        email
                    }
                    return profile
                })
           
}

//Middleware For Bearer Token Check
export const isSignedIn = expressjwt({
    secret: `sMWx4NyJMJ21aDee0ZOqN70a5YBCdeCO`,
    userProperty: 'auth',
    algorithms: ['SHA1', 'RS256', 'HS256'],
})

export const getProfilePic = (req, res) => {
    showLog('getProfilePic() Function Called At controllers/auth.js')
    let userId = null
    if(req.query.userId) {
        userId = req.query.userId
    }else {
        userId = req.auth._id
    }
    User    
        .findOne({ _id: userId })
        .select('profilePic')
        .then((pic) => {
            res.json(pic)
        })
        .catch((error) => {
            showLog('Error Occured At getProfilePic() Function Called At controllers/auth.js')
            res.status(400).json({
                error: true,
                errorMessage: error
            })
        })
}

export const uploadProfile = (req, res) => {
    showLog('uploadProfile() Function Called At controllers/auth.js')

    const userId = req.auth._id
    User
        .updateOne({ _id: userId }, { profilePic: req.body.profilePic })
        .then((update) => {
            if(!update)
                return res.status(400).json({
                    error: true
                })

            res.json({
                success: true,
                dbResponse: update
            })
        })
        .catch((error) => {
            showLog('Error Occured At uploadProfile() Function Called At controllers/auth.js')
            res.status(400).json({
                error: true,
                errorMessage: error
            })
        })
}


//Middleware For Check If The User Is Valid
export const isAuthenticated =  (req, res, next) => {
    // try {
    //     const user = await getUser(req.auth._id)
    //     if(user){
    //         req.auth.user.role = user.role
    //         next()
    //     }

    // }catch(error) {
    //     res.status(401).json({
    //         error: true,
    //         errorMessage: "Not Authenticated!"
    //     })
    // }

    getUser(req.auth._id)
        .then(user => {
            if(!user)
                return res.status(401).json({ error: true, errorMessage: "Not Authenticated" })
            req.auth.user.role = user.role
            next()
        })
        .catch(error => {
            res.status(401).json({ error: true, errorMessage: "Not Authenticated" })
        })
   
}

//Middleware For Check If User Is Faculty
export const isFaculty = async (req, res, next) => {
    if(req.auth.user.role === "faculty")
        next()
    else
        return res.status(403).json({ error: true, errorMessage: "Not Faculty" })
}

//Middleware For Check If User Is Management
export const isManagement = async (req, res, next) => {

    if(req.auth.user.role === 'admin')
        next()
    if(req.auth.user.role !== 'management')
        return res.status(403).json({ error: true, errorMessage: `Not Management ${req.auth.user.sapId}` })
    next()
}