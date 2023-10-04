import { Router } from 'express'
import { isAuthenticated, isSignedIn } from '../controllers/auth.js'
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/post.js'


export const router = Router()

router.post('/new', isSignedIn, isAuthenticated, createPost)
router.put('/update', isSignedIn, isAuthenticated, updatePost)
router.get('/post/:postId', isSignedIn, isAuthenticated, getPost)
router.get('/all', isSignedIn, isAuthenticated, getPosts)
router.delete('/delete', isSignedIn, isAuthenticated, deletePost)
