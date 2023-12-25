const distributeGifts = require('./index');

describe('20 => Distribuye el peso', () => {
  const testCases = [
    {
      input: [
        [4, 5, 1],
        [6, null, 3],
        [8, null, 4],
      ],
      output: [
        [5, 3, 3],
        [6, 5, 3],
        [7, 6, 4],
      ],
    },
    {
      input: [
        [2, null],
        [null, 3],
      ],
      output: [
        [2, 3],
        [3, 3],
      ],
    },
    {
      input: [
        [2, 1, 1],
        [3, 4, null],
      ],
      output: [
        [2, 2, 1],
        [3, 3, 3],
      ],
    },
    {
      input: [
        [null, 5],
        [3, null],
      ],
      output: [
        [4, 5],
        [3, 4],
      ],
    },
    {
      input: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      output: [
        [2, 3, 4],
        [4, 5, 6],
        [6, 7, 8],
      ],
    },
    {
      input: [
        [null, 1, null, 1, null],
        [1, null, 1, null, 1],
      ],
      output: [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
      ],
    },
  ];

  it('should return an array', () => {
    expect(Array.isArray(distributeGifts(...testCases[0].input))).toBe(true);
  });

  it.each(testCases)('should return the correct output', (testCase) => {
    expect(distributeGifts(testCase.input)).toStrictEqual(testCase.output);
  });
});
