const findMissingNumbers = require('./index');

describe('23 => Encuentra-los-numeros-perdidos', () => {
  const TEST_CASES = [
    {
      input: [1, 2, 4, 6],
      output: [3, 5],
    },
    {
      input: [4, 8, 7, 2],
      output: [1, 3, 5, 6],
    },
    {
      input: [3, 2, 1, 1],
      output: [],
    },
    {
      input: [5, 5, 5, 3, 3, 2, 1],
      output: [4],
    },
    {
      input: [1, 2, 3, 4, 5],
      output: [],
    },
  ];

  it('should return an array', () => {
    const result = findMissingNumbers([1, 2, 4, 6]);
    expect(Array.isArray(result)).toBe(true);
  });

  it.each(TEST_CASES)(
    'should return the missing numbers',
    ({ input, output }) => {
      const result = findMissingNumbers(input);
      expect(result).toEqual(output);
    },
  );
});
