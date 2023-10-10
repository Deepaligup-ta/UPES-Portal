import { Router } from 'express'
import { isAuthenticated, isSignedIn } from '../controllers/auth.js'
import { deleteGroup, editGroup, getGroup, getGroups, newGroup } from '../controllers/group.js'


export const router = Router()

router.get('/groups', isSignedIn, isAuthenticated, getGroups)
router.get('/group/:groupId', isSignedIn, isAuthenticated, getGroup)
router.post('/group', isSignedIn, isAuthenticated, newGroup)
router.put('/group', isSignedIn, isAuthenticated, editGroup)
router.delete('/group', isSignedIn, isAuthenticated, deleteGroup)