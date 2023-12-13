import { Router } from "express"
import { isAuthenticated, isSignedIn } from "../controllers/auth.js"
import { subscribePush } from "../controllers/push.js"


export const router = Router()

router.post('/subscribe', isSignedIn, isAuthenticated, subscribePush)
