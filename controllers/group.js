import { Group } from "../models/Group.js"
import { showLog } from '../utils/timeLog.js'


export const getGroups = (req, res) => {
    showLog('getGroups() Function Called At controllers/group.js')
    
    Group
        .find()
        .then((group) => {
            res.json(group)
        })
        .catch((error) => {
            showLog('Error Occured At getGroups() Function Called At controllers/group.js')
            res.status(400).json({
                error: true,
                errorMessage: error
            })
        })
}

export const getGroup = (req, res) => {
    showLog('getGroup() Function Called At controllers/group.js')
    const groupId = req.params.groupId
    Group
        .findOne({ _id: groupId })
        // .populate({ path: 'users', select: 'firstName lastName sapId email designations'})
        .then((group) => {
            res.json(group)
        })
        .catch((error) => {
            showLog('Error Occured At getGroup() Function Called At controllers/group.js')
            res.status(400).json({
                error: true,
                errorMessage: error
            })
        })
}

export const newGroup = (req, res) => {
    showLog('newGroup() Function Called At controllers/group.js')
    let newgroup = new Group({
        groupName: req.body.groupName,
        users: req.body.users
    })
    newgroup.save()
        .then((group) => {
            showLog(`New Group By SAPID: ${req.auth.user.sapId} With ID: ${group._id}`)
            res.json(group)
        })
        .catch((error) => {
            showLog('Error Occured At newGroup() Function Called At controllers/group.js')
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