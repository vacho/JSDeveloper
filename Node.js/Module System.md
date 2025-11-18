# Module System
Every file in a node app is considered a module.

Usually app.js is called the main module.

Variables and functions defined in that file are scoped to that module. They're not available outside of that module.

## Basic module definition
Create a file logger.js
```js
var url = 'http://mylogger.io/log';
function log(message) {
    console.log(message);
}
module.exports.log = log;
```
Loading a module: Create a file app.js inside the same folder
```js
var logger = require('./logger');
logger.log('My custom message');
```

## Built in modules

### Path
Utilities for working with file abd directory paths.

### OS
Operating system related methods and properties.

### File system
To working with files and directories.

### Events
Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.

### Http Module
This module, containing client and server, can be imported via require('node:http') (CommonJS) or import * as http from 'node:http' (ES module).

The HTTP interfaces in Node.js are designed to support many features of the protocol which have been traditionally difficult to use. In particular, large, possibly chunk-encoded, messages. The interface is careful to never buffer entire requests or responses, so the user is able to stream data.