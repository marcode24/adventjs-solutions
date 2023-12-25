const getStaircasePaths = require('./index');

describe('24 => Brincos en la escalera', () => {
  const testCases = [
    {
      input: [2, 1],
      output: [[1, 1]],
    },
    {
      input: [3, 3],
      output: [[1, 1, 1], [1, 2], [2, 1], [3]],
    },
    {
      input: [5, 1],
      output: [[1, 1, 1, 1, 1]],
    },
    {
      input: [5, 2],
      output: [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 2],
        [1, 1, 2, 1],
        [1, 2, 1, 1],
        [1, 2, 2],
        [2, 1, 1, 1],
        [2, 1, 2],
        [2, 2, 1],
      ],
    },
  ];

  it('should return an array type', () => {
    expect(Array.isArray(getStaircasePaths(...testCases[0].input))).toBe(true);
  });

  it.each(testCases)('should return the correct output', ({ input, output }) => {
    expect(getStaircasePaths(...input)).toStrictEqual(output);
  });
});
