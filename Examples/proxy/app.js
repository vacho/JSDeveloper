let me = { name: 'Osvaldo', password: '***', age: 1 };

me = new Proxy(me, {
    // Intercept to read.
    get(target, prop) {
        console.log(`Accessing prop: ${prop}`);
        
        // Protect an attribute.
        if (prop === 'password') {
            throw new Error('Access denied');
        }
        
        // Using Reflect.get is cleaner than target[prop]
        return Reflect.get(target, prop);
    },

    // Intercept to write.
    set(target, prop, value) {
        console.log(`Setting ${prop} to:`, value);
        
        if (prop === 'age' && value < 0) {
            throw new Error('Age not valid');
        }
        
        // Using Reflect.set is the standard way to handle the update
        return Reflect.set(target, prop, value);
    }
});
