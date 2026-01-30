/*  HANDS-ON 1: Smart Login Status Engine
----------------------------------------

Initial data:
    let isLoggedIn = true;
    let isProfileComplete = false;

Tasks:
   1. If user is not logged in → show "Please login"
   2. If logged in but profile incomplete → show "Complete your profile"
   3. If logged in and profile complete → show "Welcome back!"
   4. Store the result in message
   5. Print the message
*/
let isLoggedIn = true;           // tells whether user is logged in
let isProfileComplete = false;  // tells whether profile is completed

let message;                   // variable to store final message

if (!isLoggedIn) {
    message = "Please login";   // user is not logged in
} else if (!isProfileComplete) {
    message = "Complete your profile"; // logged in but profile incomplete
} else {
    message = "Welcome back!";  // logged in and profile completed
}

console.log(message);           // printing the message

/* HANDS-ON 2: Course Price Tag Labeler
------------------------------------
Initial data:
     let price = 1299;

Tasks:
   1. If price < 500 → "Budget Course"
   2. If price between 500–1000 → "Standard Course"
   3. If price > 1000 → "Premium Course"
   4. Store label in courseTag
   5. Print the label
*/
let price = 1299;        // course price
let courseTag;          // variable to store course label

if (price < 500) {
    courseTag = "Budget Course";     // low-priced course
} else if (price <= 1000) {
    courseTag = "Standard Course";   // mid-range course
} else {
    courseTag = "Premium Course";    // high-priced course
}

console.log(courseTag); // printing the course label


/* HANDS-ON 3: Enrollment Eligibility Checker
------------------------------------------
Initial data:
    let hasPaid = true;
    let hasCompletedBasics = false;

Tasks:
   1. If both conditions are true → "Enroll Now"
   2. Otherwise → "Complete Requirements"
   3. Use ternary operator
   4. Store result in enrollMessage
   5. Print message */
let hasPaid = true;                // payment status
let hasCompletedBasics = false;   // basics completion status

let enrollMessage = 
    (hasPaid && hasCompletedBasics)
        ? "Enroll Now"             // both conditions satisfied
        : "Complete Requirements"; // one or both conditions not met

console.log(enrollMessage);        // printing the result
