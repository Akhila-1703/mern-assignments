// Read environment variables
import { config } from 'dotenv'
config()

// Imports
import exp from 'express'
import { connect } from 'mongoose'

import { UserApp } from './APIs/UserAPI.js'

import cors from 'cors'

// Create express server
const app = exp()

// Add CORS middleware
// FRONTEND_URLS example:
// FRONTEND_URLS=https://user-management-app-black-iota.vercel.app,http://localhost:5173
const allowedOrigins = (process.env.FRONTEND_URLS || 'http://localhost:5173')
  .split(',')
  .map(origin => origin.trim())
  .filter(Boolean)

console.log("Allowed CORS origins:", allowedOrigins)

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests without browser origin
      if (!origin) return callback(null, true)

      if (allowedOrigins.includes(origin)) {
        return callback(null, true)
      }

      return callback(
        new Error(`Origin ${origin} not allowed by CORS`)
      )
    },
    optionsSuccessStatus: 200,
  })
)

// Add body parser middleware
app.use(exp.json())

// Forward requests to UserAPI
app.use('/user-api', UserApp)

// Connect to MongoDB and start server
const connectDB = async () => {
  try {
    await connect(process.env.DB_URL)

    console.log("DB connection successful")

    const port = process.env.PORT

    app.listen(port, () =>
      console.log(`server started on port ${port}`)
    )
  } catch (err) {
    console.log("Err in DB connection:", err)
  }
}

// Start server
connectDB()

// Invalid route handler
app.use((req, res) => {
  res.status(404).json({
    message: "Invalid path",
  })
})

// Global error handler
app.use((err, req, res, next) => {

  // Validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    })
  }

  // Invalid ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    })
  }

  // Duplicate key
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
    })
  }

  // Generic error
  res.status(500).json({
    message: "Internal Server Error",
  })
})