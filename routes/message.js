import { Router } from 'express'
import { addNew, deleteMessage, getAll, getOne, updateMessage } from '../controllers/message.js'
import { isAuthenticated, isManagement, isSignedIn } from '../controllers/auth.js'
import { checkCache } from '../middlewares/cache.js'
export const router = Router()

//Add New Message 
router.post('/new', isSignedIn, isAuthenticated, addNew)
//Delete Message 
router.delete('/delete',isSignedIn, isAuthenticated,  deleteMessage)
//Update Message 
router.put('/update', isSignedIn, isAuthenticated, isManagement, updateMessage)
//Get All Message 
router.get('/all', isSignedIn, isAuthenticated, getAll)
//Get Message 
router.get('/message/:messageId', isSignedIn, isAuthenticated, getOne)
