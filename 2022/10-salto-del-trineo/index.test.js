const checkJump = require('./index');

describe('10 => Salto del trineo', () => {
  const testCases = [
    {
      input: [[1, 2, 1]],
      output: true,
      description: 'should return true',
    },
    {
      input: [[1, 3, 8, 5, 2]],
      output: true,
      description: 'should return true',
    },
    {
      input: [[1, 7, 3, 5]],
      output: false,
      description: 'should return false',
    },
    {
      input: [[1, 2, 3, 2, 1]],
      output: true,
      description: 'should return true',
    },
    {
      input: [[1, 2, 2, 2, 1]],
      output: true,
      description: 'should return true',
    },
    {
      input: [[0, 1, 0]],
      output: true,
      description: 'should return true',
    },
    {
      input: [[2, 2, 2, 2]],
      output: false,
      description: 'should return false',
    },
    {
      input: [[1, 2, 3]],
      output: false,
      description: 'should return false',
    },
    {
      input: [[1, 2, 3, 2, 1, 2, 3]],
      output: false,
      description: 'should return false',
    },
    {
      input: [[1, 1000, 900, 800]],
      output: true,
      description: 'should return true',
    },
    {
      input: [[1, 1000, 100, 800]],
      output: false,
      description: 'should return false',
    },
    {
      input: [[1, 1, 1, 1, 1, 1, 1, 1, 2, 1]],
      output: true,
      description: 'should return true',
    },
    {
      input: [[1, 2, 3, 1, 3, 1]],
      output: false,
      description: 'should return false',
    },
    {
      input: [[1, 3, 2, 5, 4, 3, 2, 1]],
      output: false,
      description: 'should return false',
    },
  ];

  it('should return a boolean type', () => {
    expect(typeof checkJump([])).toBe('boolean');
  });

  it.each(testCases)('$description', (testCase) => {
    expect(checkJump(...testCase.input)).toEqual(testCase.output);
  });
});
