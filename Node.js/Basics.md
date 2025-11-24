# Important notes

## Module Wrapper Function
For CommonJS (CJS) system Node.js adds automatically a runtime wraps around the code of every single CommonJS (CJS) module before executing it. It is to isolate and grants the access to the module scope by these 5 parametters/variables.
```js
(function (exports, require, module, __filename, __dirname) {

})
```
## Destructuring

Calling the fs entire object and work with this.
```js
const fs = require('node.fs');
fs.unlink('/tmp/some-file.txt');
```

Destructuring assignment.
```js
const { unlink } = require('node.fs');
unlink('/tmp/some-file.txt');
```

