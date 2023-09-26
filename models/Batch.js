import mongoose from "mongoose"


const batchSchema = mongoose.Schema({
    batchName: {
        type: String,
    },
    course: {
        type: mongoose.ObjectId,
        ref: 'Course'
    },
    classCoordinator: {
        type: mongoose.ObjectId,
        ref: 'User'
    },
    currentSemester: {
        type: Number,
        default: 1
    },
    students: [{
        type: mongoose.ObjectId,
        ref: 'Student'
    }],
    timetable: {
        type: mongoose.ObjectId,
        ref: 'Timetable'
    }

}, { timestamps: true })

export const Batch = mongoose.model('Batch', batchSchema)

export const batchResource = {
    resource: Batch,
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