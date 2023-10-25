import { mongoose } from 'mongoose'


const pushSubscriptionSchema = mongoose.Schema({
    endpoint: String,
    expirationTime: Number,
    keys: {
        p256dh: String,
        auth: String
    }
}, { timestamps: true })

export const PushSubscription = mongoose.model('PushSubscription', pushSubscriptionSchema)