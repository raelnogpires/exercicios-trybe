const sum = require('./sum');

describe('The function sum', () => {
  it ('Adds 4 + 5 to equal 9', () => {
    expect ( sum(4, 5) ).toEqual(9);
  });
  it ('Adds 0 + 0 to equal 0', () => {
    expect ( sum(0, 0) ).toEqual(0);
  });
  it ('Throws an error when one parameter is a string', () => {
    expect ( () => sum(4, '5') ).toThrowError(new Error('parameters must be numbers'));
  });
});
