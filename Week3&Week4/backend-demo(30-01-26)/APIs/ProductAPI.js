import exp from "express" // import express module to create router and app
// create a separate router for product-related routes
export const productApp=exp.Router() // router instance to mount product endpoints
// temporary in-memory storage for products (resets when server restarts)
let products = []  // store product objects here in memory

//get req handling route(read products)
//handling request from frontend or client
productApp.get("/products", (req, res) => { // handle GET request to list all products
    // send all products in the response with status 200
    res.status(200).json({ message: "all products", payload: products })   // 200: successful operation
})

//post req handling route(create product)
productApp.post("/products", (req, res) => { // handle POST request to create a new product
    // read new product data from request body
    let newProduct = req.body
    // add the new product to the in-memory products array
    products.push(newProduct)
    // respond with 201 status to indicate resource creation
    res.status(201).json({ message: "product created" }) // 201: created
})
//put req handling route(update product)
productApp.put("/products", (req, res) => { // handle PUT request to update an existing product
    // read updated product data from request body
    let modifiedProduct = req.body
    // find index of the product matching the provided productId
    let productIndex = products.findIndex(productObj => productObj.productId === modifiedProduct.productId)
    // if product is not found, return 404
    if (productIndex === -1) {
        res.status(404).json({ message: "product not found" })
    } else {
        // replace the existing product at the found index with modifiedProduct
        let deletedProduct = products.splice(productIndex, 1, modifiedProduct) // splice returns the removed item
        // respond with 200 and include the removed item as payload
        res.status(200).json({ message: "product modified", payload: deletedProduct })
    }
})

productApp.get("/products-id/:id", (req, res) => {    // handle GET request to fetch product by id
    // log url parameters for debugging
    console.log("req.params", req.params)  // example: {id:100}
    // convert id param to number
    let productid = Number(req.params.id)
    // find product by productId
    let product = products.find(productObj => productObj.productId === productid)
    // if not found, return 404
    if(!product){
        return res.status(404).json({ message: "product not found" })
    }
    // return the found product
    res.status(200).json({ message: "product found", payload: product })
})
productApp.get("/products-brand/:brand", (req, res) => {    // handle GET request to fetch products by brand name
    // log url params for debugging
    console.log("req.params", req.params)  // example: {name:tab}
    // read brand name from url parameter
    let productbrand = req.params.brand
    // filter products matching the given brand name
    let product = products.filter(productObj => productObj.brand === productbrand)
    console.log(product) // log filtered results
    // if no matches, return 404
    if (product.length === 0) {
        return res.status(404).json({ message: "products not found of this brand" })
    }
    // return matching products
    res.status(200).json({ message: "products found", payload: product })
})

//delete req handling route(delete user)
productApp.delete("/products/:id", (req, res) => {
    console.log("req.params", req.params)
    //read id from url parameter
    let productid = Number(req.params.id)  //{id:100} 
    //find index of product with this id
    let productIndex = products.findIndex(productObj => productObj.productId === productid)
    if(productIndex === -1){
        return res.status(404).json({ message: "product not found" })
    }
    //delete product from array
    let deletedProduct = products.splice(productIndex, 1)
    //send response
    res.status(200).json({ message: "product deleted",payload: deletedProduct })
    
})