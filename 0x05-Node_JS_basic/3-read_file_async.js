/**
 * @module 3-read_file_async
 */
const fs = require('fs').promises;

/**
 * Function reads and logs csv file contents asynchronously
 * @param {string} path path to file
 * @returns {promise} promise
 */
async function countStudents(path) {
  return fs.readFile(path, 'utf-8')
    .then((data) => {
      // Construct records array
      const records = data.split('\n').map((line) => line.split(','));
      // Remove trailing newline array
      records.pop();
      // Construct records object
      const recObj = {};
      // Prepare field keys for `recObj`
      records.slice(1).forEach((record) => {
        recObj[record[record.length - 1]] = [];
      });
      // Populate fields array with corresponding first names
      records.slice(1).forEach((record) => {
        recObj[record[record.length - 1]].push(record[0]);
      });
      // Log number of students in database
      console.log(`Number of students: ${records.slice(1).length}`);
      // Log students per field
      Object.keys(recObj).forEach((field) => {
        console.log(`Number of students in ${field}: ${recObj[field].length}. List: ${recObj[field].join(', ')}`);
      });
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
