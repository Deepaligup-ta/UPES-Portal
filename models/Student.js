import mongoose from "mongoose"

const resultSchema = new mongoose.Schema({
    subjectName: String,
    subjectCode: String,
    internalMarks: Number,
    endSemMarks: Number,
    midSemMarks: Number,
    finalMarks: Number,
    grade: String,
    semester: String,
    evaluation: {
        type: mongoose.ObjectId,
        ref: 'Evaluate'
    }
}, { timestamps: true })

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique:false
        },
        sapId: {
            type: Number,
            required: true,
            unique: true
        },
        rollNumber: {
            type: String,
            required: true,
            unique: true
        },
        semester: {
            type: String,
            required: true,
        },
        yearOfEnrollment: {
            type: String,
        },
        status: {
            type: String,
            enum: ["REGD.", "Name Struck off"]
        },
        program: String,
        batch: {
            type: String,
            required: true
        },
        school: {
            type: mongoose.ObjectId,
            ref: 'School'
        },
        grades:[resultSchema]
    },
    { 
        timestamps:true 
    }
)

export const Student = mongoose.model('Student', studentSchema)

export const studentResource = {
    resource: Student,
}