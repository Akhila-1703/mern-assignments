import { Schema, model } from 'mongoose';  //import mongoose Schema and model

//Create product obj schema with pid, productName, price
const productSchema = new Schema({
    pid: {
        type: Number,
        required: [true, "ProductID is required"],
    },
    productName: {
        type: String,
        required: [true, "Product Name is required"],
        minLength:[5,"Minimum length should be 5"],
        maxLength:[15,"Maximum length exceeded"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min:[100,"Price should be minimum 100"]
    }
}, {
    strict: "throw",
    timestamps: true
})

export const ProductModel=model("product",productSchema);