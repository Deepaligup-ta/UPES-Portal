import { Router } from 'express'
import { addNew, deleteAnnoucement, getAll, getOne, updateAnnouncement } from '../controllers/annoucement.js'
import { isAuthenticated, isManagement, isSignedIn } from '../controllers/auth.js'
import { checkCache } from '../middlewares/cache.js'
export const router = Router()

//Add New Announcement 
router.post('/new', isSignedIn, isAuthenticated, addNew)
//Delete Announcement 
router.delete('/delete',isSignedIn, isAuthenticated,  deleteAnnoucement)
//Update Announcement 
router.put('/update', isSignedIn, isAuthenticated, isManagement, updateAnnouncement)
//Get All Announcement 
router.get('/all', isSignedIn, isAuthenticated, getAll)
//Get Announcement 
router.get('/announcement/:announcementId', isSignedIn, isAuthenticated, getOne)
