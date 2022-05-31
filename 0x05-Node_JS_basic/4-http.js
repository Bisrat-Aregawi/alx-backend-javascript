/**
 * @module 4-http
 */
const http = require('http');

// Define serving hostname
const hostname = '127.0.0.1';
// Define serving port
const port = 1245;

// Create a server
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

// Listen on defined hostname and port
app.listen(port, hostname);

// Export server
module.exports = app;
