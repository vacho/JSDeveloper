function sayHello() {
    let i = 0;
    let names = ["Aidee", "Oscar", "Xavier", "Maria", "Juan"];
    const intervalMessage = setInterval(() => {
        console.log("Hello " + names[i]);
        i++;
    }, 3000);
    setTimeout(() => {
        clearInterval(intervalMessage);
    }, 10000)
}

sayHello();

// To run this code execute at the command line:
// node Node.js/Examples/HelloWorld/app.js
