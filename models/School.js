import mongoose from "mongoose"


const schoolSchema = mongoose.Schema({
    schoolName: {
        type: String,
        required: true
    },
    subjects: [{
        type:mongoose.ObjectId,
        ref: 'Subject'
    }],
    mangement: [{
        type: mongoose.ObjectId,
        ref: 'User'
    }],
    courses:[{
        type: mongoose.ObjectId,
        ref: 'Course'
    }],
    faculty: [{
        type: mongoose.ObjectId,
        ref: 'User'
    }]

}, { timestamps: true })

export const School = mongoose.model('School', schoolSchema)

export const schoolResource = {
    resource: School,
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