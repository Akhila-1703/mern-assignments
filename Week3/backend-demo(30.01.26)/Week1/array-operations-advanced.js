/*ASSIGNMENT 1:
--------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"
*/
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
]; // shopping cart data

const inStockItems = cart.filter(item => item.inStock); 
// getting only products that are in stock

const productTotals = cart.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
})); 
// creating a new list with product name and total price

const cartTotal = cart.reduce(
  (sum, item) => sum + (item.price * item.quantity),
  0
); 
// calculating grand total cart value

const mouseDetails = cart.find(item => item.name === "Mouse"); 
// finding details of Mouse

const keyboardIndex = cart.findIndex(item => item.name === "Keyboard"); 
// finding position of Keyboard

console.log("In-stock products:", inStockItems);
console.log("Product-wise total prices:", productTotals);
console.log("Grand total cart value:", cartTotal);
console.log("Details of Mouse product:", mouseDetails);
console.log("Position of Keyboard in cart:", keyboardIndex);


/*
ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"
*/
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
]; // student marks data

const passedStudents = students.filter(student => student.marks >= 40); 
// filtering students who passed

const studentsWithGrades = students.map(student => ({
  ...student,
  grade:
    student.marks >= 90 ? "A" :
    student.marks >= 75 ? "B" :
    student.marks >= 60 ? "C" : "D"
})); 
// adding grade based on marks

const averageMarks =
  students.reduce((sum, student) => sum + student.marks, 0) / students.length; 
// calculating average marks

const student92 = students.find(student => student.marks === 92); 
// finding student who scored 92

const kiranIndex = students.findIndex(student => student.name === "Kiran"); 
// finding index of Kiran

console.log("Students who passed:", passedStudents);
console.log("Students with grades added:", studentsWithGrades);
console.log("Average marks of all students:", averageMarks);
console.log("Student who scored 92 marks:", student92);
console.log("Index position of Kiran:", kiranIndex);



/*
ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"
*/
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
]; // employee salary data

const itEmployees = employees.filter(emp => emp.department === "IT"); 
// filtering IT department employees

const employeesWithNetSalary = employees.map(emp => ({
  ...emp,
  netSalary: emp.salary + (emp.salary * 0.10)
})); 
// adding 10% bonus to calculate net salary

const totalPayout = employees.reduce(
  (sum, emp) => sum + emp.salary,
  0
); 
// calculating total salary payout

const salary30000 = employees.find(emp => emp.salary === 30000); 
// finding employee with salary 30000

const nehaIndex = employees.findIndex(emp => emp.name === "Neha"); 
// finding index of Neha

console.log("Employees from IT department:", itEmployees);
console.log("Employees with net salary (including bonus):", employeesWithNetSalary);
console.log("Total salary payout:", totalPayout);
console.log("Employee with salary 30000:", salary30000);
console.log("Index position of Neha:", nehaIndex);


/*
ASSIGNMENT 4: 
------------
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"
*/
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
]; // movie data

const sciFiMovies = movies.filter(movie => movie.genre === "Sci-Fi"); 
// filtering only Sci-Fi movies

const movieLabels = movies.map(movie => movie.title + " (" + movie.rating + ")"); 
// formatting movie title with rating

const averageRating =
  movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length; 
// calculating average movie rating

const jokerMovie = movies.find(movie => movie.title === "Joker"); 
// finding Joker movie

const avengersIndex = movies.findIndex(movie => movie.title === "Avengers"); 
// finding index of Avengers

console.log("Sci-Fi movies list:", sciFiMovies);
console.log("Movie titles with ratings:", movieLabels);
console.log("Average movie rating:", averageRating);
console.log("Details of Joker movie:", jokerMovie);
console.log("Index position of Avengers movie:", avengersIndex);



/*
ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000 
*/
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
]; // bank transactions

const creditTransactions = transactions.filter(txn => txn.type === "credit"); 
// filtering credit transactions

const amounts = transactions.map(txn => txn.amount); 
// extracting transaction amounts

const finalBalance = transactions.reduce(
  (balance, txn) =>
    txn.type === "credit" ? balance + txn.amount : balance - txn.amount,
  0
); 
// calculating final account balance

const firstDebit = transactions.find(txn => txn.type === "debit"); 
// finding first debit transaction

const index10000 = transactions.findIndex(txn => txn.amount === 10000); 
// finding index of transaction with amount 10000

console.log("All credit transactions:", creditTransactions);
console.log("Transaction amounts only:", amounts);
console.log("Final account balance:", finalBalance);
console.log("First debit transaction:", firstDebit);
console.log("Index of transaction with amount 10000:", index10000);

if (!validPriorities.includes(priority)) {
        return 'Priority must be low, medium, or high';
    }
  return true;
  


  function isValidDate(dateString) {
    let inputDate = new Date(dateString);
    let dateStr = inputDate.toISOString().split('T')[0];
    return dateStr === dateString;
}
