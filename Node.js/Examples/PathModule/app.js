const path = require('path');

// Return root folder(root), directory(dir), base file name(base), file extension(ext), file name without extension(name). 
var pathObj = path.parse(__filename)
console.log(pathObj);

// Whatch all the methods and properties.
console.log(path);
