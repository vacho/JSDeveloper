const fs = require('fs');

// Blocking the filesystem operation.
const files = fs.readdirSync('./');

// Non-blocking the filesystem operation.
fs.readdir('./', function(err, files){
    if(err) console.log('Error', err);
    else console.log('Result', files);
});

console.log(files);

// ASYNCHRONOUS
// Promise example: Return a promise that is fulfilled when the asynchronous operation is complete.
const { unlink } = require('node:fs/promises');

(async function(path) {
  try {
    await unlink(path);
    console.log(`successfully deleted ${path}`);
  } catch (error) {
    console.error('there was an error:', error.message);
  }
})('/tmp/hello.txt');

//  Callback example: Recomendable when maximal performance is required. 
const { unlink } = require('node:fs');

unlink('/tmp/hello', (err) => {
  if (err) throw err;
  console.log('successfully deleted /tmp/hello');
});

// SYNCHRONOUS
// block the Node.js event loop and further JavaScript execution until the operation is complete
const { unlinkSync } = require('node.fs');

try {
    unlinkSync('/tmp/hello.txt');
    console.log('Successfully deleted /tmp/hello.txt file');
} catch (err) {
    console.error('There was an error:', err.message)
}