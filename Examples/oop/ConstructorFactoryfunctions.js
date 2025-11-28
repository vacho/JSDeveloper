// This is useful to create directly objects and override their behavior individually.

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`CF Hello, my name is ${name} and I am ${age} years old.`);
    }
}
/*
// Another way to add methods to the prototype (to be inheritable)
Person.prototype.greet = function() {
    console.log("Hello, I am a person.");
}*/

const p1 = new Person('Osvaldo', 45);
p1.greet();


// Altering the behavior of a single object.
const p2 = new Person('Aidee', 46);
p2.greet = function() {
    console.log(`CF Hello, I am ${this.name}.`);
}
p2.greet();
p1.greet();


// Factory function
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function() {
      console.log(`FF Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
}

// Using the factory function to create new objects
const person1 = createPerson("Alice", 30);
person1.greet();
/*const person2 = createPerson("Bob", 25);
person2.greet();*/

