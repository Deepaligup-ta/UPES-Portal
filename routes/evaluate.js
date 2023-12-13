import express from "express"
import { isAuthenticated, isSignedIn } from "../controllers/auth.js"
import { generateResult, getAll, getOne, getResult, submitResult } from "../controllers/evaluate.js"

export const router = express.Router()

router.get('/all', isSignedIn, isAuthenticated, getAll)
router.get('/:evaluationId', isSignedIn, isAuthenticated, getOne)
router.post('/submit', isSignedIn, isAuthenticated, submitResult)
router.post('/getresult', isSignedIn, isAuthenticated, getResult)
router.post('/result', generateResult)