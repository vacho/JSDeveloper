"use strict";
/**
 * OBJECT-ORIENTED PROGRAMMING (OOP) IN TYPESCRIPT
 * TypeScript adds powerful access modifiers and interfaces to standard JavaScript classes.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// 2. ENCAPSULATION
// Using access modifiers (public, private, protected) to protect data integrity.
class ElectronicDevice {
    id; // Accessible by subclasses
    _powerStatus = false; // Hidden from everything outside this class
    constructor() {
        this.id = Math.random().toString(36).substr(2, 9);
    }
    togglePower() {
        this._powerStatus = !this._powerStatus;
        console.log(`${this.getDeviceType()} is now ${this._powerStatus ? 'ON' : 'OFF'}`);
    }
    getId() {
        return this.id;
    }
    // Getter to access private data safely
    get isOn() {
        return this._powerStatus;
    }
}
// 3. INHERITANCE
// Creating a specialized class based on a general one.
class Laptop extends ElectronicDevice {
    brand;
    ram;
    constructor(brand, ram) {
        super(); // Call the parent constructor
        this.brand = brand;
        this.ram = ram;
    }
    // Implementation of the abstract method
    getDeviceType() {
        return "Laptop";
    }
    upgradeRam(amount) {
        this.ram += amount;
        console.log(`${this.brand} RAM upgraded to ${this.ram}GB`);
    }
}
class Smartphone extends ElectronicDevice {
    model;
    constructor(model) {
        super();
        this.model = model;
    }
    getDeviceType() {
        return "Smartphone";
    }
    sendText(message) {
        if (this.isOn) {
            console.log(`Sending from ${this.model}: ${message}`);
        }
        else {
            console.log("Error: Phone is off!");
        }
    }
}
// 4. POLYMORPHISM
// Treating different objects as the same general type.
const devices = [
    new Laptop("MacBook", 16),
    new Smartphone("iPhone 15")
];
console.log("--- OOP DEMO ---");
devices.forEach(device => {
    // Even though they are different classes, we can call togglePower 
    // because they both inherit from ElectronicDevice
    device.togglePower();
    console.log(`Device ID: ${device.getId()}`);
});
// Accessing specific functionality
const myPhone = devices[1];
myPhone.sendText("Hello OOP!");
/**
 * SUMMARY OF PILLARS:
 * 1. Encapsulation: Using 'private' to hide the _powerStatus.
 * 2. Abstraction: Using 'interface' and 'abstract class' to define a contract.
 * 3. Inheritance: Using 'extends' so Laptop gets logic from ElectronicDevice.
 * 4. Polymorphism: The 'devices' array holding different types that share a parent.
 */ 
//# sourceMappingURL=index.js.map