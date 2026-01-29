// validate task title by checking empty value and minimum length
function validateTitle(title) {
    if (title.length === 0) {
        return "Title is empty"; // return error if title is empty
    }
    if (title.length < 3) {
        return "Title must have min 3 characters"; // return error if title is too short
    }
    return true; // return true when title is valid
}

// validate priority to allow only low, medium, or high
function validatePriority(priority) {
    if (priority !== 'low' && priority !== 'medium' && priority !== 'high') {
        return 'Priority must be low, medium, or high'; // return error for invalid priority
    }
    return true; // return true when priority is valid
}

// validate due date to ensure it is a future date
function validateDueDate(date) {
    let dueDate = new Date(date); // convert input date to Date object
    let today = new Date(); // get today’s date
    if (dueDate <= today) {
        return 'Due date must be in future'; // return error if date is past or today
    }
    return true; // return true when due date is valid
}

export { validateTitle, validatePriority, validateDueDate } // export validation functions
