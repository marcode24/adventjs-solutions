const getOptimalPath = require('./index');

describe('14 => Mejor camino', () => {
  const testCases = [
    {
      input: [[0], [2, 3]],
      output: 2,
      description: 'should return 2',
    },
    {
      input: [[0], [3, 4], [9, 8, 1]],
      output: 5,
      description: 'should return 5',
    },
    {
      input: [[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]],
      output: 8,
      description: 'should return 8',
    },
    {
      input: [[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]],
      output: 7,
      description: 'should return 7',
    },
    {
      input: [[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1], [1, 1, 1, 1, 1, 1]],
      output: 8,
      description: 'should return 8',
    },
  ];

  it('should return a number type', () => {
    expect(typeof getOptimalPath(testCases[0].input)).toBe('number');
  });

  it.each(testCases)('$description', (testCase) => {
    expect(getOptimalPath(testCase.input)).toEqual(testCase.output);
  });
});
