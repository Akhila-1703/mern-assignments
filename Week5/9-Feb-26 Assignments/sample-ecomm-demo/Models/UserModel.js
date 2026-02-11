import { Schema, model } from 'mongoose'

//create cart schema
/*
const cartSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref:'product' //name of product model
    }
})
*/


const cartSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: "product",   // Product model name
        required: true
    },
    quantity: {
    type: Number,
    default: 1,
    min: 1
    }
});

const UserSchema = new Schema({
    name: {
        type: String,
        required:[true,"Name is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique:[true,"email already exists"] //add to index
    },
    password: {
        type: String,
        required:[true,"Password is required"]
    },
    cart: {
        type:[cartSchema]
    }
})

export const UserModel=model("user",UserSchema)