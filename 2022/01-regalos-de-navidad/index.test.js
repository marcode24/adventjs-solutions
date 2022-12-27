const wrapping = require('./index');

describe('01 => Regalos de Navidad', () => {
  const testCases = [
    {
      input: ['cat', 'game', 'socks'],
      output: ['*****\n*cat*\n*****', '******\n*game*\n******', '*******\n*socks*\n*******'],
      description: 'should return wrapped gifts with 3 elements',
    },
    {
      input: ['cat', 'game', 'socks', 'bike'],
      output: ['*****\n*cat*\n*****', '******\n*game*\n******', '*******\n*socks*\n*******', '******\n*bike*\n******'],
      description: 'should return wrapped gifts with 4 elements',
    },
    {
      input: ['midu'],
      output: ['******\n*midu*\n******'],
      description: 'should return wrapped gifts with 1 element',
    },
    {
      input: ['a'],
      output: ['***\n*a*\n***'],
      description: 'should return wrapped gifts with 1 element',
    },
    {
      input: [],
      output: [],
      description: 'should return a empty array',
    },
  ];

  it('should return an array type', () => {
    expect(wrapping([])).toBeInstanceOf(Array);
  });

  it.each(testCases)('$description', (testCase) => {
    expect(wrapping(testCase.input)).toEqual(testCase.output);
  });
});
