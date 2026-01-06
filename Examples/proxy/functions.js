function greet(name) {
    return `Hello ${name}`;
}

const safeGreet = new Proxy(greet, {
    apply(target, thisArg, args) {
        if (typeof args[0] !== 'string') {
            throw new Error('Expected a String');
        }
        return Reflect.apply(target, thisArg, args);
    }
});

console.log(safeGreet('Osvi'));
//safeGreet(-1);
//safeGreet([1,2,3]);