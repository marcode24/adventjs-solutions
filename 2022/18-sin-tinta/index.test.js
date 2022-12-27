const dryNumber = require('./index');

describe('18 => Sin tinta', () => {
  const testCases = [
    {
      input: [1, 15],
      output: [1, 10, 11, 12, 13, 14, 15],
      description: 'should return an array with 7 elements',
    },
    {
      input: [2, 20],
      output: [2, 12, 20],
      description: 'should return an array with 3 elements',
    },
    {
      input: [3, 33],
      output: [3, 13, 23, 30, 31, 32, 33],
      description: 'should return an array with 7 elements',
    },
    {
      input: [4, 45],
      output: [4, 14, 24, 34, 40, 41, 42, 43, 44, 45],
      description: 'should return an array with 10 elements',
    },
    {
      input: [5, 55],
      output: [5, 15, 25, 35, 45, 50, 51, 52, 53, 54, 55],
      description: 'should return an array with 11 elements',
    },
    {
      input: [9, 8],
      output: [],
      description: 'should return an empty array',
    },
  ];

  it('should return an array type', () => {
    expect(dryNumber(1, 1)).toBeInstanceOf(Array);
  });

  it.each(testCases)('$description', (testCase) => {
    expect(dryNumber(...testCase.input)).toEqual(testCase.output);
  });
});
