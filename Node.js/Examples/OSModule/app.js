const os = require('os');

//console.log(os);

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory/1024/1024/1024} Gb`);
console.log(`Free Memory: ${freeMemory/1024/1024/1024} Gb`);
