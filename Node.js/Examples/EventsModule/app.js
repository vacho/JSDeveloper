// Raise an event.
const Logger = require('./logger');
const logger = new Logger();

// Register a listener arrow function.
logger.on('messageLogged', (arg) => {
    console.log("Litener called with arrow function", arg);
});

logger.log('Starting a logging process...');