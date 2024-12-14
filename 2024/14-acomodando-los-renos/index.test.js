const minMovesToStables = require('./index');

describe('14 => Acomodando-los-renos', () => {
  const TEST_CASES = [
    {
      input: [
        [2, 6, 9],
        [3, 8, 5],
      ],
      output: 3,
    },
    {
      input: [
        [1, 1, 3],
        [1, 4, 8],
      ],
      output: 8,
    },
    {
      input: [
        [5, 15, 10],
        [8, 18, 12],
      ],
      output: 8,
    },
    {
      input: [
        [30, 1, 2],
        [1, 2, 30],
      ],
      output: 0,
    },
    {
      input: [
        [30, 20, 10],
        [35, 25, 15],
      ],
      output: 15,
    },
    {
      input: [
        [100, 1],
        [50, 75],
      ],
      output: 74,
    },
  ];

  it('should return number type', () => {
    const testCase = TEST_CASES[0];
    const result = minMovesToStables(...testCase.input);
    expect(typeof result).toBe('number');
  });

  it.each(TEST_CASES)('should return $output', ({ input, output }) => {
    expect(minMovesToStables(...input)).toBe(output);
  });
});
