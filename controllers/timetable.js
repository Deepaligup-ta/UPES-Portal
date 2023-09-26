import { Timetable } from "../models/Timetable.js";
import { Batch } from '../models/Batch.js'

export const getTimeTableFaculty = (req, res) => {
   
    Timetable
        .find({
          
        })
        .populate({ 
            path: 'eventSchema',
            populate: {
                path: 'subjectName batch',
                populate: {
                    path: 'course',
                    strictPopulate: false
                }
            }
        })
        .then(result => {
            let array = []
            for(let i = 0; i < result.length; i++) {
                console.log("1st")
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
                    console.log(String(result[i].eventSchema[j].faculty))

                    if(String(result[i].eventSchema[j].faculty) === req.auth._id)  {
                        console.log("if")
                        const obj = result[i].eventSchema[j]
                        object.batch = obj.batch.course.courseName+'_Sem-'+obj.batch.currentSemester+'_Batch_'+obj.batch._id
                        object.start = obj.start
                        object.end = obj.end
                        object.subject = obj.subjectName.subjectName
                        object.room = obj.roomNumber
                        object.day = obj.day
                        array.push(object)
                        console.log(array)
                    }else {
                        console.log("else")
                    }
                    
                    
                }  
                if (i === result.length) {
                    break;
                }     
            }
            res.json(array)
        })
   
}