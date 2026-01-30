/*
Assignment 1: User Profile Manager
----------------------------------
Scenario : You are managing a logged-in user’s profile in a web application.

Test data:
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

Tasks:
    1. Read and print the user’s name and email
    2. Add a new property lastLogin: "2026-01-01"
    3. Update role from "student" to "admin"
    4. Delete the isActive property
    5. Use Object.keys() to list all remaining fields
*/
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
}; // user profile data

console.log("User name and email:", user.name, user.email);
// reading and printing name and email

user.lastLogin = "2026-01-01"; 
// adding last login date

user.role = "admin"; 
// updating role

delete user.isActive; 
// removing isActive property

const userFields = Object.keys(user); 
// listing remaining fields

console.log("User profile fields after updates:", userFields);


/*
Assignment 2: Exam Result Summary
---------------------------------
Scenario : Marks are stored subject-wise for a student.

Test data:
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

Tasks:
    1. Calculate total marks
    2. Calculate average marks
    3. Find the highest scoring subject
    4. Add a new subject computer: 90
*/
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
}; // subject-wise marks

const totalMarks = Object.values(marks)
  .reduce((sum, mark) => sum + mark, 0); 
// calculating total marks

const averageMarks = totalMarks / Object.keys(marks).length; 
// calculating average marks

let highestSubject = "";
let highestScore = 0;

for (let subject in marks) {
  if (marks[subject] > highestScore) {
    highestScore = marks[subject];
    highestSubject = subject;
  }
} 
// finding highest scoring subject

marks.computer = 90; 
// adding computer subject

console.log("Total marks obtained:", totalMarks);
// printing total marks

console.log("Average marks:", averageMarks);
// printing average marks

console.log("Highest scoring subject and marks:", highestSubject, highestScore);
// printing highest subject and its score

console.log("Marks after adding computer subject:", marks);
// printing updated marks object


/*
Assignment 3: Application Settings Controller
---------------------------------------------
Scenario : A web app stores user preferences as settings.

Test data:
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};


Tasks :
    1.Toggle theme between "light" and "dark"
    2. Turn autoSave to true
    3. Remove the notifications setting
    4. Freeze the settings object so it cannot be modified
*/
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
}; // application settings

settings.theme = settings.theme === "light" ? "dark" : "light"; 
// toggling theme

settings.autoSave = true; 
// enabling auto save

delete settings.notifications; 
// removing notifications setting

Object.freeze(settings); 
// freezing the object to prevent changes

console.log("Final application settings:", settings);
// printing final settings after all changes

