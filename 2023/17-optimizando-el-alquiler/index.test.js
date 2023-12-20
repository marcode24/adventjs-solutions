const optimizeIntervals = require('./index');

describe('17 => Optimizando el alquiler', () => {
  const testCases = [
    {
      input: [
        [5, 8],
        [2, 7],
        [3, 4],
      ],
      output: [[2, 8]],
    },
    {
      input: [
        [1, 3],
        [8, 10],
        [2, 6],
      ],
      output: [[1, 6], [8, 10]],
    },
    {
      input: [
        [3, 4],
        [1, 2],
        [5, 6],
      ],
      output: [[1, 2], [3, 4], [5, 6]],
    },
  ];

  it('should return an array type', () => {
    expect(Array.isArray(optimizeIntervals([...testCases[0].input]))).toBe(true);
  });

  it.each(testCases)('should return the correct output', (testCase) => {
    expect(optimizeIntervals([...testCase.input])).toEqual(testCase.output);
  });
});
