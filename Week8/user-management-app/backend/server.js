import exp from 'express'
import { connect } from 'mongoose'
import { config } from 'dotenv'
import { UserApp } from './APIs/UserAPI.js'
import cors from 'cors'
//read environment varaibles
config()


//create HTTP server
const app = exp()

//add cors
app.use(cors({
    origin:['http://localhost:5173']
}))
//add body parser middleware
app.use(exp.json())
//forward req to UserAPI if path satrts with /user-api
app.use('/user-api',UserApp)
//connect to DB
const connectDB = async () => {
    try {
        await connect(process.env.DB_URL)
        console.log("DB connection succesfull")
        //assign port number
        const port = process.env.PORT
        // start http server
        app.listen(port,()=>console.log(`server started on port ${port}`))
    } catch (err) {
        console.log("Err in DB connection :",err)
    }
}

connectDB()
//add error handling middleware
/*app.use((err, req, res, next) => {
    console.log("err in middleware:",err)
    res.status(500).json({message:"error",description: err.message})
    //mongoose validation error
    if (err.name === "ValidationError") {
        return res.status(400).json({message:"Validation failed"})
    }
})*/
app.use((err, req, res, next) => {
    // Mongoose validation error
    if (err.name === "ValidationError") {
    return res.status(400).json({
    message: "Validation failed",
    errors: err.errors,
    });
}
    // Invalid ObjectId
    if (err.name === "CastError") {
    return res.status(400).json({
    message: "Invalid ID format",
    });
    }
    // Duplicate key
    if (err.code === 11000) {
    return res.status(409).json({
    message: "Duplicate field value",
    });
    }
    res.status(500).json({
    message: "Internal Server Error",
});
});