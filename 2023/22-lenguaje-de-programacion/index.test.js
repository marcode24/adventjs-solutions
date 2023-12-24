const compile = require('./index');

describe('22 => Lenguaje de programacion', () => {
  const testCases = [
    {
      input: '++*-',
      output: 3,
    },
    {
      input: '++%++<',
      output: 6,
    },
    {
      input: '++<--',
      output: 0,
    },
    {
      input: '++¿+?',
      output: 3,
    },
    {
      input: '--¿+++?',
      output: -2,
    },
  ];

  it('should return a number type', () => {
    expect(typeof compile(testCases[0].input)).toBe('number');
  });

  it.each(testCases)('should return $output when input is $input', ({ input, output }) => {
    expect(compile(input)).toBe(output);
  });
});
