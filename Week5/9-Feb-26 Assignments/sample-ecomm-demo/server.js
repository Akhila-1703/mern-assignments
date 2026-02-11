import exp from 'express'   
//import cookieParser from 'cookie-parser' 
import { connect } from 'mongoose'

import { userRoute } from './APIs/userAPI.js' 
import { prodRoute } from './APIs/prodAPI.js' 

const app = exp()   
const port = 4000   

//connect to db server
async function connectDB() {
    try {
        await connect('mongodb://localhost:27017/ecomm')    
        console.log("DB connected success") 
        app.listen(port,()=>console.log("Server is listening on port 4000.."))  
    } catch (error) {   
        console.log("Error while connecting to DB", error)
    }
}

connectDB()

//use body parser middleware
app.use(exp.json())

//add cookieParser middleware
//app.use(cookieParser())

//forward req to specific APIs
app.use('/user-api', userRoute)   // fixed name here

app.use('/product-api', prodRoute)

//error handling middleware
function errorHandler(err, req, res, next) {
    res.json({message:"error",reason:err.message})
}
app.use(errorHandler)

/*
Embedded document vs refernce document

git add .
git commit -m'simple e-com app with refs'
git push -u origin master

*/