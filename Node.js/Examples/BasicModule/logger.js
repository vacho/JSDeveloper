var url = 'http://mylogger.io/log';

function log(message) {
    console.log(message);
}
// Exports the log function.
module.exports = log;

// Exports the log function as a property.
module.exports.log = log;
// Exports the log function as a property (alternative syntax).
exports.log = log; //exports reference to module.exports

// The five parametters available in every module file.
//console.log(exports); // circular reference.
//console.log(require);
//console.log(module);
//console.log(__filename);
//console.log(__dirname);
