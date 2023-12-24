const findBalancedSegment = require('./index');

describe('21 => Mensaje binario', () => {
  const testCases = [
    {
      input: [1, 1, 0, 1, 1, 0, 1, 1],
      output: [2, 5],
    },
    {
      input: [1, 1, 0],
      output: [1, 2],
    },
    {
      input: [1, 1, 1],
      output: [],
    },
    {
      input: [1, 0, 1],
      output: [0, 1],
    },
    {
      input: [1, 0, 1, 0],
      output: [0, 3],
    },
    {
      input: [1, 1, 0, 1, 0, 1],
      output: [1, 4],
    },
    {
      input: [1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      output: [0, 7],
    },
    {
      input: [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1],
      output: [5, 10],
    },
  ];

  it('should return an array type', () => {
    expect(Array.isArray(findBalancedSegment(testCases[0].input))).toBe(true);
  });

  it.each(testCases)('should return $output', ({ input, output }) => {
    expect(findBalancedSegment(input)).toEqual(output);
  });
});
