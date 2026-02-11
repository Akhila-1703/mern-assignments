import exp from 'express'
import { hash } from 'bcryptjs'
import { UserModel } from '../Models/UserModel.js'
import { ProductModel } from '../Models/ProductModel.js'

export const userRoute = exp.Router()

//read all users
userRoute.get("/users", async (req, res) => {
    // fetch all users from database
    let users = await UserModel.find().populate("cart.product","productName price");

    // send response
    res.status(200).json({ message: "All users", payload: users });
});


//create user
userRoute.post("/users", async (req, res) => {
    //get user obj from req body
    let newUser = req.body
    //avlidate new user
    await new UserModel(newUser).validate()
    //hash password
    let hashedPassword = await hash(newUser.password, 10)
    //replace plain password with hashed password
    newUser.password = hashedPassword
    //create new user document
    let newUserDoc = new UserModel(newUser)
    //save it to db
    await newUserDoc.save({validateBeforeSave: false}) //validations will be called here at the time of saving or inserting
    //send res with created user
    res.status(201).json({ message: "User created"})
})

// update user by id
userRoute.put("/users/:uid", async (req, res) => {
    let { uid } = req.params;   // get user id from url
    let updatedData = req.body; // get new data from request body

    // update user in database
    let updatedUser = await UserModel.findByIdAndUpdate(
        uid,
        updatedData,
        { new: true } // return updated document
    );

    // if user not found
    if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
    }

    // send response
    res.status(200).json({ message: "User updated", payload: updatedUser });
});



userRoute.put(  "/user-cart/user-id/:uid/product-id/:pid",  async (req, res) => {
    let { uid, pid } = req.params;
    // check user
    let user = await UserModel.findById(uid);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    // check product
    let product = await ProductModel.findById(pid);
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    // find product in cart
    let items = user.cart.findIndex(item => item.product == pid)   
    if (items > -1) {
        // product already in cart → increase quantity
        user.cart[items].quantity += 1;
    } else {
        // product not in cart → add new
        user.cart.push({
        product: pid,
        //quantity: 1
        });
    }
    let modifiedUser = await user.save();
    res.status(200).json({message: "Product added to cart",payload: modifiedUser});
});


//read user by id
userRoute.get('/users/:uid', async (req, res) => {
    let {uid} = req.params
    console.log(uid)
    //find user
    let userObj = await UserModel.findById(uid).populate("cart.product","productName price")    //populate method
    //send res
    return res.status(200).json({message:"user found",payload:userObj})
})

userRoute.get('/compare/:pid', async (req, res) => {
    let productId = req.params.pid;
    //get product
    let prod = await ProductModel.findById(productId)
    //compare ids
    if (productId == prod._id) {
        console.log("Equal")
    } else {
        console.log("Not equal")
    }
})

//delete user by id
userRoute.delete("/users/:uid", async (req, res) => {
    let { uid } = req.params;  // get user id from url

    // delete user from database
    let deletedUser = await UserModel.findByIdAndDelete(uid);

    // if user not found
    if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
    }

    // send response
    res.status(200).json({ message: "User deleted successfully" });
});
