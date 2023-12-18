import dotenv from 'dotenv'
import express, { json } from 'express'
import mongoose from 'mongoose'
import AdminJS from 'adminjs'
import cors from 'cors'
import AdminJSExpress from '@adminjs/express'
import * as AdminJSMongoose from '@adminjs/mongoose'
import MongoStore from 'connect-mongo'
import path from "path"
import compression from 'compression'
import morgan from 'morgan'
import rfs from 'rotating-file-stream'
import expressStatusMonitor from 'express-status-monitor'
import requestIp from 'request-ip'
import fs from 'fs'
import { parse } from 'csv-parse'
const __dirname = path.resolve()

//Controllers
import { authenticateAdmin } from './controllers/auth.js'
//Routes
import { router as authRoutes } from './routes/auth.js'
import { router as timeTableRoutes } from './routes/timetable.js'
import { router as courseRouter} from './routes/course.js'
import { router as postRouter } from './routes/post.js'
import { router as groupRouter } from './routes/group.js'
import { router as pushRouter } from './routes/push.js'
import { router as evaluateRouter } from './routes/evaluate.js'

//AdminJs Resources
import { User, usersResource } from './models/User.js'
import { designationResource } from './models/Designation.js'
import { schoolResource } from './models/School.js'
import { courseResource } from './models/Course.js'
import { timeTableResource } from './models/Timetable.js'
import { postResource } from './models/Post.js'
import { groupResource } from './models/Group.js'
import { evaluateResource, Evaluate } from './models/Evaluate.js'

//Utils
import { rateLimiter } from './middlewares/rateLimit.js'
import { showLog } from './utils/timeLog.js'


//Enviroment File Configuration
dotenv.config()

//App Configs
const PORT = process.env.PORT //PORT

let accessLogStream = rfs.createStream('access.log', {
    interval: '1d', 
    path: path.join(__dirname, 'log')
})

//Admin Js Adapter
AdminJS.registerAdapter({
    Resource: AdminJSMongoose.Resource,
    Database: AdminJSMongoose.Database
})

//Init App Of Express
const app = express()

//Database Connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex:true,
    ignoreUndefined: true,
}).then(() => {
    showLog('Datbase Connected')
}).catch(err => showLog(err))

//Session Store For Logged In Users AdminJs
const sessionStore =  MongoStore.create({
    client: mongoose.connection.getClient(),
    collectionName: "session",
    stringify: false,
    autoRemove: "interval",
    autoRemoveInterval: 1
})
//Admin Js Config
const adminJs = new AdminJS({
    resources: [
        designationResource, 
        usersResource, 
        schoolResource, 
        courseResource, 
        timeTableResource, 
        postResource,
        groupResource,
        evaluateResource
    ],
    branding: {
        companyName: "SoCS Information System",
        logo: '',
        withMadeWithLove: false,
        
    },

})
//Authenticate Function
const authenticate = async (email, password) => {
    const DEFAULT_ADMIN = {
        email: '',
        password: 'password',
        name: ''
    }
    return Promise.resolve(authenticateAdmin(email, password)
        .then(user => {
            console.log(user)
            if(user.error1 || user.error2 || user.error3){
                return Promise.resolve(DEFAULT_ADMIN)
            }
            if(user){
                DEFAULT_ADMIN.email = user.email
                DEFAULT_ADMIN.name = user.firstName
                return Promise.resolve(DEFAULT_ADMIN)
            }
            else      
                return Promise.resolve(DEFAULT_ADMIN)
        }))
}
//Router For AdminJs Authenticated Routes
const router = AdminJSExpress.buildAuthenticatedRouter(
    adminJs,
    {
        authenticate,
        cookieName: 'adminjs',
        cookiePassword: 'sessionsecret',
    },
    null,
    {
        store: sessionStore,
        resave: true,
        saveUninitialized: true,
        secret: 'sessionsecret',
        cookie: {
          httpOnly: process.env.NODE_ENV === 'production',
          secure: process.env.NODE_ENV === 'production',
        },
        name: 'adminjs',
    }
)
//Use static sources
app.use(express.static('public', { maxAge: 72000 }))
//CORS
app.use(cors({
    origin: [`${process.env.ORIGIN}`, 'http://localhost:3000'], 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true,
}))
let count = 0;
let notFound = []
// fs.createReadStream('./socsev.csv')
//     .pipe(parse({ delimiter: ",", from_line: 2}))
//     .on("data", (row) => {
//         let names = row[7].split(" ", 3)
//         const newEvaa = {
//             firstName: names[0],
//             lastName: names[1] + (names[2] ? " "+names[2]: '')
//         }
//         const newEva = {
//             programName: row[2],
//             semester: row[3],
//             subjectCode: row[4],
//             subjectName: row[5],
//             evaluator: "",
//             strength: row[8],
//             batchName: row[9],
            
//         }
//         User.findOne({ firstName: newEvaa.firstName, lastName: (newEvaa.lastName ? newEvaa.lastName : "") })
//             .then((user) => {
//                 if(!user) {
//                     notFound.push(newEvaa)
//                 }else {
//                     newEva.evaluator = user._id.toString()
//                     let eva = new Evaluate(newEva)
//                     eva.save().then((data) => {
//                         console.log(data)
//                     })
//                     .catch(err => {
//                         console.log(err)
//                     })
//                 }
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//         console.log(newEva)
//     })

//Request Limiter
app.use(rateLimiter)
//IPAddress Request Middleware
app.use(requestIp.mw())
//Monitor
app.use(expressStatusMonitor())
//HTTP Logger
app.use(morgan('combined', { stream: accessLogStream }))
//Json parser
app.use(json({ limit: `${process.env.UPLOAD_LIMIT}`}))
//Compression GZIP
app.use(compression())
//Auth Routes
app.use('/api/auth', authRoutes)
//Timetable Routes
app.use('/api/timetable', timeTableRoutes)
//Course Routes
app.use('/api/course', courseRouter)
//Post Routes
app.use('/api/post', postRouter)
//Group Routes
app.use('/api/group', groupRouter)
//Push Routes
app.use('/api/push', pushRouter)
//Evaluate Routes
app.use('/api/evaluate', evaluateRouter)
//AdminJS Router
app.use(adminJs.options.rootPath, router)

//Redirect To React Only
app.use((req, res, next) => {
    showLog(`GET Resource URL: ${req.url}`)
    res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
    showLog(`Server Started Running At PORT: ${PORT}`)
})