// Syncronous function to get a pizza.
/*function getPizza() {
    return '🍕';
}
const pizza = getPizza();
console.log(`${pizza}`);
*/

// Asyncronous function to get a pizza.
/*let pizza;
function orderPizza() {
    console.log('Order pizza');
    // Set timeout is an asynchronous function. So it will not sychronized with the rest of the code.
    setTimeout(() => {  
        pizza = `🍕`;
        console.log(`Pizza is ready: ${pizza}`);
        console.log(`Eat ${pizza}`);
    }, 2000);
    console.log('Pizza was ordered');
}
orderPizza();
console.log('Call Qoli');*/

// This shows:
//Order pizza
//Pizza was ordered
//Eat undefined


// Callback function to the rescue.
/*function orderPizza(callback) {
    console.log('Order pizza');
    setTimeout(() => {
        const pizza = `🍕`;
        console.log(`Pizza is ready: ${pizza}`);
        callback(pizza);
    }, 2000);
    console.log('Pizza was ordered');
}
function pizzaReady(pizza) {
    console.log(`Eat the: ${pizza}`);
}

orderPizza(pizzaReady);
console.log('Call Qoli');
*/

// Promise to the rescue.
let result = new Promise((resolve, reject) => {
    // Simulate that some server throws a data result.
    let success = false; 
    setTimeout(() => {
        if (success) {
            // If successful, call resolve() with the data
            resolve({ id: 42, data: 'The data that the server returns' });
        } else {
            // If failed, call reject() with the error
            reject(new Error('Network connection failed.'));
        }
    }, 3000);
});
// 1. Consume the promise.
result
    // 2. Run if the Promise is Fulfilled (success)
    .then(response => {
        console.log("The id:", response.id); 
        console.log("The data:", response.data); 
        return response; // The returned value is passed to the next .then()
    })
    // 3. Chaining: This .then() receives the 'response.id' (42) from the previous block
    .then(x => {
        console.log("ID:", x.id); 
        return x;
    })
    .then(y => {
        console.log("Data:", y.data); 
    })
    // 4. .catch(): Runs if the Promise is Rejected (Error in any preceding step)
    .catch(error => {
        console.error("Error occurred:", error.message);
    })
    // 5. .finally(): Always runs, regardless of success or failure
    .finally(() => {
        console.log("Cleanup complete (e.g., loading spinner hidden).");
    });


