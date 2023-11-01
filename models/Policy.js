import { mongoose } from 'mongoose'


const policySchema = mongoose.Schema({
    policyName: String,
    policyDescription: String,
    policyFile: {
        type: String
    },
    school: {
        type: mongoose.ObjectId,
        ref: 'School'
    },
    status: {
        type: String,
        enum: ["delete", "publish"],
        default: 'publish'
    }
    
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