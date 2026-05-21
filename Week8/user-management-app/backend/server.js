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
// Configure CORS to allow the frontend origin(s).
// Set FRONTEND_URLS in your deployment to a comma-separated list of allowed frontend origins.
// Example: FRONTEND_URLS=https://user-management-app-black-iota.vercel.app,http://localhost:5173
const allowedOrigins = (process.env.FRONTEND_URLS || 'http://localhost:5173')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

console.log('Allowed CORS origins:', allowedOrigins);
app.use(cors({
    origin: (origin, callback) => {
        // allow requests with no origin (e.g. curl or mobile apps)
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        return callback(new Error(`Origin ${origin} not allowed by CORS`));
    },
    optionsSuccessStatus: 200,
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