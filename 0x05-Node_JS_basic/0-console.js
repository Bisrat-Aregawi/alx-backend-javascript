/**
 * Prints the argument passed to stdout
 * @param {string} str String to print to stdout
 * @returns {undefined} undefined
 */
function displayMessage(str) {
  process.stdout.write(`${str}\n`);
}

module.exports = displayMessage;
