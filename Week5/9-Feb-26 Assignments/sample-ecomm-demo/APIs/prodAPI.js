import exp from 'express'
import { ProductModel } from '../Models/ProductModel.js'

export const prodRoute = exp.Router()

//
prodRoute.post("/products", async (req, res) => {
    //get product obj from req body
    let newProduct = req.body
    //create new product document
    let newProductDoc = new ProductModel(newProduct)
    //save it to db
    await newProductDoc.save()
    //send res with created product payload
    res.status(201).json({ message: "Product created"})
})
//