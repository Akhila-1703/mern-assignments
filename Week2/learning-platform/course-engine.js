/*
MODULE 2: COURSE CATALOG ENGINE
  -> Get published courses
  -> Sort courses by price (high → low)
  -> Extract { title, price } only
  -> Calculate total value of published courses
  -> Add a new course immutably
*/

import { courses } from "./data.js"

// returns only courses that are published
function publishedCourses(courses) {
    return courses.filter(course => course.published === true) // keep only published courses
}
console.log("Published courses are", publishedCourses(courses))

// sorts courses by price from high to low without changing original array
function sortByPrice(courses) {
    return [...courses].sort((a, b) => b.price - a.price) // sorting prices in descending order
}
console.log("Sorted courses by price", sortByPrice(courses))

// extracts only title and price from courses
function extractTitleAndPrice(courses) {
    return courses.map(course => ({ title: course.title, price: course.price })) // return only title and price
}
console.log("Extracted title and price", extractTitleAndPrice(courses))

// calculates total price of published courses
function totalPublishedValue(courses) {
    return publishedCourses(courses).reduce((total, course) => total + course.price,0) // adding 0 makes total starts as number

}
console.log("Total value of published courses", totalPublishedValue(courses))

// adds a new course without changing original array
function addCourse(courses, newCourse) {
    return [...courses, newCourse] // return new array with added course
}

const newCourse = {
    title: "Advanced JavaScript",
    price: 4999,
    published: true
}

console.log("After adding new course", addCourse(courses, newCourse))
