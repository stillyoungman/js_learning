/* eslint-disable no-undef */
const { expect } = require('chai');
const func = require('../mapFilterReduce');

const faliedValueMessage = (value) => `incorrect for ${JSON.stringify(value)}`;

describe("MapFilterReduce's task test:", () => {
  it('should return correct value', () => {
    let value = [2];
    expect(func(value)).to.equal(4, faliedValueMessage(value));

    value = [0];
    expect(func(value)).to.equal(0, faliedValueMessage(value));

    value = [3, 5, 2, '4', 'invalid_number', 3];
    expect(func([3, 5, 2, '4', 'invalid_number', 3])).to.equal(34, faliedValueMessage(value));
  });
});
