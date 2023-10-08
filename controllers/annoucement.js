import { cache } from "../middlewares/cache.js"
import { Announcement } from "../models/Announcement.js"
import { User } from '../models/User.js'

export const addNew = (req, res) => {
    const { title, description, message } = req.body

    User
        .findOne({ _id: req.auth._id })
        .then((data) => {
            let annoucement = new  Announcement({
                title: title,
                description: description,
                message: message,
                from: req.auth._id,
                school: data.school
            })
            annoucement.save()
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
                errorMessage: erorr
            })
        })
}

export const getAll = (req, res) => {
    const pageOptions = {
        page: req.query.page || 1,
        limit: req.query.limit || 8,
        sort: { createdAt: -1 },
        populate: { path: 'from', select: 'firstName sapId designations'}
    }
    Announcement
        .paginate({
            status: 'publish'
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
    
    Announcement
        .findOne({ status: 'publish', _id: req.params.announcementId})
        .populate({ path: "from", select: "-encpy_password -salt"})
        .then((data) => {
            if(data)
                return res.json(data)
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


export const updateAnnouncement = (req, res) => {
    const { _id } = req.body

    Announcement
        .updateOne({ _id: _id }, req.body)
        .then((data) => {
            if(data) 
                return res.json({
                    success: true,
                    error: false,
                    successMessage: "Updated annoucement"
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
export const deleteAnnoucement = (req, res) => {
    const { annoucementId } = req.body
    const userId = req.auth._id
    Announcement
        .findOne({ _id: req.params.annoucementId})
        .then((data) => {
            if(String(data.from) !== userId)
                return res.status(400).json({
                    error: true,
                    errorMessage: "Not Allowed!"
                })
            Announcement.updateOne({ _id: annoucementId }, { status: 'delete'})
                .then((data) => {
                    if(data) 
                        return res.json({
                            success: true,
                            error: false,
                            successMessage: "Deleted Announcement!"
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