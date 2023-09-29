import { Student } from '../models/Student.js'
import { User } from '../models/User.js'

export const getStudent = (req, res) => {
    User.findOne({ _id: req.params.studentId })
        .then((student) => {
            if(!student)
                return res.status(400).json({
                    error: true
                })
            res.json(student)
        })
}

export const updateStudent = (req, res) => {
    const userId = req.auth._id
    const studentId = req.body._id
    User.findOne({ _id: userId })
        .then((user) => {
            if(user.designations != "dean" ){
                return res.status(400).json({
                    error: true,
                    errorMessage: "You are not allowed!"
                })
            }
           Policy
                .updateOne({ 
                    _id: studentId 
                }, req.body)
                .then((update) => {
                    if(!update)
                        return res.status(400).json({
                            error: true,
                        })
                    res.json({
                        success: true,
                        dbResponse: update
                    })
                })
                .catch((error) => {
                    res.status(400).json({
                        error: true,
                        errorMessage: error
                    })
                })
        })
        .catch((error) => {
            res.status(400).json({
                error: true,
                errorMessage:error
            })
        })
}


export const getAllStudents = (req, res) => {
    User.findOne({
        _id: req.auth._id
    })
    .then((user) => {
        if(!user)
            return res.status(400).json({
                error: true
            })
        
        Student.find({
            school: user.school
        })
        .then((students) => {
            if(!students)  
                return res.status(400).json({
                    error: true
                })
        
                res.json()
        })
        .catch((error) => {
            res.status(400).json({
                error: true,
                errorMessage: error
            })
        })
    })
    .catch((error) => {
        res.status(400).json({
            error: true,
            errorMessage: error
        })
    })
}