import { Evaluate } from "../models/Evaluate.js"
import readXlsxFile from "read-excel-file/node"
import pdf from 'pdf-creator-node'
import fs from 'fs'
import { Student } from "../models/Student.js"

var template = fs.readFileSync('./template/awardsheet.html', 'utf-8')

export const submitResult = (req, res) => {
    
    //Get Values From Form
    const { value, file, subjectName, subjectCode, semester } = req.body
    //Split The Base64
    let base64Image = file.split(';base64,').pop();
    Evaluate
        .findOne({ _id: value, uploaded: false })
        .then((eva) => {
            //Find If It Exits
            if(!eva)
                return res.status(400).json({
                    error: true,
                    errorMessage: "Can't find the batch OR Result already uploaded!"
                })
                //Convert Base64 to original file
                fs.writeFile(`temp/${value}.xlsx`, base64Image, {encoding: 'base64'}, function(err) {
                    //If No Error
                    if(!err) {
                        //Read the xlsx file
                        readXlsxFile(fs.createReadStream(`./temp/${value}.xlsx`)).then((rows) => {
                            //removes the first row
                            rows.shift()
                            //mapping the rows
                            rows.map((row, index) => {
                                //find if the student exits
                                Student.findOne({ sapId: row[1] })
                                    .then((student) => {
                                        //if doesnt create a new doc
                                        if(!student) {
                                            let news =  {
                                                name: row[2],
                                                sapId: row[1],
                                                rollNumber: row[0],
                                                grades: [
                                                    {
                                                        subjectName: subjectName,
                                                        subjectCode: subjectCode,
                                                        semester: semester,
                                                        internalMarks: row[4],
                                                        endSemMarks: row[5],
                                                        midSemMarks: row[3],
                                                        evaluation: value
                                                    }
                                                ]
                                            }
                                            let newStu = new Student(news)
                                            newStu.save()
                                            //once it reaches the end send the response
                                            if(index == rows.length - 1) {
                                                Evaluate
                                                    .updateOne({ _id: value }, { $set: { uploaded: true } })
                                                    .exec()
                                                    .then((done) => {
                                                        res.json({
                                                            success: true,
                                                            message: "Result Uploaded!"
                                                        })
                                                    })
                                                    .catch((error) => {
                                                        res.status(400).json({
                                                            error: true,
                                                            errorMessage: error
                                                        })
                                                    })
                                                
                                            }
            
                                        }else {
                                            //if exits just push the subject grades
                                            let grades = {
                                                subjectName: subjectName,
                                                subjectCode: subjectCode,
                                                semester: semester,
                                                internalMarks: row[4],
                                                endSemMarks: row[5],
                                                midSemMarks: row[3],
                                                evaluation: value
                                            }
                                            Student
                                                .updateOne({ sapId: student.sapId }, { $push: { grades: grades }})
                                                .exec()
                                            //once it reaches the end send the response
                                            if(index == rows.length - 1) {
                                                Evaluate
                                                    .updateOne({ _id: value }, { $set: { uploaded: true } })
                                                    .exec()
                                                    .then((done) => {
                                                        res.json({
                                                            success: true,
                                                            message: "Result Uploaded!"
                                                        })
                                                    })
                                                    .catch((error) => {
                                                        res.status(400).json({
                                                            error: true,
                                                            errorMessage: error
                                                        })
                                                    })
                                                    
                                            }
                                        }
                                    })
                                    .catch((error) => {
                                        return error
                                    })
                            })
                         
                        })
                    }
                })
        }) 
        .catch((error) => {
            res.status(400).json({
                error: true,
                errorMessage: error
            })
        })
   
  
}

export const getAll = (req, res) => {
    const { _id } = req.auth
    if(req.query.all) {
        Evaluate
            .find()
            .then((data) => {
                res.json(data)
            })
            .catch((err) => {
                res.status(400).json({
                    error: true,
                    errorMessage: err
                })
            })
    }else {
        Evaluate
            .find({ evaluator: _id })
            .then((data) => {
                res.json(data)
            })
            .catch((err) => {
                res.status(400).json({
                    error: true,
                    errorMessage: err
                })
            })
    }
}

export const getOne = (req, res) => {
    const { evaluationId } = req.params
    Evaluate
        .findOne({ evaluationId, uploaded: false })
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.status(400).json({ 
                error: true,
                errorMessage: err
            })
        })

}

export const getResult = (req, res) => {
    const { evaluationId } = req.body
    Student.find({ 
        grades: { 
            $elemMatch: {
                evaluation: evaluationId
            }
        }
    })
    .then((result) => {
        res.json(result)
    })
    .catch((error) => {
        res.status(400).json({
            error: true,
            errorMessage: error
        })
    })
}

export const generateResult = (req, res) => {
    const { sapId } = req.body
    const options = {
        format: "A4",
        orientation: "portrait",
        border: "10mm"
    }
    Student
        .findOne({ sapId: sapId })
        .then((student) => {
            let grades = student.grades.map(item=> item.toObject())
            let finalGrades = []
            grades.map((item) => {
                let finalGrade = 0
                if(item.semester === 'I' || item.semester === 'II') {
                    finalGrade = (item.internalMarks * 0.5) + (item.endSemMarks * 0.3) + (item.midSemMarks * 0.2)

                }else {
                    finalGrade = (item.internalMarks * 0.3) + (item.endSemMarks * 0.5) + (item.midSemMarks * 0.2)

                }
                finalGrades.push({ subjectName: item.subjectName, subjectCode: item.subjectCode, finalGrade: finalGrade })
            })
            const document = {
                html: template,
                data: {
                  name: student.name,
                  sapId: student.sapId,
                  rollNumber: student.rollNumber,
                  grades: finalGrades
                },
                path: `./temp/pdf/${student.sapId}.pdf`,
                type: "",
            }
            pdf
                .create(document, options)
                .then((file) => {
                    if(file) {
                        res.download(file.filename, `${student.sapId}.pdf`, (err) => {
                            if (err) {
                              res.status(500).send({
                                message: "Could not download the file. " + err,
                              })
                            }
                          })
                       
                    }else {
                        res.status(400).json({
                            error: true
                        })
                    }
                })
                .catch((error) => {
                    console.log(error)
                    res.status(400).json({
                        error: true,
                        errorMessage: "Can't generate PDF"
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