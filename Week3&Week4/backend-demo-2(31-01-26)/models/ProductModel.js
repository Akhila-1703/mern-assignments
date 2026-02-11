import { Schema, model } from 'mongoose';  //import mongoose Schema and model

//Create product schema
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
    },

    brand: {                       // ← NEW FIELD YOU WERE MISSING
        type: String,
        required: [true, "Brand is required"]
    }

}, {
    strict: "throw",
    timestamps: true
})

//create and export model
export const ProductModel = model("product", productSchema);
