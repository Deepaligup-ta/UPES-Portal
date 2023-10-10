import mongoose  from "mongoose"
import mongoosePaginate from 'mongoose-paginate-v2'
const postSchema = mongoose.Schema({
    title: String,
    excerpt: String,
    content: String,
    author: {
        type: mongoose.ObjectId,
        ref: 'User'
    },
    school: {
        type: mongoose.ObjectId,
        ref: 'School'
    },
    status: {
        type: String,
        enum: ["delete", "draft", "publish"],
        default: 'publish'
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