/**
 * @module 7-http_express
 */
const express = require('express');
const { exec } = require('child_process');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  const cmd = 'const countStudents = require(\'./3-read_file_async\');'
    + `countStudents('${process.argv[2]}')`
    + '.catch((err) => console.error(err.message))';
  exec(`echo "${cmd}" | ${process.execPath}`, (err, stdout, stderr) => {
    if (stdout) {
      const content = stdout.toString().slice(0, -1);
      res.send(`This is the list of our students\n${content}`);
    } else if (stderr) {
      const content = stderr.toString().slice(0, -1);
      res.statusCode = 404;
      res.send(`This is the list of our students\n${content}`);
    } else if (err) {
      res.statusCode = 500;
      res.send('Internal Server Error');
    }
  });
  countStudents(process.argv[2])
    .then((data) => {
      res.send(`This is the list of our students\n${data.join('\n')}`);
    });
});

app.listen(port);

module.exports = app;
