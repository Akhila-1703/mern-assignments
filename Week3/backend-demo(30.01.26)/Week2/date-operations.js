/*
Assignment 1: Date Creation & Extraction (Beginner)
---------------------------------------------------
Tasks:
       1. Create a Date object for current date & time.
       2. Extract and display:* Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. Display the date in this format:
                    DD-MM-YYYY HH:mm:ss
*/

let date1 = new Date();
let year = date1.getFullYear();
let month = date1.getMonth();
let date = date1.getDate();
let day = date1.getDay();
let hours = date1.getHours();
let minutes = date1.getMinutes();
let seconds = date1.getSeconds();

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log('Year:', year);
console.log('Month:', monthNames[month]);
console.log('Date:', date);
console.log('Day of Week:', dayNames[day]);
console.log('Hours:', hours);
console.log('Minutes:', minutes);
console.log('Seconds:', seconds);

// Format: DD-MM-YYYY HH:mm:ss
console.log(date,'-',monthNames[month],'-',year,hours,':',minutes,':',seconds)

/*
Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
--------------------------------------------------------------------

 Given:
      let enrollmentDeadline = new Date("2026-01-20");

Tasks:
  1.Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed"

  2. Validate user input date:
      * Input: "2026-02-30"
      * Detect whether the date is valid or invalid
*/

let enrollmentDeadline = new Date("2026-01-20");
let today = new Date();

// Check if today is before or after the deadline
if (today <= enrollmentDeadline) {
    console.log('Enrollment Open');
} else {
    console.log('Enrollment Closed');
}

// Validate user input date
// Validate user input date
function isValidDate(userInput) {
    let date = new Date(userInput); // js automatically fixes wrong dates if present
    
    let dateString = date.toISOString().split('T')[0];  // Convert to standard format and extract just the date part
    
    return dateString === userInput; //comparing both dates
}

let userInput = "2026-02-30";
if (isValidDate(userInput)) {
    console.log(userInput," is a valid date");
} else {
    console.log(userInput," is an invalid date");
}

/*
Assignment 3: Age Calculator (Intermediate)
-------------------------------------------
Input:
    let dob = "2000-05-15";


Tasks:
        1. Calculate exact age in years
*/

let dob = "2000-05-15";

function calculateAge(dob) {
    let birthDate = new Date(dob);
    let today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    
    // If birthday hasn't occurred this year then subtract 1 from age
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

let age = calculateAge(dob);
console.log('Age:', age, 'years');
