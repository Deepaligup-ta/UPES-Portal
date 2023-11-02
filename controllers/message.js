import { cache } from "../middlewares/cache.js"
import { Message } from "../models/Message.js"
import { User } from '../models/User.js'

export const addNew = (req, res) => {
    const { title, message, to } = req.body
    User
        .findOne({ _id: req.auth._id })
        .then((data) => {
            let newmessage = new  Message({
                title: title,
                message: message,
                from: req.auth._id,
                to: to,
                school: data.school
            })
            newmessage.save()
                .then((data_1) => {
                    res.json(data_1)
                })
                .catch((error) => {
                   res.status(400).json({
                    error: true,
                    errorMessage: error
                   })
                })
        })
        .catch((error) => {
            return res.status(400).json({
                error: true,
                errorMessage: error
            })
        })
}

export const getAll = (req, res) => {
    const pageOptions = {
        page: req.query.page || 1,
        limit: req.query.limit || 8,
        sort: { createdAt: -1 },
        populate: { path: 'from to', select: 'firstName sapId designations' }
    }
    Message
        .paginate({
            status: 'publish',
            to: req.auth._id
        }, pageOptions, (err, result) => {
            if(err)
                return res.status(400).json({
                    error: true,
                    errorMessage: err
                })
            res.json(result)
        })
    // Announcement
    //     .find({ status: 'publish' })
    //     .select('title description from')
    //     .populate({ path: "from", select: "firstName sapId designations"})
    //     .then((data) => {
    //         if(data)    
    //             return res.json(data)
    //         else 
    //             return res.status(400).json({
    //                 error: true
    //             })
    //     })
    //     .catch((error) => {
    //         res.status(400).json({
    //             error: true,
    //             errorMessage: error
    //         })
    //     })
}   

export const getOne = (req, res) => {
    
    Message
        .findOne({ status: 'publish', _id: req.params.messageId, to: req.auth._id })
        .populate({ path: "from", select: "-encpy_password -salt"})
        .then((data) => {
            if(data){
                return res.json(data)
            }
            else
                return res.status(400).json({
                    error: true
                })
        })
        .catch((error) => {
            res.status(400).json({
                error: true,
                errorMessage: error
            })
        })
}


export const updateMessage = (req, res) => {
    const { _id } = req.body

    Message
        .updateOne({ _id: _id }, req.body)
        .then((data) => {
            if(data) 
                return res.json({
                    success: true,
                    error: false,
                    successMessage: "Updated message"
                })
            else
                return res.status(400).json({
                    error: true
                })
        })
        .catch((error) => {
            res.status(400).json({
                error: true,
                errorMessage: error
            })
        })
}
export const deleteMessage = (req, res) => {
    const { messageId } = req.body
    const userId = req.auth._id
    Message
        .findOne({ _id: messageId })
        .then((data) => {
            if(String(data.from) !== userId)
                return res.status(400).json({
                    error: true,
                    errorMessage: "Not Allowed!"
                })
            Message.updateOne({ _id: messageId }, { status: 'delete'})
                .then((data) => {
                    if(data) 
                        return res.json({
                            success: true,
                            error: false,
                            successMessage: "Deleted Message!"
                        })
                    else
                        return res.status(400).json({
                            error: true
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
                    errorMessage: error
                })
            })
}