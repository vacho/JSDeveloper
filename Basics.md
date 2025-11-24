# Important notes

## Data types
Primitives: string, number, bigint, boolean, undefined, symbol, null
Objects

## Defining variables

```js
// Value: You can always change even you can change the data type.
// Scope: Are only visible within the block ({...})
// Not initialized.
let variableName;

// Value: You can't reasign a value for this.
// Scope: Behaves identically to let.
// Not initialized.
const name = 'Osvaldo';

// Value: Behaves identically to let.
// Scope: Are visible anywhere.
// Initialized to undefined
var variable = 'Really flexible'
```

## Asyncronous programing

## Arrow function

Arrow Functions are a modern, concise way to write function expressions in JavaScript. They allow for shorter syntax than traditional function expressions and, most importantly, handle the this keyword differently, which solves a lot of common JavaScript bugs.

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
// const t = new Timer('Clock'); t.start(); // -> Crashes or logs 'undefined'

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
// const t = new Timer('Clock'); t.start(); // -> Works perfectly!
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


Important: 
- ES Modules (ESM), or ECMAScript Modules replace this way from CommonJS (CJS) system.
- ESM is the module system used everywhere today, from browsers to Node.js backend projects (like Next.js).