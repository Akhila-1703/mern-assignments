import exp from 'express'   //import express
import { UserModel } from '../models/UserModel.js'  //import user model

export const userApp = exp.Router() //mini router for user apis

//User API routes

//Read User
userApp.get('/users', async (req, res) => {
    //read users from db
    let usersList = await UserModel.find()
    //send res
    res.status(200).json({message:"users",payload:usersList})

})

//read user by ObjectID
userApp.get('/users/:id', async (req, res) => {
    //get ObjectID from url params
    let objID = req.params.id
    //find user in DB
    let userObj = await UserModel.findById(objID)
    //send res
    res.status(200).json({message:"user",payload:userObj})
})

//Create User
userApp.post('/users', async (req, res) => {
    //get user obj from req body
    let newUser = req.body
    //create new user document
    let newUserDoc = new UserModel(newUser)
    //save it to db
    await newUserDoc.save()
    //send res with created user payload
    res.status(201).json({ message: "User created", payload: newUserDoc })
})

//Update User
userApp.put('/users/:id', async (req, res) => {
    //get ObjectID from url params
    let objID = req.params.id
    //get modified user obj from req body
    let modifiedUser = req.body
    //make update in db
    let latestUser = await UserModel.findByIdAndUpdate(objID,{$set:{...modifiedUser}},{new:true,runValidators:true})
    //send res
    res.status(200).json({message:"user modified",payload:latestUser})
})

//Delete User
userApp.delete('/users/:id', async (req, res) => {
    //get ObjectID from url params
    let objID = req.params.id
    //delete user by id
    let deletedUser = await UserModel.findByIdAndDelete(objID)
    //send res
    res.status(200).json({message:"user removed",payload:deletedUser})
})