import mongoose  from "mongoose"
import mongoosePaginate from 'mongoose-paginate-v2'

const postSchema = mongoose.Schema({
    title: String,
    excerpt: String,
    content: String,
    attachmentFile: String,
    author: {
        type: mongoose.ObjectId,
        ref: 'User'
    },
    to: [{ type: mongoose.ObjectId, ref: 'User' }],
    type: {
        type: String,
        enum: ["Announcement", "Message", "Policy"]
    },
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

postSchema.plugin(mongoosePaginate)

export const Post = mongoose.model('Post', postSchema)

export const postResource = {
    resource: Post,
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