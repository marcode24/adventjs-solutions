const decorateTree = require('./index');

describe('15 => Decorando el árbol', () => {
  const testCases = [
    {
      input: ['B P R P'],
      output: ['R', 'P B', 'R B B', 'B P R P'],
      description: 'should return decorated tree with 4 elements',
    },
    {
      input: ['B B'],
      output: ['B', 'B B'],
      description: 'should return decorated tree with 2 elements',
    },
    {
      input: ['B B P R P R R'],
      output: ['B', 'R P', 'B P P', 'P R B R', 'P P B B P', 'B R B B B R', 'B B P R P R R'],
      description: 'should return decorated tree with 7 elements',
    },
    {
      input: ['R R P R R P P P'],
      output: ['P', 'P P', 'P P P', 'R B R B', 'R R P B B', 'P B P P R P', 'R B B R B P P', 'R R P R R P P P'],
      description: 'should return decorated tree with 8 elements',
    },
  ];

  it('should return an array type', () => {
    expect(decorateTree('B P R P')).toBeInstanceOf(Array);
  });

  it.each(testCases)('$description', (testCase) => {
    expect(decorateTree(...testCase.input)).toEqual(testCase.output);
  });
});
