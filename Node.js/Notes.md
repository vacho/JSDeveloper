# Important notes

## Module Wrapper Function
For CommonJS (CJS) system Node.js adds automatically a runtime wraps around the code of every single CommonJS (CJS) module before executing it. It is to isolate and grants the access to the module scope by these 5 parametters/variables.
```js
(function (exports, require, module, __filename, __dirname) {

})
```
## Destructuring

Calling the fs entire object and work with this.
```js
const fs = require('node.fs');
fs.unlink('/tmp/some-file.txt');
```

Destructuring assignment.
```js
const { unlink } = require('node.fs');
unlink('/tmp/some-file.txt');
```

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

Important: 
- ES Modules (ESM), or ECMAScript Modules replace this way from CommonJS (CJS) system.
- ESM is the module system used everywhere today, from browsers to Node.js backend projects (like Next.js).
```