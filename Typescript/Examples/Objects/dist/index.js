const employee = {
    id: 124,
    name: "John Doe",
    age: 30,
    retire: (date) => {
        console.log(`Employee will retire on ${date}`);
    }
};
// We can't change id because it's readonly.
//employee.id = 1;
console.log(employee);
console.log(employee.retire(new Date()));
export {};
//# sourceMappingURL=index.js.map