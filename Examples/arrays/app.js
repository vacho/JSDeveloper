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