/**
 * @module 0-calcul.test.js
 * Contains tests for `0-calcul` module
 */

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('Check for non fractional numbers 1 & 2 equal 3', () => {
    assert.equal(calculateNumber(1, 2), 3);
  });
  it('Check for fractional numbers a.b where b < 5', () => {
    assert.equal(calculateNumber(1.3, 2.1), 3);
  });
  it('Check for fractional numbers a.b where b >= 5', () => {
    assert.equal(calculateNumber(1.6, 2.7), 5);
  });
  it('Check for fractional numbers a.b where b = 5', () => {
    assert.equal(calculateNumber(1.5, 2.5), 5);
  });
  it('Check for non fractional negative numbers', () => {
    assert.equal(calculateNumber(-3, -1), -4);
  });
  it('Check for fractional negative numbers a.b where b < 5', () => {
    assert.equal(calculateNumber(-3.2, -1.4), -4);
  });
  it('Check for fractional negative numbers a.b where b >= 5', () => {
    assert.equal(calculateNumber(-3.6, -1.9), -6);
  });
  it('Check for fractional negative numbers a.b where b = 5', () => {
    assert.equal(calculateNumber(-3.5, -1.5), -4);
  });
});
