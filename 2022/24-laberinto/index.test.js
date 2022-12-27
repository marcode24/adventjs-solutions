const canExit = require('./index');

describe('24 => El último reto es un laberinto', () => {
  const testCases = [
    {
      input: [
        [' ', ' ', 'W', ' ', 'S'],
        [' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', ' '],
        ['W', 'W', ' ', 'W', 'W'],
        [' ', ' ', ' ', ' ', 'E'],
      ],
      output: true,
      description: 'should return true',
    },
    {
      input: [
        [' ', ' ', 'W', 'W', 'S'],
        [' ', ' ', ' ', 'W', ' '],
        [' ', ' ', ' ', 'W', ' '],
        ['W', 'W', ' ', 'W', 'W'],
        [' ', ' ', ' ', ' ', 'E'],
      ],
      output: false,
      description: 'should return false',
    },
    {
      input: [
        [' ', ' ', 'W', 'W', 'S'],
        [' ', ' ', ' ', 'W', ' '],
        [' ', ' ', ' ', 'W', ' '],
        ['W', 'W', ' ', ' ', 'W'],
        [' ', ' ', ' ', ' ', 'E'],
      ],
      output: false,
      description: 'should return false',
    },
    {
      input: [
        ['E', ' ', ' ', ' ', 'S'],
      ],
      output: true,
      description: 'should return true',
    },
    {
      input: [
        ['E', ' ', 'W', ' ', 'S'],
      ],
      output: false,
      description: 'should return false',
    },
    {
      input: [
        ['E', ' ', 'W', ' ', 'S'],
        [' ', ' ', ' ', ' ', ' '],
      ],
      output: true,
      description: 'should return true',
    },
    {
      input: [
        ['E', ' ', 'W', ' ', 'S'],
        [' ', ' ', ' ', ' ', ' '],
        ['W', 'W', 'W', 'W', 'W'],
      ],
      output: true,
      description: 'should return true',
    },
    {
      input: [
        ['E', ' ', 'W', ' ', 'S'],
        [' ', ' ', 'W', ' ', ' '],
        ['W', 'W', 'W', 'W', 'W'],
      ],
      output: false,
      description: 'should return false',
    },
    {
      input: [
        ['E', 'S', 'W', 'W', 'W'],
        ['W', 'W', 'W', 'W', 'W'],
        ['W', 'W', 'W', 'W', 'W'],
      ],
      output: true,
      description: 'should return true',
    },
  ];

  it('should return a boolean type', () => {
    expect(typeof canExit(testCases[0].input)).toBe('boolean');
  });

  it.each(testCases)('$description', (testCase) => {
    expect(canExit(testCase.input)).toBe(testCase.output);
  });
});
