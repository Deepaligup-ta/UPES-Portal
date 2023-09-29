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
        default: "yes"
    },
    encpy_password: {
        type: String
    },
    salt: String,
    course: {
        type: mongoose.ObjectId,
        ref: 'Course'
    },
    semester: {
        type: Number,
        default: 1
    },
    batch: {
        type: mongoose.ObjectId,
        ref: 'Batch'
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
export const Student = mongoose.model('Student', userSchema)

export const studentResource = {
    resource: Student,
    options:{
        properties: {
            password: {
                type: 'password',
                isVisible: {

                }
            },
            encpy_password: {
                isVisible: false
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