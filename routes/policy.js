import { Router } from 'express'
import { isAuthenticated, isManagement, isSignedIn } from '../controllers/auth.js'
import { addPolicy, deletePolicy, getAllPolicy, getPolicy, updatePolicy } from '../controllers/policy.js'


export const router = Router()

router.post('/new', isSignedIn, isAuthenticated, isManagement, addPolicy)
router.put('/update', isSignedIn, isAuthenticated, isManagement, updatePolicy)
router.delete('/delete', isSignedIn, isAuthenticated, isManagement, deletePolicy)
router.get('/policy/:policyId', isSignedIn, isAuthenticated, getPolicy)
router.get('/all', isSignedIn, isAuthenticated, getAllPolicy)