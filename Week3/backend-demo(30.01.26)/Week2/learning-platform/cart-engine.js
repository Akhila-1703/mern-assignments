/*
MODULE 3: SHOPPING CART ENGINE
  -> Merge cart with courses to get full course info
  -> Calculate total cart amount
  -> Increase quantity of a course (immutably)
  -> Remove a course from cart
  -> Check if all cart items are paid courses
*/

import { courses, cart } from "./data.js"

// merges cart with courses using courseId
function mergeCart(cart, courses) {
    return cart.map(item => ({ ...courses.find(c => c.id === item.courseId), qty: item.qty })) // merge course data with quantity
}
console.log("Merged cart details", mergeCart(cart, courses))

// calculates total cart amount
function getTotalAmount(cartDetails) {
    return cartDetails.reduce((total, item) => total + item.price * item.qty, 0) // 0 is added so total is number not object
}
console.log("Total cart amount", getTotalAmount(mergeCart(cart, courses)))

// increases quantity of a course immutably
function increaseQty(cart, courseId) {
    return cart.map(item => item.courseId === courseId ? { ...item, qty: item.qty + 1 } : item) // increase qty only for matching course
}
console.log("After increasing quantity", increaseQty(cart, 101))

// removes a course from cart
function removeCourse(cart, courseId) {
    return cart.filter(item => item.courseId !== courseId) // remove matching course from cart
}
console.log("After removing course", removeCourse(cart, 103))

// checks if all cart items are paid courses
function checkPaidCourses(cartDetails) {
    return cartDetails.every(item => item.price > 0) // return true only if all items have price
}
console.log("All cart items are paid", checkPaidCourses(mergeCart(cart, courses)))
