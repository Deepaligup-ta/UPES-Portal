import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'


const messageSchema = mongoose.Schema({
    title: String,
    message: String,
    from: {
        type: mongoose.ObjectId,
        ref: 'User'
    },
    to: [{ type: mongoose.ObjectId, ref: 'User' }],
    status: {
        type: String,
        enum: ["delete", "draft", "publish"],
        default:"publish"
    },
    school : {
        type: mongoose.ObjectId,
        ref: 'School'
    }

}, { timestamps: true })

messageSchema.plugin(mongoosePaginate)
export const Message = mongoose.model('Message', messageSchema)
export const messageResource = {
    resource: Message,
    options:{
        properties: {
            createdAt: {
                isVisible: false
            },
            updatedAt: {
                isVisible: false
            },

        },
    },
   
}