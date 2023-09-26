import mongoose from "mongoose"
import mongoosePaginate from 'mongoose-paginate-v2'
import crypto, { randomUUID } from 'crypto'

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
    changePassword: {
        type: String,
        enum: ["yes", "no"],
        default: "yes" // 1 For Change, 0 For No
    },
    designations: {
        type: String,
        enum: ['dean', 'assistant professor', 'none'],
        default: 'none'
    },
    // designations: [
    //     {
    //         type: mongoose.ObjectId,
    //         ref: 'Designation'
    //     }
    // ],
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
    }
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
            encpy_password: {
                type: 'password',
            },
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