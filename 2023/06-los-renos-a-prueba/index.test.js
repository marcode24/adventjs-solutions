const {
  maxDistance1, maxDistance2, maxDistance3, maxDistance4,
} = require('./index');

describe('06 => Los renos a prueba', () => {
  const testCases = [
    {
      input: '>>*<',
      output: 2,
    },
    {
      input: '<<<<<',
      output: 5,
    },
    {
      input: '>***>',
      output: 5,
    },
    {
      input: '**********',
      output: 10,
    },
  ];

  it('should return a number type', () => {
    expect(typeof maxDistance1('')).toBe('number');
    expect(typeof maxDistance2('')).toBe('number');
    expect(typeof maxDistance3('')).toBe('number');
    expect(typeof maxDistance4('')).toBe('number');
  });

  it.each(testCases)('should return $output', ({ input, output }) => {
    expect(maxDistance1(input)).toBe(output);
    expect(maxDistance2(input)).toBe(output);
    expect(maxDistance3(input)).toBe(output);
    expect(maxDistance4(input)).toBe(output);
  });
});
