const createChristmasTree = require('./index');

describe('10 => Crea tu propio arbol de navidad', () => {
  const testCases = [
    {
      input: ['x', 3],
      output: '  x\n x x\nx x x\n  |\n',
    },
    {
      input: ['xo', 4],
      output: '   x\n  o x\n o x o\nx o x o\n   |\n',
    },
    {
      input: ['123', 5],
      output: '    1\n   2 3\n  1 2 3\n 1 2 3 1\n2 3 1 2 3\n    |\n',
    },
    {
      input: ['*@o', 3],
      output: '  *\n @ o\n* @ o\n  |\n',
    },
  ];

  it('should return a string type', () => {
    expect(typeof createChristmasTree('x', 3)).toBe('string');
  });

  it.each(testCases)('should return the correct output', (testCase) => {
    expect(createChristmasTree(...testCase.input)).toBe(testCase.output);
  });
});
