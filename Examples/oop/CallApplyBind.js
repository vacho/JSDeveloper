/*function talk(){
    return `I am ${this.name}`;
}
const me = {
    name: 'Osvaldo',
}
// Without binding, 'this' is undefined in strict mode or the global object in non-strict mode.
console.log(talk()); // I am undefined
// Using bind to create a new function with 'this' permanently set to 'me'.
console.log(talk.bind(me)()); // I am Osvaldo
// Using call to invoke the function inmediatelly with 'this' set to 'me'.
console.log(talk.call(me)); // I am Osvaldo
// Using apply to invoke the function inmediatelly with 'this' set to 'me'.
console.log(talk.apply(me)); // I am Osvaldo
*/

/**
 * Demonstration of Function.prototype.call(), apply(), and bind().
 */

// The Base Object (Our desired 'this' context)
const employee = {
    name: 'Osvaldo',
    title: 'Lead Developer',
    salary: 75000
};

// This function calculates a bonus based on salary and a multiplier.
function calculateBonus(multiplier, reason) {
    const bonusAmount = this.salary * multiplier;
    
    console.log(`\n--- Execution Context: ${reason} ---`);
    console.log(`Employee: ${this.name} (${this.title})`);
    console.log(`Bonus calculated with multiplier ${multiplier}: $${bonusAmount.toFixed(2)}`);
    return bonusAmount;
}

// =================================================================
// SECTION 1: CALL() - Execute Now, Arguments Separately
// =================================================================
console.log('----------------------------------------------------');
console.log('1. CALL(): Execute Immediately, Arguments Listed Separately');
console.log('----------------------------------------------------');


// USE CASE: Immediate execution where you know the arguments individually.
// Syntax: function.call(thisArg, arg1, arg2, ...)
// Result: Executes immediately.

const monthlyBonus = calculateBonus.call(
    employee, // Sets 'this' to the employee object
    0.05,     // arg1 (multiplier)
    'Using call() for a quick one-off calculation' // arg2 (reason)
);

console.log(`Call returned: $${monthlyBonus.toFixed(2)}`); // Captures the return value

// =================================================================
// SECTION 2: APPLY() - Execute Now, Arguments in an Array
// =================================================================
console.log('----------------------------------------------------');
console.log('2. APPLY(): Execute Immediately, Arguments in an Array');
console.log('----------------------------------------------------');


// USE CASE: Immediate execution when arguments are stored or received as an array
//           (e.g., passing arguments from one function to another).
// Syntax: function.apply(thisArg, [arg1, arg2, ...])
// Result: Executes immediately.

const quarterlyReviewArgs = [
    0.15, // Multiplier
    'Using apply() with an array for quarterly review' // Reason
];

const quarterlyBonus = calculateBonus.apply(
    employee, // <-- Sets 'this' to the employee object
    quarterlyReviewArgs // <-- Array of arguments
);

console.log(`Apply returned: $${quarterlyBonus.toFixed(2)}`);


// =================================================================
// SECTION 3: BIND() - Do Not Execute Now, Fix Context for Later
// =================================================================
console.log('----------------------------------------------------');
console.log('3. BIND(): Create New Function, Fix Context, Execute Later');
console.log('----------------------------------------------------');


// USE CASE: Creating a new function with a permanently fixed 'this' context,
//           typically for callbacks, event handlers, or delayed execution.
// Syntax: function.bind(thisArg, ...optionalPredefinedArgs)
// Result: Returns a new function object (it is NOT executed).

// A. Create the bound function reference
const delayedRaiseNotification = calculateBonus.bind(
    employee, // Fixes 'this' permanently to the employee object
    0.10,     // Optional: Permanently pre-sets the 'multiplier' argument (Currying)
    'Using bind() for delayed execution (Timeout)' // Optional: Permanently pre-sets the 'reason' argument
);

console.log('Binding completed. The function has NOT executed yet.');

// B. Execute the bound function later (e.g., as a callback)
// When setTimeout calls 'delayedRaiseNotification', the 'this' context is preserved.
setTimeout(() => {
    console.log('--- Executing BIND result after 500ms ---');
    delayedRaiseNotification(); // No arguments needed here, they were pre-set by bind.
    
    // We do not capture the return value in a timeout example, as it's often ignored.
}, 500);

// =================================================================
// SUMMARY
// =================================================================
// call/apply: Execute the function NOW.
// bind: Create a new function reference for execution LATER.