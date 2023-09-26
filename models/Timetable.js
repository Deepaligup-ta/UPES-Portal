import mongoose from "mongoose"

const eventSchema = mongoose.Schema({
    subjectName: {
        type: mongoose.ObjectId,
        ref: 'Subject'
    },
    faculty: {
        type: mongoose.ObjectId,
        ref:'User'
    },
    roomNumber: {
        type: String,
        default: '0000'
    },
    batch: {
        type: mongoose.ObjectId,
        ref: 'Batch'
    },
    day: {
        type: String,
        enum: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    },
    start: {
        type: Date
    },
    end: {
        type: Date
    }
}, { timestamps : true })

const timetableSchema = mongoose.Schema({
    batch: {
        type:mongoose.ObjectId,
        ref: 'Batch'
    },
    eventSchema: [eventSchema]
}, { timestamps: true })
export const Timetable = mongoose.model('Timetable', timetableSchema)

export const timeTableResource = {
    resource: Timetable,
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