import exp from 'express'   //import express
import { ProductModel } from '../models/ProductModel.js'  //import product model

export const productApp = exp.Router() //mini router for product apis

//Product API routes

//Read Products
productApp.get('/products', async (req, res) => {
    //read products from db
    let productsList = await ProductModel.find()
    //send res
    res.status(200).json({message:"products",payload:productsList})

})

//read product by ObjectID
productApp.get('/products/:id', async (req, res) => {
    //get ObjectID from url params
    let objID = req.params.id
    //find product in DB
    let productObj = await ProductModel.findById(objID)
    //send res
    res.status(200).json({message:"product",payload:productObj})
})

//Create Product
productApp.post('/products', async (req, res) => {
    //get product obj from req body
    let newProduct = req.body
    //create new product document
    let newProductDoc = new ProductModel(newProduct)
    //save it to db
    await newProductDoc.save()
    //send res with created product payload
    res.status(201).json({ message: "Product created", payload: newProductDoc })
})

//Update Product
productApp.put('/products/:id', async (req, res) => {
    //get ObjectID from url params
    let objID = req.params.id
    //get modified product obj from req body
    let modifiedProduct = req.body
    //make update in db
    let latestProduct = await ProductModel.findByIdAndUpdate(objID,{$set:{...modifiedProduct}},{new:true,runValidators:true})
    //send res
    res.status(200).json({message:"product modified",payload:latestProduct})
})

//Delete Product
productApp.delete('/products/:id', async (req, res) => {
    //get ObjectID from url params
    let objID = req.params.id
    //delete product by id
    let deletedProduct = await ProductModel.findByIdAndDelete(objID)
    //send res with deleted product payload
    res.status(200).json({message:"product removed",payload:deletedProduct})
})
