# EventLoop
The Event Loop is a fundamental mechanism that handles asynchronous operations in JavaScript.

## Call Stack
Purpose: Executes functions. It's a LIFO (Last-In, First-Out) structure.

Process: When a function is called, it is pushed onto the stack. When it returns, it is popped off. The JS engine will only execute the code at the top of the stack.

Rule: The Event Loop only begins its work when the Call Stack is empty.

## Web  APIs (browser or node.js)
These are not part of the JavaScript engine but are provided by the surrounding environment (the browser or Node.js).

Purpose: Handle asynchronous tasks, such as:
- setTimeout() or setInterval() (Timers)
- fetch() or XMLHttpRequest (Network requests)
- DOM events (click, scroll, etc.)

Process: When an asynchronous function (like setTimeout) is encountered, it is passed over to the Web APIs for handling. The function call is immediately popped off the Call Stack, and the main thread moves on.

## Task Queue (Callback Queue)
Purpose: Holds the callback functions from the Web APIs that are ready to be executed.

Process: Once a Web API task is completed (e.g., the timer for setTimeout runs out, or a network request returns data), its associated callback function is placed into the Callback Queue. It's FIFO (First-In, First-Out)

## Microtask Queue
Task Queue for promises.

## References
- Good video that explains visually https://www.youtube.com/watch?v=okkHnAo8GmE&list=PL1PqvM2UQiMoGNTaxFMSK2cih633lpFKP&index=18
    