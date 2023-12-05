const findNaughtyStep = require('./index');

describe('03 => El elfo travieso', () => {
  const testCases = [
    {
      input: ['abcd', 'abcde'],
      output: 'e',
    },
    {
      input: ['abcde', 'abcd'],
      output: 'e',
    },
    {
      input: ['xxxx', 'xxoxx'],
      output: 'o',
    },
    {
      input: ['stepfor', 'stepor'],
      output: 'f',
    },
    {
      input: ['iiiii', 'iiiii'],
      output: '',
    },
  ];

  it('should return a string type', () => {
    expect(typeof findNaughtyStep('a', 'a')).toBe('string');
  });

  it.each(testCases)('should return $output', ({ input, output }) => {
    expect(findNaughtyStep(...input)).toBe(output);
  });
});
