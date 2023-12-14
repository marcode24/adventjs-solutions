const maxGifts = require('./index');

describe('14 => Evita la alarma', () => {
  const testCases = [
    {
      input: [2, 4, 2],
      output: 4,
    },
    {
      input: [5, 1, 1, 5],
      output: 10,
    },
    {
      input: [4, 1, 1, 4, 2, 1],
      output: 9,
    },
    {
      input: [1, 3, 1, 3, 100],
      output: 103,
    },
  ];

  it('should return a number type', () => {
    expect(typeof maxGifts([1, 2, 3])).toBe('number');
  });

  it.each(testCases)('should return $output', ({ input, output }) => {
    expect(maxGifts(input)).toBe(output);
  });
});
