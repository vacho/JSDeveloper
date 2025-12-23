let fruits = ['aple', 'orange', 'banana'];
let newFruits = new Array();

// Using forEach to iterate.
fruits.forEach(fruit => {
    if (fruit == 'orange') {
        fruit = 'kiwi';
    }
    newFruits.push(fruit);
})
// Using map to create a new array with modified values.
console.log(fruits.map(fruit => `The ${fruit} is a fruit`));
// Using filter to create a new array with elements that match a condition.
console.log(fruits.filter(fruit => fruit.includes('na')));
// To test that original array is not modified.
console.log(fruits);
// Final output of newFruits after forEach modification.
console.log(newFruits);

// Using map to create a new array with reversed fruit names.
let reverse = fruits.map(fruit =>
    fruit.split('').reverse().join('')
)
console.log('Reverse:', reverse);

// Object arrays filters
let employees = [
    {
        "id": 1,
        "firstname": "Dave",
        "lastname": "Gray"
    },
    {
        "id": 2,
        "firstname": "John",
        "lastname": "Smith"
    }
];
let employee1 = employees.find(emp => emp.firstname === "Dave");
let employee2 = employees.find(emp => emp.id === 2);
let index = employees.findIndex(emp => emp.firstname === "John");
console.log(employee1);
console.log(index);

// Delete an element from objects array.
const deletedEmployee = employees.splice(index, 1);