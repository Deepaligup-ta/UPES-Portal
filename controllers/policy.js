import { Policy  } from "../models/Policy.js"
import { User } from "../models/User.js"

export const getAllPolicy = (req, res) => {

}
export const getPolicy = (req ,res) => {

}
export const deletePolicy = (req, res) => {

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