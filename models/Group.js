import mongoose from "mongoose"

const groupSchema = new mongoose.Schema({
    groupName: String,
    users:[{ type: mongoose.ObjectId, ref: 'User'}]
    },{ timestamps:true })
export const Group  = mongoose.model('Group', groupSchema)

export const groupResource = {
    resource: Group,
    options:{
        
        properties: {
            createdAt: {
                isVisible: false
            },
            updatedAt: {
                isVisible: false
            }
        },
    },
   
}