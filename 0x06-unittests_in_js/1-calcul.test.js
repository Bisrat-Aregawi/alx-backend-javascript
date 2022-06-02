/**
 * @module 1-calcul.test
 * Contains tests for `1-calcul` module
 */

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('Check for addition of two integer numbers', () => {
    assert.equal(calculateNumber('SUM', 1, 2), 3);
  });
  it('Check for addition of two float numbers a.b where b < 5', () => {
    assert.equal(calculateNumber('SUM', 1.1, 2.2), 3);
  });
  it('Check for addition of two float numbers a.b where b >= 5', () => {
    assert.equal(calculateNumber('SUM', 1.7, 2.9), 5);
  });
  it('Check for addition of two float numbers a.b where b = 5', () => {
    assert.equal(calculateNumber('SUM', 1.5, 2.5), 5);
  });
  it('Check for subtraction of two integer numbers', () => {
    assert.equal(calculateNumber('SUBTRACT', 1, 2), -1);
  });
  it('Check for subtraction of two float numbers a.b where b < 5', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.1, 2.2), -1);
  });
  it('Check for subtraction of two float numbers a.b where b >= 5', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.7, 2.9), -1);
  });
  it('Check for subtraction of two float numbers a.b where b = 5', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.5, 2.5), -1);
  });
  it('Check for division of two integer numbers', () => {
    assert.equal(calculateNumber('DIVIDE', 3, 2), 1.5);
  });
  it('Check for division of two float numbers a.b where b < 5', () => {
    assert.equal(calculateNumber('DIVIDE', 1.1, 2.2), 0.5);
  });
  it('Check for division of two float numbers a.b where b >= 5', () => {
    assert.equal(calculateNumber('DIVIDE', 1.7, 3.9), 0.5);
  });
  it('Check for division of two float numbers a.b where b = 5', () => {
    assert.equal(calculateNumber('DIVIDE', 1.5, 3.5), 0.5);
  });
  it('Check for zero division error', () => {
    assert.equal(calculateNumber('DIVIDE', 2, 0.4), 'Error');
  });
});
