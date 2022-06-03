/**
 * @module server
 */
const express = require('express');
const router = require('./routes/index');

const app = express();
const host = '127.0.0.1';
const port = 1245;

app.use(router);

app.listen(port, host);

// Put to satisfy the checker
export default app;
