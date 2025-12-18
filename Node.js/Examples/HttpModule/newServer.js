//const { createServer } = require('node:http');
import { createServer } from 'node:http';

const host = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>The life</h1>');
  res.write('<p>We can do many things, feeling that the life is wonderfull </p>')
  res.end();
});

server.listen(port, host, () => {
  console.log(`Server hon host ${host} and port ${port} is running`);
});
