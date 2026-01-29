/* Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
*/
const temperatures = [32, 35, 28, 40, 38, 30, 42]; // daily temperatures in Celsius

const above35 = temperatures.filter(temp => temp > 35); 
// filtering temperatures above 35

const inFahrenheit = temperatures.map(temp => (temp * 9 / 5) + 32); 
// converting Celsius to Fahrenheit

const averageTemp =
    temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length; 
// calculating average temperature

const firstAbove40 = temperatures.find(temp => temp > 40); 
// finding first temperature above 40

const indexOf28 = temperatures.findIndex(temp => temp === 28); 
// finding index of temperature 28

console.log('temperatures above 35 are ',above35);
console.log('Celsius → Fahrenheit temperatures are ',inFahrenheit);
console.log('average temperature is ',averageTemp);
console.log('first temperature above 40 is ',firstAbove40);
console.log('indexOf28 is ',indexOf28);


/*
Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"
*/
const courses = ["javascript", "react", "node", "mongodb", "express"]; 
// list of course names

const longCourses = courses.filter(course => course.length > 5); 
// filtering courses with name length greater than 5

const upperCaseCourses = courses.map(course => course.toUpperCase()); 
// converting all course names to uppercase

const courseString = upperCaseCourses.reduce(
    (result, course) => result + " | " + course
); 
// creating a single formatted string

const foundReact = courses.find(course => course === "react"); 
// finding the course named react

const indexOfNode = courses.findIndex(course => course === "node"); 
// finding index of node

console.log('courses with name length > 5 are ',longCourses);
console.log('course names to uppercase ',upperCaseCourses);
console.log('single string:',courseString);
console.log('react is ',foundReact);
console.log('node is at ',indexOfNode);


/*
Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92 */
const marks = [78, 92, 35, 88, 40, 67]; 
// marks obtained by students

const passMarks = marks.filter(mark => mark >= 40); 
// filtering marks that are pass marks

const graceMarks = marks.map(mark => mark + 5); 
// adding 5 grace marks to each student

const highestMark = marks.reduce(
    (max, mark) => mark > max ? mark : max
); 
// finding the highest mark

const firstFail = marks.find(mark => mark < 40); 
// finding first failing mark

const indexOf92 = marks.findIndex(mark => mark === 92); 
// finding index of mark 92

console.log('marks ≥ 40',passMarks);
console.log('add 5 grace marks to each student:',graceMarks);
console.log('highest mark ',highestMark);
console.log('first failing mark ',firstFail);
console.log('index of mark 92',indexOf92);
