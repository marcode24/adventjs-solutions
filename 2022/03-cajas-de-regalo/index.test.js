const distributeGifts = require('./index');

describe('03 => Cajas de regalo', () => {
  const testCases = [
    {
      input: [['book', 'doll', 'ball'], ['dasher', 'dancer']],
      output: 2,
      description: 'should return 2',
    },
    {
      input: [['a', 'b', 'c'], ['d', 'e']],
      output: 1,
      description: 'should return 1',
    },
    {
      input: [['videogames', 'console'], ['midu']],
      output: 0,
      description: 'should return 0',
    },
    {
      input: [
        ['game', 'videoconsole', 'computer'],
        [
          'midudev',
          'pheralb',
          'codingwithdani',
          'carlosble',
          'blasco',
          'facundocapua',
          'madeval',
          'memxd',
        ],
      ],
      output: 5,
      description: 'should return 5',
    },
    {
      input: [
        ['music'],
        [
          'midudev',
          'pheralb',
          'codingwithdani',
          'carlosble',
          'blasco',
          'facundocapua',
          'madeval',
          'memxd',
        ],
      ],
      output: 26,
      description: 'should return 26',
    },
  ];

  it('should return a number type', () => {
    expect(typeof distributeGifts([], [])).toBe('number');
  });

  it.each(testCases)('$description', (testCase) => {
    expect(distributeGifts(...testCase.input)).toEqual(testCase.output);
  });
});
