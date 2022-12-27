const countTime = require('./index');

describe('09 => Locas luces', () => {
  const testCases = [
    {
      input: [[0, 1, 1, 0, 1]],
      output: 7,
      description: 'should return 7',
    },
    {
      input: [[0, 0, 0, 1]],
      output: 21,
      description: 'should return 21',
    },
    {
      input: [[0, 0, 1, 0, 0]],
      output: 28,
      description: 'should return 28',
    },
    {
      input: [[1, 0, 0, 1, 0, 0]],
      output: 14,
      description: 'should return 14',
    },
    {
      input: [[1, 1, 0, 0, 0, 0]],
      output: 28,
      description: 'should return 28',
    },
    {
      input: [[1, 1, 1]],
      output: 0,
      description: 'should return 0',
    },
  ];

  it('should return a number type', () => {
    expect(typeof countTime([])).toBe('number');
  });

  it.each(testCases)('$description', (testCase) => {
    expect(countTime(...testCase.input)).toEqual(testCase.output);
  });
});
