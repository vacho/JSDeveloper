// Basic datatype.
let age = 65;
if (age > 50) {
    age -= 9;
}
console.log(`Your age is ${age}`);
// Any
let randomData; // Due to by default is of type any. I we asign a value the variable take that type.
randomData = 10;
let randomName = 'Osvaldo';
console.log(`For ${randomName} the age is: ${randomData}`);
randomData = true;
randomName = 123;
console.log(`For the machine ${randomName} the status is: ${randomData}`);
randomData = 'R2D2';
console.log(`Random Data: ${randomData}`);
// Unknown (The safe way to use any).
let dataGetted = 66;
if (typeof dataGetted === 'number') {
    let order = dataGetted;
    console.log(`Execute the order ${dataGetted}`);
}
// Array.
let numbers = [2, 4, 6, 8, 10];
numbers.forEach((num) => {
    console.log(`Number: ${num}`);
});
// Tuple.
let mixed = ['Osvaldo', 45, 'M'];
console.log(mixed);
const userTable = [
    [1, "Alice", true],
    [2, "Bob", false],
    [3, "Charlie", true]
];
const nodes = [
    ["Primary", [100, 200]],
    ["Secondary", [50, 60]]
];
// Enum.
var Semaphore;
(function (Semaphore) {
    Semaphore[Semaphore["red"] = 0] = "red";
    Semaphore[Semaphore["yellow"] = 1] = "yellow";
    Semaphore[Semaphore["green"] = 2] = "green";
})(Semaphore || (Semaphore = {}));
;
//console.log(Semaphore);
let myColor = Semaphore.red;
console.log(myColor);
const mainMember = {
    name: 'Osvaldo',
    id: 1234
};
console.log(`Staff Member: ${mainMember.name}, ID: ${mainMember.id}`);
export {};
//# sourceMappingURL=index.js.map