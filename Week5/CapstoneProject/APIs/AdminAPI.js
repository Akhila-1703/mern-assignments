import exp from 'express'
import { UserTypeModel } from '../models/UserModel.js'
export const adminRoute = exp.Router()


//read all articles
adminRoute.get('/articles', async (req, res) => {
    //get all articles from database
    let articles = await ArticleModel.find({ isArticleActive: true })
    //send articles in res
    res.json({ message: "all articles", payload: articles })
})


//block user by id
adminRoute.put('/block/:id', async (req, res) => {
    //read user id from url
    let uid = req.params.id
    //find user in database
    let user = await UserTypeModel.findById(uid)
    //if user not found, send response
    if (!user) {
        return res.json({message:"User not found"})
    }
    //check if user is already blocked
    if (user.isActive==false) {
        return res.json({message:"User already blocked previously"})
    }
    //update user status to blocked
    let blockUser = await UserTypeModel.findByIdAndUpdate(uid, { $set: { isActive: false } })
    //send confirmation res
    res.json({message:"User blocked"})
})


//unblock user by id
adminRoute.put('/unblock/:id', async (req, res) => {
    //read user id from url
    let uid = req.params.id
    //find user in database
    let user = await UserTypeModel.findById(uid)
    //if user not found, send response
    if (!user) {
        return res.json({message:"User not found"})
    }
    //check if user is already unblocked
    if (user.isActive==true) {
        return res.json({message:"User already unblocked previously"})
    }
    //update user status to active
    let blockUser = await UserTypeModel.findByIdAndUpdate(uid, { $set: { isActive: true } })
    //send confirmation res
    res.json({message:"User unblocked"})
})