import { Router } from 'express'
import { isAuthenticated, isManagement, isSignedIn } from '../controllers/auth.js'
import { getAllStudents, getStudent, updateStudent } from '../controllers/student.js'

export const router = Router()


router.get('/all', isSignedIn, isAuthenticated, getAllStudents)
router.get('/profile/:studentId', isSignedIn, isAuthenticated, getStudent)
router.put('/update', isSignedIn, isAuthenticated, isManagement, updateStudent)