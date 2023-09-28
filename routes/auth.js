import express from "express"
import { changePassword, getUserById, isAuthenticated, isManagement, isSignedIn, loggout, signin } from "../controllers/auth.js"
import { getAllFaculty } from "../controllers/user.js"


export const router = express.Router()

router.post('/signin', signin)
router.get('/signout', isSignedIn, isAuthenticated, loggout)
router.get('/current', isSignedIn, isAuthenticated, getUserById)
router.get('/users', isSignedIn, isAuthenticated, isManagement, getAllFaculty)
router.put('/change-password', isSignedIn, isAuthenticated, changePassword)
