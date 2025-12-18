# Important notes

## Frameworks

- Nest
(NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).

Under the hood, Nest makes use of robust HTTP Server frameworks like Express (the default) and optionally can be configured to use Fastify as well!

Nest provides a level of abstraction above these common Node.js frameworks (Express/Fastify), but also exposes their APIs directly to the developer. This gives developers the freedom to use the myriad of third-party modules which are available for the underlying platform.

**Why use Nest if it just uses Express?**
1. Scaling: Express projects often become "spaghetti code" as they grow because there is no forced structure. Nest forces a modular structure.
2. Productivity: Nest provides built-in solutions for Microservices, WebSockets, GraphQL, and Validation that you would have to stitch together manually in Express.
3. Testability: Because of Dependency Injection, NestJS apps are significantly easier to unit test than Express apps.

- Express
Fast, unopinionated, minimalist back-end web application framework for Node.js. It simplifies the process of building server-side applications and APIs by providing a robust set of features for routing, middleware, and handling HTTP requests. 

- Fastify
High-performance, low-overhead web framework for Node.js, focused on speed and developer experience, ideal for building fast APIs and microservices with features like built-in JSON schema validation, a plugin architecture, and excellent TypeScript support, making it a powerful, modern alternative to frameworks like Express. (2x faster than express).

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

