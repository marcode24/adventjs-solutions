const detectBombs = require('./index');

describe('17 => Busca-las-bombas-del-grinch', () => {
  const TEST_CASES = [
    {
      input: [
        [true, false, false],
        [false, true, false],
        [false, false, false],
      ],
      output: [
        [1, 2, 1],
        [2, 1, 1],
        [1, 1, 1],
      ],
    },
    {
      input: [
        [false, true, false],
        [true, false, true],
        [false, true, false],
      ],
      output: [
        [2, 2, 2],
        [2, 4, 2],
        [2, 2, 2],
      ],
    },
    {
      input: [
        [true, true],
        [true, true],
        [false, false],
      ],
      output: [
        [3, 3],
        [3, 3],
        [2, 2],
      ],
    },
    {
      input: [
        [true, true],
        [true, true],
      ],
      output: [
        [3, 3],
        [3, 3],
      ],
    },
    {
      input: [
        [false, false, false],
        [false, true, false],
        [false, false, false],
      ],
      output: [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ],
    },
    {
      input: [
        [true, false],
        [false, false],
      ],
      output: [
        [0, 1],
        [1, 1],
      ],
    },
  ];

  it('should return array type', () => {
    const testCase = TEST_CASES[0];
    const result = detectBombs(testCase.input);
    expect(Array.isArray(result)).toBe(true);
  });

  it.each(TEST_CASES)('should return expected result', (testCase) => {
    const result = detectBombs(testCase.input);
    expect(result).toEqual(testCase.output);
  });
});
