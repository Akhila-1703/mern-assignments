import exp from "express" // import express to create router and handle requests
// create a separate router for user-related routes
export const userApp=exp.Router() // router instance for user endpoints
// temporary in-memory user storage (resets on server restart)
let users = []  // store user objects in this array

//get req handling route(read users)
//handling request from frontend or client
userApp.get("/users", (req, res) => { // handle GET request to list all users
    // send all users in response with HTTP 200
    res.status(200).json({ message: "all users", payload: users })
})

//post req handling route(create user)
userApp.post("/users", (req, res) => { // handle POST request to create a new user
    // read new user data from request body
    let newUser = req.body
    // add the new user to in-memory users array
    users.push(newUser)
    // respond with 201 to indicate successful creation
    res.status(201).json({ message: "user created" }) // 201: created
})
//put req handling route(update user)
userApp.put("/users", (req, res) => { // handle PUT request to update a user
    // read modified user data from request body
    let modifiedUser = req.body
    // find the index of user with matching id
    let userIndex = users.findIndex(userObj => userObj.id === modifiedUser.id)
    // if user not found, return 404
    if (userIndex === -1) {
        res.status(404).json({ message: "user not found" })
    } else {
        // replace the existing user at that index with modifiedUser
        let deletedUser = users.splice(userIndex, 1, modifiedUser) // splice returns removed user
        // respond with success status 200
        res.status(200).json({ message: "user modified" })
    }
})

userApp.get("/users/:id", (req, res) => {    // handle GET request to fetch user by id
    // log request params for debugging
    console.log("req.params", req.params)  // example: {id:100}
    // parse id param as number
    let userid = Number(req.params.id)
    // find user by id
    let user = users.find(userObj => userObj.id === userid)
    // if not found, return 404
    if(!user){
        return res.status(404).json({ message: "user not found" })
    }
    // return found user with 200 status
    res.status(200).json({ message: "user", payload: user })
})
//delete req handling route(delete user)
userApp.delete("/users/:id", (req, res) => { // handle DELETE request to remove a user
    // log params for debugging
    console.log("req.params", req.params)
    // convert id param to number
    let userid = Number(req.params.id)
    // find index of the user to delete
    let userIndex = users.findIndex(userObj => userObj.id === userid)
    // if not found, return 404
    if(userIndex === -1){
        return res.status(404).json({ message: "user not found" })
    }
    // remove the user from array and capture deleted item
    let deletedUser = users.splice(userIndex, 1)
    // respond with deleted user info
    res.status(200).json({ message: "user deleted",payload: deletedUser })
})

