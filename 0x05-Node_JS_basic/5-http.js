/**
 * @module 5-http
 */
const http = require('http');
const countStudents = require('./3-read_file_async');

// Define serving hostname
const hostname = '127.0.0.1';
// Define serving port
const port = 1245;

// Create a server
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        const summary = `This is the list of our students\n${data.join('\n')}`;
        res.setHeader('Content-Length', summary.length);
        res.end(`This is the list of our students\n${data.join('\n')}`);
      });
  } else {
    const resText = 'Hello Holberton School!';
    res.setHeader('Content-Length', resText.length);
    res.end(resText);
  }
});

// Listen on defined hostname and port
app.listen(port, hostname);

// Export server
module.exports = app;
