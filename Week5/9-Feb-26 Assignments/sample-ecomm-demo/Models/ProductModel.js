import { Schema, model } from 'mongoose'

const ProductSchema = new Schema ({
    productName: {
        type: String,
        required:[true,"Product Name is required"]
    },
    price: {
        type: Number,
        required:[true,"Product price required"]
    },
    brand: {
        type: String,
        required:[true,"Product brand is required"]
    }

}, {
    strict:"throw",
    timestamps: true,
    versionKey:false
})

export const ProductModel=model("product",ProductSchema)