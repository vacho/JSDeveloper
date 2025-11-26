// ES6 class syntax.
class User {
    // Private fields.
    #isHuman = 1;
    
    // The constructor is called when a new object is created (instantiated)
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    // Methods are defined directly in the class body (stored on the prototype)
    logInfo() {
        console.log(`User: ${this.name}, Level: ${this.level}, Human: ${(this.#isHuman)?'Yes':'No'}`);
    }

    // Static methods are called on the Class itself, not an instance
    static getDefaultLevel() {
        return 1;
    }

    isHuman() {
        return (this.#isHuman)?'Yes':'No';
    }
}

// Creating new instances (objects)
const aidee = new User('Aidee', 5);
const bob = new User('Bob', User.getDefaultLevel());
console.log(aidee.name); // Output: Aidee
//console.log(aidee.#isHuman); // Output: undefined (private field)

// Calling instance methods

aidee.logInfo(); // Output: User: Aidee, Level: 5
bob.logInfo();   // Output: User: Bob, Level: 1


// Changing a method for all instances via the prototype
User.prototype.logInfo = function() {
    console.log(`*** User Info ***\nName: ${this.name}\nLevel: ${this.level}\n****************`);
};

aidee.logInfo(); // Output with new format
bob.logInfo();   // Output with new format

// This change the method for existing instances and future instances (also) 
// Because User.prototype === aidee.__proto__ === bob.__proto__
aidee.__proto__.logInfo = function(){
    console.log(`Hello ${this.name}`);
}
aidee.logInfo(); // Output with new format
bob.logInfo();   // Output with new format
const oscar = new User('Oscar', User.getDefaultLevel());
oscar.logInfo();

// Inheritance.
class Admin extends User {
    constructor(name, level, role) {
        super(name, level);
        this.role = role;
    }
    // Polymorphism.
    logInfo() {
        super.logInfo();
        console.log(`Role: ${this.role}, Human: ${this.isHuman()}`);
    }
}
xavier = new Admin('Xavier', User.getDefaultLevel(), 'Administrator');
xavier.logInfo();