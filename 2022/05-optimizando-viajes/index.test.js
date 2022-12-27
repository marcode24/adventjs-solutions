const getMaxGifts = require('./index');

describe('05 => Optimizando viajes de Santa', () => {
  const testCases = [
    {
      input: [[12, 3, 11, 5, 7], 20, 3],
      output: 20,
      description: 'should return 20',
    },
    {
      input: [[50], 15, 1],
      output: 0,
      description: 'should return 0',
    },
    {
      input: [[50], 100, 1],
      output: 50,
      description: 'should return 50',
    },
    {
      input: [[50, 70], 100, 1],
      output: 70,
      description: 'should return 70',
    },
    {
      input: [[50, 70, 30], 100, 2],
      output: 100,
      description: 'should return 100',
    },
    {
      input: [[50, 70, 30], 100, 3],
      output: 100,
      description: 'should return 100',
    },
    {
      input: [[50, 10, 40, 1000, 500, 200], 199, 4],
      output: 100,
      description: 'should return 100',
    },
    {
      input: [[50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000],
      output: 115,
      description: 'should return 115',
    },
  ];

  it('should return a number type', () => {
    expect(typeof getMaxGifts([50], 100, 1)).toBe('number');
  });

  it.each(testCases)('$description', (testCase) => {
    expect(getMaxGifts(...testCase.input)).toBe(testCase.output);
  });
});
