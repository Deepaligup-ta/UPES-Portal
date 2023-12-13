import mongoose from "mongoose"

const evaluateSchema = new mongoose.Schema({
    programName: {
        type: String,
        required: true
    },
    subjectCode: {
        type: String,
        required: true
    },
    subjectName: {
        type:String,
        required: true
    },
    evaluator: {
        type: mongoose.ObjectId,
        ref: 'User'
    },
    strength: Number,
    batchName: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true
    },
    uploaded: {
        type: Boolean,
        default: false
    }
    
})

export const Evaluate = mongoose.model('Evaluate', evaluateSchema)
export const evaluateResource = {
    resource: Evaluate,
}