import express from "express"
import { isAuthenticated, isManagement, isSignedIn } from "../controllers/auth.js"
import { generateResult, getAll, getOne, getResult, notEvaluated, submitResult } from "../controllers/evaluate.js"

export const router = express.Router()

router.get('/all', isSignedIn, isAuthenticated, getAll)
router.get('/:evaluationId', isSignedIn, isAuthenticated, getOne)
router.post('/submit', isSignedIn, isAuthenticated, submitResult)
router.post('/getresult', isSignedIn, isAuthenticated, getResult)
router.post('/result', generateResult)
router.get('/notevaluated', isSignedIn, isAuthenticated, isManagement, notEvaluated)