/**
 * @module utils
 */
const fs = require('fs').promises;

/**
 * Reads the file using the provided path and returns a promise
 * @param {string} path path to the file to read
 * @returns {promise} resolved or rejected promise object
 */
async function readDatabase(path) {
  return fs.readFile(path, 'utf-8')
    .then((data) => {
      const records = data.split('\n').map((line) => line.split(','));
      records.pop();
      const recObj = {};
      records.slice(1).forEach((record) => {
        recObj[record[record.length - 1]] = [];
      });
      records.slice(1).forEach((record) => {
        recObj[record[record.length - 1]].push(record[0]);
      });
      return (recObj);
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = readDatabase;
