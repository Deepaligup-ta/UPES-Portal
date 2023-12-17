import express from "express"
import { changePassword, changePasswordFlag, getAllUser, getFaculty, getProfilePic, getUserById, isAuthenticated, isManagement, isSignedIn, loggout, outlookCheck, signin, uploadProfile } from "../controllers/auth.js"
import { getAllFaculty } from "../controllers/user.js"


export const router = express.Router()

router.post('/signin', signin)
router.post('/check', outlookCheck)
router.post('/signout', isSignedIn ,loggout)
router.get('/current', isSignedIn, isAuthenticated, getUserById)
router.put('/passwordflag', isSignedIn, isAuthenticated, changePasswordFlag)
router.get('/users', isSignedIn, isAuthenticated, isManagement, getAllFaculty)
router.get('/allusers', isSignedIn, isAuthenticated, getAllUser)
router.get('/user/:userId', isSignedIn, isAuthenticated, isManagement, getFaculty)
router.put('/change-password', isSignedIn, isAuthenticated, changePassword)
router.put('/profilepic', isSignedIn, isAuthenticated, uploadProfile)
router.get('/profilepic', isSignedIn, isAuthenticated, getProfilePic)