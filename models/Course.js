import mongoose from "mongoose"


const courseSchema = mongoose.Schema({
    courseName: {
        type: String,
        required: true,
        unique: true
    },
    duration: {
        type: Number,
        default: 3
    },
    type: {
        type: String,
        enum: ['UG', 'PG']
    },
    school: {
        type: mongoose.ObjectId,
        ref: 'School'
    },
    status: {
        type: String,
        enum: ["publish", "delete"],
        default: "publish"
    }
}, { timestamps: true })

export const Course = mongoose.model('Course', courseSchema)

export const courseResource = {
    resource: Course,
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