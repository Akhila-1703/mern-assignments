/*
Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
🧪 Given Data:
            const user = {
            id: 101,
            name: "Ravi",
            preferences: {
            theme: "dark",
            language: "en"
                }
            };

🎯 Task
    1. Create a shallow copy of user
    2. Change:
        i. name in the copied object
        ii. preferences.theme in the copied object
        iii .Log both original and copied objects
        iv. Observe what changes and what doesn’t
*/

const user = {
    id: 101,
    name: "Ravi",
    preferences: {
        theme: "dark",
        language: "en"
    }
};

// Shallow copy using spread operator
const userCopy = { ...user }

userCopy.name = 'arun'  //changing name in the copied object
userCopy.preferences.theme = 'white'    //changing theme in copied object

console.log('Original :', user)     //changes to nested objects affect BOTH original and copy (shared reference)
console.log('Copy :', userCopy)  