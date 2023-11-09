import { Timetable } from "../models/Timetable.js";
import { Batch } from '../models/Batch.js'
import { showLog } from "../utils/timeLog.js";

export const getTimeTableBatch = (req, res) => {
    Timetable.findOne({ batch: req.params.batchId })
        .then((timetable) => {
            if(!timetable) 
                return res.status(400).json({
                    error: true
                })

            res.json(timetable.eventSchema)
        })
        .catch((error) => {
            res.status(400).json({
                error: true,
                errorMesssage: error
            })
        })
}

export const getTimeTableFaculty = (req, res) => {
    showLog('getTimeTableFaculty() Function Called At controllers/timetable.js')
    let userId = ''
    if(req.query.userId) 
        userId = req.query.userId
    else 
        userId = req.auth._id
    Timetable
        .find({
          
        })
        .populate({ 
            path: 'eventSchema',
            populate: {
                path: 'subjectnName batch',
                populate: {
                    path: 'course',
                    strictPopulate: false
                }
            }
        })
        .then(result => {
            let array = []
            for(let i = 0; i < result.length; i++) {
                for(let j = 0; j < result[i].eventSchema.length; j++) {
                    let object = {
                       batch: '',
                        start: '',
                        end: '',
                        subject: '',
                        room: '',
                        day: ''
                    }
                    //res.json(result[i].eventSchema[i])\

                    if(String(result[i].eventSchema[j].faculty) === userId)  {
                        const obj = result[i].eventSchema[j]
                        object.batch = obj.batch.course.courseName+'_Sem-'+obj.batch.currentSemester+'_Batch_'+obj.batch._id
                        object.start = obj.start
                        object.end = obj.end
                        object.subject = obj.subjectName.subjectName
                        object.room = obj.roomNumber
                        object.day = obj.day
                        array.push(object)
                    }
                    
                }  
                if (i === result.length) {
                    break;
                }     
            }
            res.json(array)
        })
        .catch((error) => {
            showLog('Error Occured At getTimeTableFaculty() Function Called At controllers/timetable.js')
            res.status(400).json({
                error: error
            })
        })
   
}