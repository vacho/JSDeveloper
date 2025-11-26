# Object Oriented Programing.

JS supports OOP, by prototypes while modern JavaScript (ES6 and later) uses the class keyword for much cleaner syntax.

- The Idea: Instead of defining a class that objects inherit from, objects inherit properties and methods directly from other objects (their prototype).

- The Mechanism: Every JavaScript object has an internal link to another object called its prototype. When you try to access a property on an object, if it’s not found there, JavaScript looks up the chain of prototypes until it finds the property or reaches the end of the chain (null).

