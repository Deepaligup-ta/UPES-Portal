import { Router } from "express"
import { isAuthenticated, isFaculty, isManagement, isSignedIn } from "../controllers/auth.js"
import { getCourses, getCourse } from "../controllers/course.js"


export const router = Router()


router.get('/courses', isSignedIn, isAuthenticated, isManagement, getCourses)
router.get('/course/:courseId', isSignedIn, isAuthenticated, isManagement, getCourse)
