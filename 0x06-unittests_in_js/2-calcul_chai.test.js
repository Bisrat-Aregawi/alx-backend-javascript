/**
 * @module 2-calcul_chai.test
 */
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('Check for addition of two integer numbers', () => {
    expect(calculateNumber('SUM', 1, 2)).to.equal(3);
  });
  it('Check for addition of two float numbers a.b where b < 5', () => {
    expect(calculateNumber('SUM', 1.2, 2.4)).to.equal(3);
  });
  it('Check for addition of two float numbers a.b where b >= 5', () => {
    expect(calculateNumber('SUM', 1.8, 2.8)).to.equal(5);
  });
  it('Check for addition of two float numbers a.b where b = 5', () => {
    expect(calculateNumber('SUM', 1.5, 2.5)).to.equal(5);
  });
  it('Check for subtraction of two integer numbers', () => {
    expect(calculateNumber('SUBTRACT', 1, 2)).to.equal(-1);
  });
  it('Check for subtraction of two float numbers a.b where b < 5', () => {
    expect(calculateNumber('SUBTRACT', 1.2, 2.2)).to.equal(-1);
  });
  it('Check for subtraction of two float numbers a.b where b >= 5', () => {
    expect(calculateNumber('SUBTRACT', 1.8, 2.8)).to.equal(-1);
  });
  it('Check for subtraction of two float numbers a.b where b = 5', () => {
    expect(calculateNumber('SUBTRACT', 1.5, 2.5)).to.equal(-1);
  });
  it('Check for division of two integer numbers', () => {
    expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
  });
  it('Check for division of two float numbers a.b where b < 5', () => {
    expect(calculateNumber('DIVIDE', 1.2, 2.2)).to.equal(0.5);
  });
  it('Check for division of two float numbers a.b where b >= 5', () => {
    expect(calculateNumber('DIVIDE', 1.8, 3.8)).to.equal(0.5);
  });
  it('Check for division of two float numbers a.b where b = 5', () => {
    expect(calculateNumber('DIVIDE', 1.5, 3.5)).to.equal(0.5);
  });
  it('Check for zero division error', () => {
    expect(calculateNumber('DIVIDE', 1.5, 0.3)).to.be.a('string');
    expect(calculateNumber('DIVIDE', 1.5, 0.3)).to.equal('Error');
  });
});
