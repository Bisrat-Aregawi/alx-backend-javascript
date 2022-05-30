/**
 * 2-read_file module
 * @module 2-read_file
 *
 */
const fs = require('fs');

/**
 * Reads a CSV file synchronously and log the number of students in each field
 * @param {string} path The path to file
 * @returns {undefined} undefined
 */
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const records = data
      .split('\n')
      .map((line) => line.split(','));

    // Remove last newline read from stream
    records.pop();

    // Construct records object
    const recObj = {};

    // Prepare field keys for `recObj`
    records.slice(1).forEach((record) => {
      recObj[record[record.length - 1]] = [];
    });

    // Add first names to corresponding fields array
    records.slice(1).forEach((record) => {
      recObj[record[record.length - 1]].push(record[0]);
    });

    // Log Number of students in database
    console.log(`Number of students: ${records.slice(1).length}`);

    // Log students list along with number of students per field
    Object.keys(recObj).forEach((field) => {
      console.log(
        `Number of students in ${field}: ${recObj[field].length}. List: ${recObj[field].join(', ')}`,
      );
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
