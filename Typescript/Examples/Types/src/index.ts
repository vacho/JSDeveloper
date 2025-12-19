// Basic datatype.
let age: number = 65;
if (age > 50 ) {
    age -= 9;
}
console.log(`Your age is ${age}`);

// Any
let randomData; // Due to by default is of type any. I we asign a value the variable take that type.
randomData = 10;
let randomName: any = 'Osvaldo';
console.log(`For ${randomName} the age is: ${randomData}`);
randomData = true;
randomName = 123;
console.log(`For the machine ${randomName} the status is: ${randomData}`);
randomData = 'R2D2';
console.log(`Random Data: ${randomData}`);

// Unknown (The safe way to use any).
let dataGetted: unknown = 66;
if (typeof dataGetted === 'number') {
    let order = dataGetted;
    console.log(`Execute the order ${dataGetted}`);
}

// Array.
let numbers: number[] = [2, 4, 6, 8, 10];
numbers.forEach((num: number) => {
    console.log(`Number: ${num}`);
});

// Tuple.
let mixed: [string, number, string] = ['Osvaldo', 45, 'M'];
console.log(mixed);

type UserRow = [number, string, boolean];
const userTable: UserRow[] = [
  [1, "Alice", true],
  [2, "Bob", false],
  [3, "Charlie", true]
];

type NestedNode = [string, [number, number]];
const nodes: NestedNode[] = [
  ["Primary", [100, 200]],
  ["Secondary", [50, 60]]
];

// Enum.
const enum Semaphore{ 
    red, 
    yellow, 
    green
};
//console.log(Semaphore);
let myColor: Semaphore = Semaphore.red;
console.log(myColor);

// Intersection of Types.
type Person = { name: string };
type Employee = { id: number };
type StaffMember = Person & Employee; // Must have both name and id
const mainMember: StaffMember = {
    name: 'Osvaldo',
    id: 1234
};
console.log(`Staff Member: ${mainMember.name}, ID: ${mainMember.id}`);

