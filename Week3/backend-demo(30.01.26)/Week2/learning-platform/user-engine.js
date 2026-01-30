/*
MODULE-1 :USER PROCESSING ENGINE
  -> Get only active users
  -> Extract names of active users
  -> Check if any admin exists
  -> Find user by id
  -> Deactivate a user immutably
*/
import { users } from "./data.js"

// returns only active users by filtering where active property is true
function getActiveUser(users) {
    return users.filter(user => user.active) // filter array to keep only users where active is true
}
console.log("Active users are ", getActiveUser(users))

// filters active users and extracts their names using map
function getNames(users) {
    let activeUsers = users.filter(user => user.active) // filter to get only active users
    return activeUsers.map(user => user.name) // extract name from each active user
}
console.log("Active user names ", getNames(users))

// filters and returns only users with admin role
function getAdmin(users) {
    return users.filter((user)=>user.role=='admin') // filter array to keep only users where role is admin
}
console.log("Admin ", getAdmin(users))

// filters and returns user with specific id (id=2)
function getUser(users) {
    return users.filter((user)=>user.id==2) // filter array to keep only user where id equals 2
}
console.log("Id of 2 ", getUser(users))

// deactivates a single user immutably by creating a new object
function deactivateUser(user) {
    return { ...user, active: false } // using spread property and active is set to false, keeping original unchanged
}
console.log("Deactivated user ", deactivateUser(users[0]))
