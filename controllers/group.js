import { Group } from "../models/Group.js"



export const getGroups = (req, res) => {
    Group
        .find()
        .then((group) => {
            res.json(group)
        })
        .catch((error) => {
            res.status(400).json({
                error: true,
                errorMessage: error
            })
        })
}

export const getGroup = (req, res) => {
    const groupId = req.params.groupId
    Group
        .findOne({ _id: groupId })
        // .populate({ path: 'users', select: 'firstName lastName sapId email designations'})
        .then((group) => {
            res.json(group)
        })
        .catch((error) => {
            res.status(400).json({
                error: true,
                errorMessage: error
            })
        })
}

export const newGroup = (req, res) => {
    let newgroup = new Group({
        groupName: req.body.groupName,
        users: req.body.users
    })
    newgroup.save()
        .then((group) => {
            res.json(group)
        })
        .catch((error) => {
            res.status(400).json({
                error: true,
                errorMessage: error
            })
        })
}

export const editGroup = (req, res) => {
    Group
        .updateOne({ _id: req.body._id }, req.body)
        .then((group) => {
            res.json(group)
        })
        .catch((error) => {
            res.status(400).json({
                error: true,
                errorMessage: error
            })
        })
}   

export const deleteGroup = (req, res) => {
    Group
        .deleteOne({ _id: req.body.groupId })
        .then((group) => {
            res.json(group)
        })
        .catch((error) => {
            res.status(400).json({
                error: true,
                errorMessage: error
            })
        })
}