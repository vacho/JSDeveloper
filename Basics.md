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

## First class citizen: functions
In js you can do everything with functions that you can do with any other data type.

1. Can asign a function to a variables => reusability, readability
```js
const theTime = function() {
    const now = new Date();
    return now.getHours()+':'+now.getMinutes();
}
console.log(theTime());
```
2. Can pass functions as argument => Functional pardigm, modularity, reusability, testeability
```js
// Works in chrome browser
function gretting(callback) {
    console.log(`Hello ${callback} user`);
}
function getSO() {
    return navigator.platform;
}
gretting(getSO());

const array = [1,2,3,4];
const elements = array.map(createElement);

function createElement(item) {
    return `<li>${item}</li>`;
}
console.log(elements);
```
3. Functions can be returned from other functions => Factory pattern.
```js
function greeter(lan) {
    return function (name) {
        if (lan == 'en') {
            console.log(`Hello ${name}`);
        } else if (lan == 'es') {
            console.log(`Hola ${name}`);
        }
    }
}

const esGretting = greeter('es');
esGretting('Osvaldo');
```
4. Functions can be curried (partial execution) => specialized functions
```js
function printAmount(sign) {
    return function (amount) {
        return `${sign}${amount}`;
    }
}
const usdAmount = printAmount('$');
const bsAmount = printAmount('Bs');

usdAmount(100);
bsAmount(698);
printAmount('USDT')(100);
printAmount('BTC')(0.000025);
```
5. You can create Clousures
```js
function createGreeter(name) {
  return function get_message() {
    console.log(`Hello, ${name}!`);
  };
}
const greetMate = createGreeter('Mate');
// Because greetMate holds a closure over it, the 'Mate' value persists in memory.
greetMate(); // Output: Hello, Mate!
```
6. Functions can be stored in data structures => Dynamic manipulation, code organization
```js
const add = (a,b) => a+b;
const substract = (a,b) => a-b;
const operations = [add, substract, (a,b) => a*b ];

operations[0](3,1);
operations[1](2,1);
operations[2](3,2);
```
7. Anonymous functions => Less code, inmediatelly call => callbacks, errors functions, event listeners

## Inumutability
Variable that can't change.

You need to manage the mutability to get this profits:
- Fewer bugs.
- No silent changes.
- Monitoring.
- Easier to Debug.
- Order of changes.
- Stack trace.
- Undo / Redo.
- Predictable.

'const' variables:
- Constant can't protect the inmutability for objects where you can add attributes, change values and behaviours.

```js
// Copy object into a new object
const newCopy = 
{...obj}
[...array]
Object.asign({}, obj)
_.cloneDeep(obj)
map, filter
structuredClone(obj)

// Freeze the high level object properties
const a = {id:1, data:{d1:'data 1', d2:'data2'}};
Object.freeze(a);
a.id = 2;
a.name = 'Other name';
a.data.d2 = "Other data";

```

## Proxy
An object that lets custom behaviours for basic operations: READ, WRITE, Existence check, Function calls, etc.
```js
let me = {name: 'Osvaldo', password: '***', age: 1};
me = new Proxy(me, {
    // Intercept to read.
    get(target, prop) {
        console.log(`Accessing prop: ${prop}`);
        // protect an attribute.
        if (prop == 'password') {
            throw new Error('Access denied');
        }
        // Auto fall-back.
        return prop in target ? target[prop] : 'Not found';
    },
    // Intercept to write.
    set(target, prop, value) {
        if (prop == 'age' && value < 0) {
            throw new Error('Age not valid');
        }
        // Conditional read-only
        if (prop === 'password')
            throw new Error("You can't modify this");
        target[prop] = value;
        return true;
    }
});

//console.log(me.age);
//console.log(me.name);
//console.log(me.password);
me.age = -43;
me.age = 87;
console.log(me.age);

```



## References
- A video series with main points: https://www.youtube.com/playlist?list=PL1PqvM2UQiMoGNTaxFMSK2cih633lpFKP

