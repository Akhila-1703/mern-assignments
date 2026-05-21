import exp from 'express'
import { authenticate } from '../services/authService.js'
import { UserTypeModel } from '../models/UserModel.js'
import bcrypt from "bcryptjs"
import {verifyToken} from '../middlewares/verifyToken.js'
export const commonRouter = exp.Router()

//login
commonRouter.post('/login', async (req, res) => {
    //get user cred object
    let userCred = req.body
    //call authenticate service
    let { token, user } = await authenticate(userCred)
    //save token as httpOnly cookie
    res.cookie("token", token, {
        httpOnly: true,
        sameSite: 'lax',
        secure:false,
    })
    //send res
    res.status(200).json({message:"login success",payload:user})
})


//logout
commonRouter.get('/logout', async (req, res) => {
    //clear the cookie named 'token'
    res.clearCookie('token', {
        httpOnly: true,  //must match original settings
        secure: false,      //must match original settings
        sameSite:'lax'      //must match original settings
    })
    res.status(200).json({message:"Logged out sucessfully"})
})


//change password
commonRouter.put('/change-password', verifyToken, async (req, res) => {
    const { email, currentPassword, newPassword } = req.body

    if (!email || !currentPassword || !newPassword) {
        return res.status(400).json({ message: "email, currentPassword and newPassword are required" })
    }

    const user = await UserTypeModel.findOne({ email })
    if (!user) {
        return res.status(404).json({ message: "User not found" })
    }

    const matchPassword = await bcrypt.compare(currentPassword, user.password)
    if (!matchPassword) {
        return res.status(401).json({ message: "Invalid password" })
    }

    user.password = await bcrypt.hash(newPassword, 10)
    await user.save()

    return res.json({ message: "Password is updated" })
})

