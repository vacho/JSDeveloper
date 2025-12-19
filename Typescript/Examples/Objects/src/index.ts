type Employee = {
    readonly id: number;
    name: string;
    age: number;
    retire: (date: any) => any;
};

let employees: Employee[] = [
    {
        id: 124, 
        name: "John Doe",
        age: 30,
        retire: (date: Date) => {
            console.log(`Employee will retire on ${date}`);
        }
    },
    {
        id: 123, 
        name: "Jennifer Lopez",
        age: 20,
        retire: (date: String) => {
            return date;
        }
    },
];
// We can't change id because it's readonly.
//employee.id = 1;

console.log(employees);

employees.forEach((emp: Employee) => {
    console.log(`Employee Name: ${emp.name}, Age: ${emp.age}`);
});
if (employees[0]) {
    employees[0].retire(new Date());
}

if (employees[1]) {
    let dateFinish = '2029';
    console.log(`The employee ${employees[1].name} will retire on: ${employees[1].retire(dateFinish)}`);
}
