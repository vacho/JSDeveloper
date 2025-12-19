/**
 * OBJECT-ORIENTED PROGRAMMING (OOP) IN TYPESCRIPT
 * TypeScript adds powerful access modifiers and interfaces to standard JavaScript classes.
 */

// 1. ABSTRACTION & INTERFACES
// Abstraction means hiding complex implementation details and showing only the essentials.
interface Identifiable {
    getId(): string;
}

// 2. ENCAPSULATION
// Using access modifiers (public, private, protected) to protect data integrity.
abstract class ElectronicDevice implements Identifiable {
    protected readonly id: string; // Accessible by subclasses
    private _powerStatus: boolean = false; // Hidden from everything outside this class

    constructor() {
        this.id = Math.random().toString(36).substr(2, 9);
    }

    public abstract getDeviceType(): string; // Must be implemented by children

    public togglePower(): void {
        this._powerStatus = !this._powerStatus;
        console.log(`${this.getDeviceType()} is now ${this._powerStatus ? 'ON' : 'OFF'}`);
    }

    public getId(): string {
        return this.id;
    }

    // Getter to access private data safely
    get isOn(): boolean {
        return this._powerStatus;
    }
}

// 3. INHERITANCE
// Creating a specialized class based on a general one.
class Laptop extends ElectronicDevice {
    constructor(public brand: string, private ram: number) {
        super(); // Call the parent constructor
    }

    // Implementation of the abstract method
    public getDeviceType(): string {
        return "Laptop";
    }

    public upgradeRam(amount: number): void {
        this.ram += amount;
        console.log(`${this.brand} RAM upgraded to ${this.ram}GB`);
    }
}

class Smartphone extends ElectronicDevice {
    constructor(public model: string) {
        super();
    }

    public getDeviceType(): string {
        return "Smartphone";
    }

    public sendText(message: string): void {
        if (this.isOn) {
            console.log(`Sending from ${this.model}: ${message}`);
        } else {
            console.log("Error: Phone is off!");
        }
    }
}

// 4. POLYMORPHISM
// Treating different objects as the same general type.
const devices: ElectronicDevice[] = [
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
const myPhone = devices[1] as Smartphone;
myPhone.sendText("Hello OOP!");

/**
 * SUMMARY OF PILLARS:
 * 1. Encapsulation: Using 'private' to hide the _powerStatus.
 * 2. Abstraction: Using 'interface' and 'abstract class' to define a contract.
 * 3. Inheritance: Using 'extends' so Laptop gets logic from ElectronicDevice.
 * 4. Polymorphism: The 'devices' array holding different types that share a parent.
 */