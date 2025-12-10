# Important notes

## Data types
Primitives: String, Number, BigInt, Boolean, Symbol, undefined, null.
Objects: Object(literals{}), Array, Function, Date, RegExp, etc. 

## Defining variables

```js
// Value: You can always change even you can change the data type.
// Scope: block scoped {...}
// Not initialized.
let variableName;

// Value: You can't reasign a value for this, but you can change attribute values in a object.
// Scope: block scoped {...}
// Not initialized.
const name = 'Osvaldo';

// Value: You can always change even you can change the data type.
// Scope: function scoped
// Initialized to undefined
var variable = 'Really flexible'
```

## Asyncronous programing
Asynchronous programming enables the execution of potentially long-running tasks without blocking the main thread of execution. This allows the program to remain responsive and continue processing other operations while waiting for the asynchronous task to complete.

To manage in js you have 2 options callbacks functions and promises. See Examples/asyncrhonous to understand.

Common cases:
- Data fetching.
- Calling backend APIs.
- Loading Files.
- Timers and intervals.

## Promises
Is an js object that represents the eventual completion or failure of an asynchronous operation, and its resulting value.

A promise have 3 states: pending => fulfilled or rejected.

Example of basic promise
```js
function getWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Rainy');
            //reject('Sunny');    
        }, 100);
    });
}

function getWeatherIcon(weather) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            switch(weather) {
                case 'Sunny':
                    resolve('☀️');
                    break;
                case 'Rainy':
                    resolve('🌧️');
                case 'Cloudy':
                    resolve('☁️');
                default:
                    reject('Error, no icon found!');
            }
        });
    });
}
function onSuccess(data) {
    console.log(`Success ${data}`);
}
function onError(data) {
    console.log(`Error ${data}`);
}

getWeather()
    .then(getWeatherIcon)
    .then(onSuccess, onError)
;
```

## Arrow function

Arrow Functions are a modern, concise way to write function expressions in JavaScript. They allow for shorter syntax than traditional function expressions and, most importantly, handle the 'this' keyword differently(their surrounding), which solves a lot of common JavaScript bugs.

Avoid to use in:
- Constructors.
- Object methods.
- Methods that use arguments: Arrow functions do not have their own arguments object. They inherit the arguments from the nearest non-arrow parent function.

```js
class Timer {
    constructor(name) {
        this.name = name;
        this.count = 0;
    }

    start() {
        // When setInterval runs this function, 'this' is NOT the Timer object.
        // It's the global window/timeout object.
        setInterval(function() {
            // ERROR: this.count is undefined or NaN
            this.count++; 
            console.log(`${this.name}: ${this.count}`); 
        }, 1000);
    }
}
const t = new Timer('Clock'); t.start(); // -> Crashes or logs 'undefined'

class Timer {
    constructor(name) {
        this.name = name;
        this.count = 0;
    }

    start() {
        // The arrow function inherits 'this' from the surrounding scope (the start method).
        // Therefore, 'this' correctly refers to the Timer instance.
        setInterval(() => {
            this.count++; 
            console.log(`${this.name}: ${this.count}`); 
        }, 1000);
    }
}
const t = new Timer('Clock'); t.start(); // -> Works perfectly!
```

## Bind
The bind() method is a powerful built-in function in JavaScript used to manually set the value of the this keyword for a given function, creating a new function that is permanently bound to that context.

```js
const user = { 
    name: 'Aidee', 
    level: 1, 
    logInfo: function() {
        console.log(`User: ${this.name}, Level: ${this.level}`);
    } 
};

// Create a new function that is permanently bound to the 'user' object.
const boundLogInfo = user.logInfo.bind(user);

// Now, when we pass the bound function as a callback, 'this' is correct.
setTimeout(boundLogInfo, 100); 
// Output: User: Aidee, Level: 1 (SUCCESS!)

// If we try to use logInfo as a standalone callback for setTimeout:
setTimeout(user.logInfo, 100); 
// Output: User: undefined, Level: undefined (or window/global object data)
// Why? Because setTimeout runs the function without any context (this refers to the global object).
```

## Value Vs Reference
- Pass by value is for Primitives: When you copy a primitive value, JavaScript allocates a new space in memory for the new variable and copies the content of the old variable into it.
- Pass by reference is for Objects: When you assign an object to a new variable, the content itself is not copied. Instead, the memory address (the reference) pointing to the original object is copied.

Important: 
- ES Modules (ESM), or ECMAScript Modules replace this way from CommonJS (CJS) system.
- ESM is the module system used everywhere today, from browsers to Node.js backend projects (like Next.js).

## Pure functions
- Always returs the same output, for a given input.
- No side-efects. (no change external values)
This functions are cleaner, predictable, consistent and debuggable.

Impure functions were useful for: DOM manipulation, Math.random(), new Date(), user input, File IO, Network requests