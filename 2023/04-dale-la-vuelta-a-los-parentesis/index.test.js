const { decode, decode2 } = require('./index');

describe('04 => Dale la vuelta a los parentesis', () => {
  const testCases = [
    {
      input: 'hola (odnum)',
      output: 'hola mundo',
    },
    {
      input: '(olleh) (dlrow)!',
      output: 'hello world!',
    },
    {
      input: 'sa(u(cla)atn)s',
      output: 'santaclaus',
    },
    {
      input: '((nta)(sa))',
      output: 'santa',
    },
  ];

  it('should return a string type', () => {
    expect(typeof decode('a')).toBe('string');
    expect(typeof decode2('a')).toBe('string');
  });

  it.each(testCases)('should return $output', ({ input, output }) => {
    expect(decode(input)).toBe(output);
    expect(decode2(input)).toBe(output);
  });
});
