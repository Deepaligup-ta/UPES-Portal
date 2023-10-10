import { User } from '../models/User.js'
import jwt from 'jsonwebtoken'
import { expressjwt } from 'express-jwt'
import crypto from 'crypto'
import { cache } from '../middlewares/cache.js'

//Create Hashed Password
const createHash = (plainText, salt) => {
    return crypto.createHmac('sha256', salt).update(`${plainText}`).digest('hex')
}

//Get User By SAPID
const getUser = (sapId) => {
    return User.findOne({sapId})
            .select('-profilePic -salt -encpy_password')
            .then(user => {
                if(!user)
                    return null
                return user
            })
            .catch(error => {
                return null
            })
}


//Signin Function
export const signin = (req, res) => {
    const {sapId, password} = req.body
    
    User.findOne({sapId})
        .then(user => {
            if(!user)
                return res.status(401).json({ error: true, message: "User Or Password Is Incorrect!"})
            if(!user.authenticate(password))
                return res.status(401).json({ error: true, message: "User Or Password Is Incorrect!"})
            // if(user.encpy_password !== createHash(password, user.salt))
            //     return res.status(401).json({ error: true })
            if(user.activeAccount === '' || user.activeAccount === 'disabled' || user.activeAccount === 'suspened')
                return res.status(403).json({ error: true, message: "Your account is not active!"})

            const token = jwt.sign({_id: user._id, user: { sapId: user.sapId, firstName: user.firstName, role: user.role }}, process.env.SECRET)
            let time = new Date()
            const { _id, firstName, lastName, sapId, designations, role } = user
            time.setTime(time.getTime() + (1800 * 1000))
            res.cookie('socis', token,  { expire: time, path: '/', domain: 'localhost' })
            if(user.changePassword === "yes")
                return res.json({
                    token,
                    user: { _id, firstName, lastName, sapId, role },
                    changePassword: true
                })
            return res.json({
                token, 
                user: { _id, firstName, lastName, sapId, designations, role }
            })
        })  
}

export const loggout = (req, res) => {
    res.clearCookie('socis', { path: '/', domain: 'localhost', expires: new Date(1) })
    res.status(200).json({
        logout: true,
        redirect: true
    })
}

export const changePassword = (req, res) => {

    const { password, newpassword } = req.body
    const { sapId } = req.auth.user
    getUser(sapId)
        .then(user => {

            if(!user) 
                return res.status(400).json({ error: true, errorMessage: "User Not Found!" })
            if(user.changePassword === "no")
                return res.status(400).json({ error: true, errorMessage: "Can't make this request"})
            const hashpaswrod = createHash(password, user.salt)
            if(hashpaswrod !== user.encpy_password)
                return res.status(400).json({ error: true, errorMessage: "Old Password Is Not Correct" })

            const newHashPassword = createHash(newpassword, user.salt)

            if(newHashPassword === user.encpy_password)
                return res.status(400).json({
                    error: true,
                    errorMessage: "New Passsword Is Same As Old Password"
                })
            User.updateOne({sapId}, { encpy_password: newHashPassword, changePassword: "no" })
                .then(update => {
                    if(update)
                        return res.json({ success: true, successMessage: "Password Changed!", redirect: true })
                    else    
                        return res.status(400).json({ error: true, errorMessage: "Error Updating Password!" })
                })
                .catch(error => {
                    return res.status(400).json({
                        error: true,
                        err: error
                    })
                })
        })
}

export const getAllUser = (req, res) => {
    User.find()
        .select('firstName lastName sapId email designations')
        .then((users) => {
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
    User.findOne({ _id: req.params.userId })
        .select('-salt -encpy_password -profilePic')
        .populate({ path: 'reportingManager', select: 'firstName lastName sapId email designations'})
        .then((user) => {
            res.json(user)
        })
        .catch((error) => {
            return res.status(400).json({
                error: true,
                errorMessage: error
            })
        })
}

//Get User By SAP Id
export const getUserById = (req, res) => {
    
    const { sapId } = req.auth

    getUser(sapId)
        .then(user => {
            if(user.activeAccount === 'suspend' || user.activeAccount === 'disabled')
                return res.status(401).json({
                    error: true,
                    errorMesssage: "User is not allowed!"
                })
            res.json(user)
        })
        .catch(error => {
            res.status(400).json({
                error: true,
                errorMesssage: error
            })
        })

}

//Admin Signin Function
export const authenticateAdmin = (email, password) => {
    return User.findOne({email})
                .select('-profilePic')
                .then((user) => {
                    if(!user) 
                        return { error1 : true }
                    const password1 = createHash(`${password}`, `${user.salt}`)
                    if(user.encpy_password !== password1)
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
            res.status(400).json({
                error: true,
                errorMessage: error
            })
        })
}

export const uploadProfile = (req, res) => {
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
            res.status(400).json({
                error: true,
                errorMessage: error
            })
        })
}


//Middleware For Check If The User Is Valid
export const isAuthenticated = (req, res, next) => {
    getUser(req.auth_id)
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
export const isFaculty = (req, res, next) => {
    if(req.auth.user.role === "faculty")
        next()
    else
        return res.status(403).json({ error: true, errorMessage: "Not Faculty" })
}

//Middleware For Check If User Is Management
export const isManagement = (req, res, next) => {
    if(req.auth.user.role === 'admin')
        next()
    if(req.auth.user.role !== 'management')
        return res.status(403).json({ error: true, errorMessage: `Not Management ${req.auth.user.sapId}` })
    next()
}