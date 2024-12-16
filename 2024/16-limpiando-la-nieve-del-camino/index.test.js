const removeSnow = require('./index');

describe('16 => Limpiando-la-nieve-del-camino', () => {
  const TEST_CASES = [
    {
      input: 'abbaca',
      output: 'ca',
    },
    {
      input: 'azxxzy',
      output: 'ay',
    },
    {
      input: 'aabccba',
      output: 'a',
    },
    {
      input: 'aaabbaacc',
      output: 'a',
    },
    {
      input: 'xyzzy',
      output: 'x',
    },
    {
      input: 'abbacddce',
      output: 'e',
    },
    {
      input: '',
      output: '',
    },
    {
      input: 'a',
      output: 'a',
    },
    {
      input: 'aa',
      output: '',
    },
    {
      input: 'ab',
      output: 'ab',
    },
    {
      input: 'abc',
      output: 'abc',
    },
  ];

  it('should return string type', () => {
    const testCase = TEST_CASES[0];
    const result = removeSnow(testCase.input);
    expect(typeof result).toBe('string');
  });

  it.each(TEST_CASES)('should return $output', ({ input, output }) => {
    const result = removeSnow(input);
    expect(result).toBe(output);
  });
});
