import {createTransport} from 'nodemailer'

const smtpConfig = {
    host: "",
    port: 587,
    secure: false,
    auth: {
        user: "",
        pass: ""
    }
}

export const mailTransport = nodemailer.createTransport(smtpConfig)
mailTransport.verify((error, success) => {
    if(error)
        console.log(`Error: ${error}`)
    else    
        console.log("Mail SMTP Success")
})
export const sendMail = (mailOptions) => {
    mailTransport.sendMail(mailOptions, (res) => {
        return res
    })
}