// ****** Immutability by COPY  ******

// We use 'const' and promise to only create new copies for updates (non-destructive updates).
const originalUser = {
  id: 1,
  name: "Alice",
  settings: { theme: "light" }
};

const updatedUser = {
  ...originalUser, // Copy all existing properties (including nested objects)
  name: "Alicia",  // Override or add new properties
  settings: {
    ...originalUser.settings, // Deep copy nested objects (only to show how to handle nested structures)
    theme: "dark"
  }
};

const newUser = Object.assign({}, originalUser);
newUser.name = "Bob";

console.log("\n2. Immutable Update Example:");
console.log("Original User (unchanged):", originalUser);
console.log("Updated User (new object):", updatedUser);
console.log("Are they the same object?", originalUser === updatedUser); // Should be false


// ****** Comtroll the mutability then: Function to mutate an object *******
let state = {count:0};
function setState(newState) {
    //Object.assign(state, newState);
    state = {...state, ...newState};
    render();
}
function render() {
    console.log(state);
}
setState({count: 1});
setState({name: 1});