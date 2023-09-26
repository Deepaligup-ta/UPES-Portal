import mongoose from "mongoose"


const subjectSchema = mongoose.Schema({
    subjectName: {
        type: String,
        required: true
    },
    school: {
        type: mongoose.ObjectId,
        ref: 'School'
    }
}, { timestamps: true })

export const Subject = mongoose.model('Subject', subjectSchema)

export const subjectResource = {
    resource: Subject,
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