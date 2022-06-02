/**
 * @module 1-calcul
 */

/**
 * Function rounds and returns result of SUM, SUBTRACT,
 * or DIVIDE operations on two numbers
 *
 * @param {string} type type of operation
 * @param {number} a first number
 * @param {number} b second number
 * @returns {number} sum of `a` and `b`
 */
function calculateNumber(type, a, b) {
  const A = Math.round(a);
  const B = Math.round(b);
  let result = 0;

  if (type === 'SUM') {
    result = A + B;
  }
  if (type === 'SUBTRACT') {
    result = A - B;
  }
  if (type === 'DIVIDE') {
    result = (B !== 0) ? A / B : 'Error';
  }
  return result;
}

module.exports = calculateNumber;
