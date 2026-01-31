import { Schema, model } from "mongoose";   //import mongoose

//Create User schema(username,password,age) with validations
const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        minLength: [4, "Minimum length should be 4"],
        maxLength: [6, "Maximum length exceeded"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [6, "Minimum length should be 6"],
        maxLength: [8, "Maximum length exceeded"]
    },
    age: {
        type: Number,
        required: [true, "Age is required"],
        min: [18, "Age should be above 18"],
        max: [25, "Age should be below 25"]
    }
    
}, {
    strict: "throw",  //to avoid extra fields
    timestamps: true  //to add createdAt and updatedAt fields
})

//Create User model with that schema
export const UserModel = model("user", userSchema)