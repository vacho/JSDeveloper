const employee: {
    readonly id:number, 
    name:string,
    age?: number,
    retire: (date: Date) => void
} = {
    id: 124, 
    name: "John Doe",
    age: 30,
    retire: (date: Date) => {
        console.log(`Employee will retire on ${date}`);
    }
};

// We can't change id because it's readonly.
//employee.id = 1;

console.log(employee);
console.log(employee.retire(new Date()));