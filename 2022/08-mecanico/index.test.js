const checkPart = require('./index');

describe('08 => Mecánico', () => {
  const testCases = [
    {
      input: ['zzzoonzzz'],
      output: true,
      description: 'should return true',
    },
    {
      input: ['uwu'],
      output: true,
      description: 'should return true',
    },
    {
      input: ['midu'],
      output: false,
      description: 'should return false',
    },
    {
      input: ['lolol'],
      output: true,
      description: 'should return true',
    },
    {
      input: ['yolooloy'],
      output: true,
      description: 'should return true',
    },
  ];

  it('should return a boolean type', () => {
    expect(typeof checkPart('zzzoonzzz')).toBe('boolean');
  });

  it.each(testCases)('$description', (testCase) => {
    expect(checkPart(...testCase.input)).toEqual(testCase.output);
  });
});
