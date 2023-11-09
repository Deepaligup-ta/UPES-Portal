import { Course } from "../models/Course.js";
import { User } from "../models/User.js";
import { showLog } from '../utils/timeLog.js'

export const addCourse = (req, res) => {
    const { courseName, duration, type, status } = req.body
    User
        .findOne({ _id: req.auth._id })
        .then((user) => {
            if(!user)
                return res.status(400).json({
                    error: true
                })
            
            let course = new Course({
                courseName: courseName,
                duration: duration,
                type: type,
                status: status,
                school: user.school
            })
            course
                .save()
                .then((data) => {
                    if(!data)
                        return res.statu-s(400).json({
                            error: true
                        })
                    
                    res.json(data)
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

export const deleteCourse = (req, res) => {
    const { _id, courseName, duration, type, school } = req.body
    User
        .findOne({ _id: req.auth._id, school: school })
        .then((user) => {
            if(!user)
                return res.status(400).json({
                    error: true
                })
            
            Course.updateOne({ 
                _id: _id 
                }, { 
                    courseName, duration, type, status: "delete" 
                })
                .then((update) => {
                    if(!update)
                        return res.status(400).json({
                            error: true
                        })
                    
                    res.json({
                        success: true,
                        dbResponse: update
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

export const updateCourse = (req ,res) => {
    const { _id, courseName, duration, type, status, school } = req.body
    User
        .findOne({ _id: req.auth._id, school: school })
        .then((user) => {
            if(!user)
                return res.status(400).json({
                    error: true
                })
            
            Course.updateOne({ 
                _id: _id 
                }, { 
                    courseName, duration, type, status
                })
                .then((update) => {
                    if(!update)
                        return res.status(400).json({
                            error: true
                        })
                    
                    res.json({
                        success: true,
                        dbResponse: update
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

export const getCourses = (req, res) => {
    showLog('getCourses() Function Called At controllers/course.js')

    const userId = req.auth._id
    User.findOne({
        _id: userId
    })
    .then((user) => {
        if(!user) 
            return res.status(400).json({
                error: true
            })
        Course
            .find({
                school: user.school
            })
            .populate('school')
            .then((course) => {
                if(!course)
                    return res.status(400).json({
                        erorr: true
                    })
                res.json(course)
            })
            .catch((error) => {
                showLog('Error Occured At getCourses() Function Called At controllers/course.js')
                res.status(400).json({
                    erorr: true,
                    errorMessag: error
                })
            })
    })
    .catch((error) => {
        showLog('Error Occured At getCourses() Function Called At controllers/course.js')
        res.status(400).json({
            error: true,
            errorMessage: error
        })
    })
}

export const getCourse = (req, res) => {
    showLog('getCourse() Function Called At controllers/course.js')
    Course
        .findOne({
            _id: req.params.courseId
        })
        .populate('school')
        .then((course) => {
            if(!course)
                return res.status(400).json({
                    erorr: true
                })
            res.json(course)
        })
        .catch((error) => {
            showLog('Error Occured At getCourse() Function Called At controllers/course.js')
            res.status(400).json({
                erorr: true,
                errorMessag: error
            })
        })
}