import { mongoose } from 'mongoose'


const policySchema = mongoose.Schema({
    policyName: String,
    school: {
        type: mongoose.ObjectId,
        ref: 'School'
    },
    
}, { timestamps: true })


export const Policy = mongoose.model('Policy', policySchema)

export const policyResource = {
    resource: Policy,
    options: {
        createdAt: {
            isVisible: false
        },
        updatedAt: {
            isVisible: false
        },
    },
}
