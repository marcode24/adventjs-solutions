const decodeNumbers = require('./index');

describe('16 => Descifrando los numeros', () => {
  const testCases = [
    {
      input: '...',
      output: 3,
    },
    {
      input: '.,',
      output: 4,
    },
    {
      input: ',.',
      output: 6,
    },
    {
      input: ',...',
      output: 8,
    },
    {
      input: '.........!',
      output: 107,
    },
    {
      input: '.;',
      output: 49,
    },
    {
      input: '..,',
      output: 5,
    },
    {
      input: '..,!',
      output: 95,
    },
    {
      input: '.;!',
      output: 49,
    },
    {
      input: '!!!',
      output: 300,
    },
    {
      input: ';!',
      output: 50,
    },
    {
      input: ';.W',
      output: NaN,
    },
  ];

  it('should return a number type', () => {
    expect(typeof decodeNumbers('...')).toBe('number');
  });

  it.each(testCases)('should return $output when input is $input', ({ input, output }) => {
    expect(decodeNumbers(input)).toBe(output);
  });
});
