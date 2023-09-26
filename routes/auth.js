import express from "express"
import { changePassword, getUserById, getUsers, isAuthenticated, isManagement, isSignedIn, signin } from "../controllers/auth.js"


export const router = express.Router()

router.post('/signin', signin)
router.get('/current', isSignedIn, isAuthenticated, getUserById)
router.get('/users', isSignedIn, isAuthenticated, isManagement, getUsers)
router.put('/change-password', isSignedIn, isAuthenticated, changePassword)
