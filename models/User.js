import mongoose from "mongoose"
import mongoosePaginate from 'mongoose-paginate-v2'
import crypto, { randomUUID } from 'crypto'

const sessionSchema = new mongoose.Schema({
    lastLogin: {
        type: Number
    },
    ipAddress: {
        type: Number,
        required: true
    }
}, { timestamps: true })

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    sapId: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    reportingManager: {
        type: mongoose.ObjectId,
        ref: 'User',
        required: false
    },
    gender: {
        type: String,
        enum: ['female', 'male', 'n/a'],
        default: 'n/a'
    },
    activeAccount: {
        type: String,
        enum: ["disabled", "suspened", "active"],
        default: 'disabled'
    },
    outlookToken: {
        type: String,
        default: ""
    },
    profilePic: {
        type: String
    },
    changePassword: {
        type: String,
        enum: ["yes", "no"],
        default: "yes" // 1 For Change, 0 For No
    },
    designations: {
        type: String,
        enum: ["Assistant Manager","Assistant Professor - Selection Grade","Assistant Professor - Senior Scale","Assistant Professor -Selection Grade","Assistant Professor- Selection Grade","Associate Professor","Deputy Director","Director","Distinguished Professor cum Director", "Lab Assistant", "Professor", "Professor and Dean","Sr. Associate Professor","Sr. Lab Assistant"],
        default: 'none'
    },
    role: {
        type: String,
        enum: ["admin", "management", "faculty"],
        default: 'faculty',
        required: true
    },
    encpy_password: {
        type: String
    },
    salt: String,
    school: {
        type: mongoose.ObjectId,
        ref:'School'
    },
    sessions: [sessionSchema]
    }, 
    { 
        timestamps:true 
    }
)
userSchema.plugin(mongoosePaginate)

userSchema.virtual("password")
    .set(function(password){
        this._password = password;
        this.salt = randomUUID()
        this.encpy_password = this.securePassword(password)
    })
    .get(function(){
        return this._password;
    });

userSchema.methods = {

    authenticate: function(plainPassword){
        return this.securePassword(plainPassword) === this.encpy_password
    },
    securePassword: function(plainPassword) {
        if(!plainPassword) return ""

        try {
            return crypto
                    .createHmac('sha256', this.salt)
                    .update(plainPassword)
                    .digest('hex')
        }catch(err) {

            return ""

        }

    }
}
export const User = mongoose.model('User', userSchema)

export const usersResource = {
    resource: User,
    options:{
        
        properties: {
            password: {
                type: 'password'
            },
            // encpy_password: {
            //     type: 'password',
            // },
            salt: {
                isVisible: false
            },
            createdAt: {
                isVisible: false
            },
            updatedAt: {
                isVisible: false
            }
        },
    },
   
}