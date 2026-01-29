/*
MODULE 4: ROLE & PERMISSION ENGINE
  -> Get all role names
  -> Check if student can delete
  -> Create a flat list of all unique permissions
  -> Add new role moderator immutably
*/

import { roles } from "./data.js"

// returns all role names
function getRoleNames(roles) {
    return Object.keys(roles) // extract role names from roles object
}
console.log("Role names", getRoleNames(roles))

// checks whether student can delete
function canStudentDelete(roles) {
    return roles.student.filter(p => p === "delete").length > 0 //check whether delete is present or not
}
console.log("Can student delete", canStudentDelete(roles))

// returns a flat list of all unique permissions
function getAllPermissions(roles) {
    return [...new Set(Object.values(roles).flat())] // flatten permissions and remove duplicates
}
console.log("All unique permissions", getAllPermissions(roles))

// adds moderator role immutably
function addModerator(roles) {
    return { ...roles, moderator: ["view", "update"] } // add moderator without changing original roles
}
console.log("Roles after adding moderator", addModerator(roles))
