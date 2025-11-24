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


// Callback function to rescue.
function orderPizza(callback) {
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