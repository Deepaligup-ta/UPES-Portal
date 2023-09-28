import { User } from '../models/User.js'



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
            .then((users) => {
                if(!users)
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