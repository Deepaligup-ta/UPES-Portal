import { Router } from 'express'
import { isAuthenticated, isManagement, isSignedIn } from '../controllers/auth.js'
import { getAllFaculty, getFaculty } from '../controllers/user.js'

export const router = Router()


router.get('/all', isSignedIn, isAuthenticated, isManagement, getAllFaculty)
router.get('/faculty/:facultyId', isSignedIn, isAuthenticated, isManagement, getFaculty)