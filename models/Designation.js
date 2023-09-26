import mongoose from "mongoose"
const designationSchema = new mongoose.Schema({
    name: {
        type: String,
        // enum: ['assistant professor', 'dean', 'associate dean'],
        required: true
    },
    parentDesignation: {
        type: mongoose.ObjectId,
        ref: 'Designation',
        required: false

    }
})

const Designations = mongoose.model('Designation', designationSchema)
export const designationResource = {
    resource: Designations,
}