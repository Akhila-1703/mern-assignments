import { Schema, model } from "mongoose";

//schema for cart items
const cartSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: "product",   //connect with product model
        required: true
    },
    quantity: {
        type: Number,
        default: 1,      //initial quantity is 1
        min: 1
    }
});

//main user schema
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
    },
    age: {
        type: Number,
        required: [true, "Age is required"],
        min: [18, "Age should be above 18"],
        max: [25, "Age should be below 25"]
    },
    cart: {
        type: [cartSchema]   //user cart contains array of products
    }
}, {
    strict: "throw",
    timestamps: true
});

export const UserModel = model("user", userSchema);
