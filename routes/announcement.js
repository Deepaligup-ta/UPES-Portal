import { Router } from 'express'
import { addNew, deleteAnnoucement, getAll, getOne } from '../controllers/annoucement.js'
import { isAuthenticated, isSignedIn } from '../controllers/auth.js'
export const router = Router()

router.post('/new', isSignedIn, isAuthenticated, addNew)
router.delete('/delete',isSignedIn, isAuthenticated,  deleteAnnoucement)
router.get('/all', isSignedIn, isAuthenticated, getAll)
router.get('/annoucement/:announcementId', isSignedIn, isAuthenticated, getOne)
