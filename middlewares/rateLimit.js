import { rateLimit } from 'express-rate-limit'

export const rateLimiter = rateLimit({
	windowMs: 1 * 60 * 1000, 
	limit: process.env.RATE_LIMIT_REQUEST || 60,
	standardHeaders: 'draft-7', 
	legacyHeaders: false, 
})
