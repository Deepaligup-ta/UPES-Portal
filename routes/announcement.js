import { Router } from 'express'
import { addNew, deleteAnnoucement, getAll, getOne, updateAnnouncement } from '../controllers/annoucement.js'
import { isAuthenticated, isManagement, isSignedIn } from '../controllers/auth.js'
import { checkCache } from '../middlewares/cache.js'
export const router = Router()

router.post('/new', isSignedIn, isAuthenticated, addNew)
router.delete('/delete',isSignedIn, isAuthenticated,  deleteAnnoucement)
router.put('/update', isSignedIn, isAuthenticated, isManagement, updateAnnouncement)
router.get('/all', isSignedIn, isAuthenticated, getAll)
router.get('/announcement/:announcementId', isSignedIn, isAuthenticated, getOne)
