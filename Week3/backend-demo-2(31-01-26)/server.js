import exp from 'express'   //create express server
import { userApp } from './APIs/UserAPI.js' //import user apis
import { productApp } from './APIs/ProductAPI.js' //import product apis
import { connect } from 'mongoose'  //import mongoose to connect to db
const app = exp()   //create express server app
const port = 4000   //Assigning port number

//connect to db server
async function connectDB() {
    try {
        await connect('mongodb://localhost:27017/anuragdb2')    //connect to mongodb server
        console.log("DB connected success") //print success message
        app.listen(port,()=>console.log("Server is listening on port 4000.."))  //start server
    } catch (error) {   //catch error if any
        console.log("Error while connecting to DB", error)
    }

}

//body parser middleware
app.use(exp.json())

//if path starts with /user, forward the request to userApp
app.use('/user-api', userApp)
//if path starts with /product, forward the request to productApp
app.use('/product-api', productApp)

//error handling middleware
function errorHandler(err, req, res, next) {
    //return error response with appropriate status code
    res.status(500).json({message:"error",reason:err.message})
}
app.use(errorHandler)

connectDB()