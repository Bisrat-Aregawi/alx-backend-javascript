/**
 * @module 6-http_express
 */
const express = require('express');

// Prepare an object of the express class
const app = express();
// Assign the port
const port = 1245;

// Prepare a responder to the get request to `/` route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
// Listen on given port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
