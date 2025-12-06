// Function defined in Section 4, which returns a Promise:
function delay(ms) { 
    return new Promise(resolve => {
        setTimeout(() => resolve(`Delayed for ${ms}ms`), ms);
    });
}

// --- Option A: Promise Chain (.then) ---
function runChain() {
    console.log("Starting Chain...");
    delay(1000)
        .then(msg1 => {
            console.log(msg1);
            return delay(500); // Wait for the next delay
        })
        .then(msg2 => {
            console.log(msg2);
            console.log("Chain Finished.");
        });
}

// --- Option B: Async/Await (Looks Synchronous) ---
async function runAsyncAwait() {
    try {
        console.log("Starting Async/Await...");
        
        // PAUSE execution until the 1000ms delay Promise resolves
        const msg1 = await delay(1000); 
        console.log(msg1);
        
        // PAUSE execution until the 500ms delay Promise resolves
        const msg2 = await delay(500);
        console.log(msg2);
        
        console.log("Async/Await Finished.");

    } catch (error) {
        // Error handling works just like synchronous code
        console.error("Async/Await caught an error:", error);
    }
}

// To run the async function, you just call it:
runChain();
runAsyncAwait();

// Note: In modern JS environments (like modules or browser console), 
// you can use `await` at the top level without an enclosing async function.
// For general code structure, always enclose `await` in `async`.