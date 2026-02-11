import exp from 'express' // import express framework
import { productApp } from './APIs/ProductAPI.js' // import product routes
import { userApp } from './APIs/UserAPI.js' // import user routes
// create http server (express app instance)
const app = exp() // initialize express application
// start listening on port 3000
app.listen(3000, () => console.log('HTTP server listening on port 3000..')) // server starts accepting connections

// middleware to parse incoming json request bodies
app.use(exp.json())  // built-in middleware to parse json in request body

// mount routers for different API groups
app.use('/product-api',productApp) // mount productApp on /product-api path
app.use('/user-api',userApp) // mount userApp on /user-api path

