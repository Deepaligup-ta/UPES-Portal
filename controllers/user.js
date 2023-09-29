import { User } from '../models/User.js'

export const getFaculty = (req, res) => {
    const userId = req.auth._id

    User.findOne({ _id: userId })
        .then((user) => {
            if(!user)    
                return res.status(400).json({
                    error: true
                })
            User.findOne({
                _id: req.params.facultyId
            })
            .select("-salt-encpy_password")
            .then((faculty) => {
                if(!faculty)
                    return res.status(400).json({
                        error: true
                    })
                
                res.json(faculty)
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

export const getAllFaculty = (req, res) => {
    const userId = req.auth._id

    User.findOne({ _id: userId })
        .then((user) => {
            if(!user)    
                return res.status(400).json({
                    error: true
                })
            User.find({
                school: user.school
            })
            .select("-salt-encpy_password")
            .then((users) => {
                if(!users)
                    return res.status(400).json({
                        error: true
                    })
                
                res.json(users)
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