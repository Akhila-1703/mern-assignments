//create user schema with validations
import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    name: {
        type: String,
        required:[true,"name is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique:[true,"Email already existed"]
    },
    dateOfBirth: {
        type: Date,
        required:[true,"date of birth is required"]
    },
    mobileNumber: {
        type: Number,
    },
    status: {
        type: Boolean,
        default:true
    }
}, {
    timestamps: true,
    strict: "throw",
    versionKey:false
})

//create user model for user schema
export const UserModel=model("user",userSchema)