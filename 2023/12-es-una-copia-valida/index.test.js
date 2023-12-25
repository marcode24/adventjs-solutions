const checkIsValidCopy = require('./index');

describe('12 => Es una copia valida', () => {
  const testCases = [
    {
      input: ['Santa Claus is coming', 'sa#ta Cl#us i+ comin#'],
      output: true,
    },
    {
      input: ['s#nta Cla#s is coming', 'p#nt: cla#s #s c+min#'],
      output: false,
    },
    {
      input: ['Santa Claus', 's#+:. c:. s'],
      output: true,
    },
    {
      input: ['Santa Claus', 's#+:.#c:. s'],
      output: false,
    },
    {
      input: ['s+#:.#c:. s', 's#+:.#c:. s'],
      output: false,
    },
  ];

  it('should return a boolean type', () => {
    expect(typeof checkIsValidCopy(...testCases[0].input)).toBe('boolean');
  });

  it.each(testCases)('should return $output', ({ input, output }) => {
    expect(checkIsValidCopy(...input)).toBe(output);
  });
});
