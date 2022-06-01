/**
 * @module 0-calcul.js
 */

/**
 * Function rounds and returns sum of two numbers right?
 *
 * @param {number} a first number
 * @param {number} b second number
 * @returns {number} sum of `a` and `b`
 */
function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
