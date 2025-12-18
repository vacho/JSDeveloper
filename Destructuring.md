# Destructuring

Is a shorthand syntax introduced in ES6 that allows you to "unpack" values from arrays or properties from objects into distinct variables. It makes your code cleaner, readable, and reduces repetitive property access.

## 1. Object Destructuring: 
```js
// The Old Way
const user = { name: 'Alice', age: 25, city: 'London' };
const name = user.name;
const age = user.age;

// The Destructuring Way.
const user = { name: 'Alice', age: 25, city: 'London' };
// We "extract" name and age directly from the object
const { name, age } = user;


console.log(name); // 'Alice'
```

### Advanced Object Features
- Aliasing (Renaming): If you already have a variable with that name
```js
const { name: userName } = user;
console.log(userName); // 'Alice'
```
- Default Values: In case the property doesn't exist
```js
const { country = 'Unknown' } = user;
```

## 2. Array Destructuring
Array destructuring is based on the position (index) of the elements.
The Syntax:
```js
const colors = ['red', 'green', 'blue'];
// Unpacking by position
const [first, second] = colors;

console.log(first);  // 'red'
console.log(second); // 'green'
```
Skipping Elements: You can skip values using commas:
```js
const [,, third] = colors;
console.log(third); // 'blue'
```

## 3. Practical Use Cases

**Swapping Variables:** 

You can swap two variables without a temporary "temp" variable.

```js
let a = 1;
let b = 2;
[a, b] = [b, a]; 
// a is now 2, b is now 1
```
**Function Parameters:**

This is extremely common in modern development. Instead of passing an entire object and doing props.name, you destructure the arguments.
```js
function greet({ name, city }) {
  console.log(`Hello ${name} from ${city}!`);
}

const person = { name: 'Bob', city: 'Paris', job: 'Developer' };
greet(person);
```
**The Rest Pattern (...)**

You can collect the "rest" of the properties into a new object/array.
```js
const { name, ...others } = user;
console.log(others); // { age: 25, city: 'London' }
```

## Summary
- Objects use curly braces {} and match by key name.
- Arrays use square brackets [] and match by index/order.
- It saves you from writing thing.property over and over again!