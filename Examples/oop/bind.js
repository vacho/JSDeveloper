// Define a class to represent an object with state and a method.
class TaskTracker {
    constructor(taskId) {
        this.taskId = taskId;
        this.status = 'Pending';
        
        // Use bind(this) to create a new and permanently bound version of the 'updateStatus' method.
        this.updateStatusBound = this.updateStatus.bind(this);
        //this.updateStatusBound = this.updateStatus.call(this);
    }
    
    updateStatus(newStatus = 'Completed') {
        this.status = newStatus;
        //console.log(this); // When called directly, 'this' refers to the TaskTracker instance (Timeout in this example).
        console.log(`[Task ID: ${this.taskId}] Status changed to: ${this.status}`);
    }
    
    report() {
        console.log(`Current state: Task ${this.taskId} is ${this.status}`);
    }
}

// --- Setup ---
const myTask = new TaskTracker(701);
myTask.report(); // Initial state: Task 701 is Pending

// A) THE PROBLEM: Losing Context
console.log('1. Attempting to call an UNBOUND method via setTimeout');

// setTimeout calls the function updateStatus in the global context(Windows if js code runs on a browser, TimeOut if on nodejs), 
// so 'this' inside myTask.updateStatus will NOT be the 'myTask' object.
setTimeout(myTask.updateStatus, 500); 
// The log line will likely show 'undefined' for taskId.

// B) THE SOLUTION: Using the BOUND Method
console.log('2. Calling the BOUND method via setTimeout (Fix)');

// We use the 'updateStatusBound' function reference, which ensures that 
// 'this' inside the function will correctly point to 'myTask'.
setTimeout(myTask.updateStatusBound, 1000, 'FINISHED and BOUND'); 
// Output after 1000ms: [Task ID: 701] Status changed to: FINISHED and BOUND


// Final Verification
setTimeout(() => {
    console.log('3. Final State Verification');
    myTask.report(); 
    // This confirms the status was correctly updated by the bound function, 
    // not the unbound one.
}, 1500);