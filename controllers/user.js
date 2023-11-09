import { User } from '../models/User.js'
import { showLog } from '../utils/timeLog.js'

export const getFaculty = (req, res) => {
    showLog('getFaculty() Function Called At controllers/user.js')
    User
        .findOne({
            _id: req.params.userId
        })
        .select("-salt -encpy_password")
            .then((faculty) => {
                if(!faculty)
                    return res.status(400).json({
                        error: true
                    })
                
                res.json(faculty)
            })
            .catch((error) => {
                showLog('Error Occured At getFaculty() Function Called At controllers/user.js')
                res.status(400).json({
                    error: true,
                    errorMessage: error,
                })
            })
      
}

export const getAllFaculty = (req, res) => {
    showLog('getAllFaculty() Function Called At controllers/user.js')
    const userId = req.auth._id
    const pageOptions = {
        page: req.query.page || 1,
        limit: req.query.limit || 10,
        select: 'sapId firstName lastName email reportingManager',
        populate: { path: 'reportingManager', select: 'firstName sapId'}
    }
    User
        .paginate({}, pageOptions, (err, result) => {
            if(err)
                return res.status(400).json({
                    error: true,
                    errorMessage: err
                })
            res.json(result)
        })
    // User.findOne({ _id: userId })
    //     .then((user) => {
    //         if(!user)    
    //             return res.status(400).json({
    //                 error: true
    //             })
    //         User.find({
    //             school: user.school
    //         })
    //         .select("-salt -encpy_password")
    //         .then((users) => {
    //             if(!users)
    //                 return res.status(400).json({
    //                     error: true
    //                 })
                
    //             res.json(users)
    //         })
    //         .catch((error) => {
    //             res.status(400).json({
    //                 error: true,
    //                 errorMessage: error
    //             })
    //         })
    //     })
    //     .catch((error) => {
    //         res.status(400).json({
    //             error: true,
    //             errorMessage: error
    //         })
    //     })
}