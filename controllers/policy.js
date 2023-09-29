import { Policy  } from "../models/Policy.js"
import { User } from "../models/User.js"

export const getAllPolicy = (req, res) => {
    const userId = req.auth._id
    
    User.findOne({ _id: userId })
        .then((user) => {
            if(!user) 
                return res.status(400).json({
                    erorr: true
                })
            Policy.find({
                school: user.school,
                status: (user.role === "mangement" ? '*' : 'publish')
            })
            .then((policy) => {
                if(!policy)
                    return res.status(400).json({
                        error: true,
                        errorMessage: "Policy not found"
                    })
                res.json(policy)
            })
            .catch((error) => {
                return res.status(400).json({
                    erorr: true,
                    errorMessage: error
                })
            })
        })
        .catch((erorr) => {
            return res.status(400).json({
                erorr: true,
                errorMessage: erorr
            })
        })
}
export const getPolicy = (req ,res) => {
    const userId = req.auth._id
    const policyId = req.params.policyId
    User.findOne({ _id: userId })
        .then((user) => {
            if(!user) 
                return res.status(400).json({
                    erorr: true
                })
            Policy.findOne({
                _id: policyId,
                school: user.school,
                status: "publish"
            })
            .then((policy) => {
                if(!policy)
                    return res.status(400).json({
                        error: true,
                        errorMessage: "Policy not found"
                    })
                res.json(policy)
            })
            .catch((error) => {
                return res.status(400).json({
                    erorr: true,
                    errorMessage: error
                })
            })
        })
        .catch((erorr) => {
            return res.status(400).json({
                erorr: true,
                errorMessage: erorr
            })
        })
}

export const deletePolicy = (req, res) => {
    const userId = req.auth._id
    const policyId = req.params.policyId
    User.findOne({ _id: userId, designations: "dean" })
        .then((user) => {
            if(!user) 
                return res.status(400).json({
                    erorr: true
                })
            Policy.updateOne({
                _id: policyId
            },
            { status: "delete"})
            .then((policy) => {
                if(!policy)
                    return res.status(400).json({
                        error: true,
                        errorMessage: "Policy not found"
                    })
                res.json({
                    success: true,
                    successMessage: "Deleted Successfully"
                })
            })
            .catch((error) => {
                return res.status(400).json({
                    erorr: true,
                    errorMessage: error
                })
            })
        })
        .catch((erorr) => {
            return res.status(400).json({
                erorr: true,
                errorMessage: erorr
            })
        })
}

export const updatePolicy = (req, res) => {
    const userId = req.auth._id
    const { policyId, policyName, policyFile } = req.body
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
                    _id: policyId 
                }, { 
                    policyFile: policyFile, 
                    policyName: policyName
                })
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

export const addPolicy = (req, res) => {
    const userId = req.auth._id
    const { policyName, policyFile } = req.body
    User.findOne({ _id: userId })
        .then((user) => {
            if(user.designations != "dean" ){
                return res.status(400).json({
                    error: true,
                    errorMessage: "You are not allowed!"
                })
            }
            let policy = new Policy({
                policyName: policyName,
                policyFile: policyFile,
                school: user.school
            })
            policy.save()
                    .then((save) => {
                        if(!save)
                            return res.status(400).json({
                                error: true
                            })
                        res.json({
                            success: true,
                            data: save
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