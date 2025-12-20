const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const writeContent = async function(res, contentType, filePath) {
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
}

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url);
     console.log('File path:', filePath);
    if (req.url === '/' || req.url === '/index.html') {
        filePath = filePath + '/index.html';
        writeContent(res, 'text/html', filePath);
    } else if (req.url === '/lorem-ipsum' || req.url === '/lorem-ipsum.html') {
        filePath = filePath + '.html';
        writeContent(res, 'text/html', filePath);
    } else if (req.url.startsWith('/images/')) {
        writeContent(res, 'image/jpeg', filePath);
    } else if (req.url.startsWith('/css/')) {
        writeContent(res, 'text/css', filePath);
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server running well at http://localhost:${PORT}/`);
});
