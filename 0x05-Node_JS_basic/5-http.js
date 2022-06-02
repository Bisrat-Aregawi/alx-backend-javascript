/**
 * @module 5-http
 */
const http = require('http');
const { exec } = require('child_process');

// define serving hostname
const hostname = '127.0.0.1';
// define serving port
const port = 1245;

// create a server
const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/students') {
    const cmd = 'const countStudents = require(\'./3-read_file_async\');'
      + `countStudents('${process.argv[2]}')`
      + '.catch((err) => console.error(err.message))';
    exec(`echo "${cmd}" | ${process.execPath}`, (err, stdout, stderr) => {
      if (stdout) {
        const content = stdout.toString().slice(0, -1);
        res.end(`This is the list of our students\n${content}`);
      } else if (stderr) {
        res.statusCode = 404;
        const content = stderr.toString().slice(0, -1);
        res.end(`This is the list of our students\n${content}`);
      } else if (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    });
  } else {
    const resText = 'Hello Holberton School!';
    res.end(resText);
  }
});

// Listen on defined hostname and port
app.listen(port, hostname);

// Export server
module.exports = app;
