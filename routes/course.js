import { Router } from "express"
import { isAuthenticated, isFaculty, isManagement, isSignedIn } from "../controllers/auth.js"
import { getCourses, getCourse, addCourse, deleteCourse, updateCourse } from "../controllers/course.js"


export const router = Router()


router.get('/courses', isSignedIn, isAuthenticated, getCourses)
router.get('/course/:courseId', isSignedIn, isAuthenticated, isManagement, getCourse)
router.post('/course', isSignedIn, isAuthenticated, isManagement, addCourse)
router.delete('/course', isSignedIn, isAuthenticated, isManagement, deleteCourse)
router.put('/course', isSignedIn, isAuthenticated, isManagement, updateCourse)