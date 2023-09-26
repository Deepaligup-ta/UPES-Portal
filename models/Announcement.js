import mongoose from 'mongoose'


const announcementSchema = mongoose.Schema({
    title: String,
    description: String,
    message: String,
    from: {
        type: mongoose.ObjectId,
        ref: 'User'
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


export const Announcement = mongoose.model('Annoucement', announcementSchema)
export const announcementResource = {
    resource: Announcement,
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