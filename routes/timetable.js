import { Router } from "express"
import { isAuthenticated, isFaculty, isSignedIn } from "../controllers/auth.js"
import { getTimeTableBatch, getTimeTableFaculty } from "../controllers/timetable.js"


export const router = Router()


router.get('/faculty', isSignedIn, isAuthenticated, isFaculty, getTimeTableFaculty)
router.get('/batch/:batchId', isSignedIn, isAuthenticated, getTimeTableBatch)