const execute = require('./index');

describe('25 => Ejecuta-el-lenguaje-magico', () => {
  const TEST_CASES = [
    {
      input: '+++',
      output: 3,
    },
    {
      input: '+--',
      output: -1,
    },
    {
      input: '>+++[-]',
      output: 0,
    },
    {
      input: '>>>+{++}',
      output: 3,
    },
    {
      input: '+{[-]+}',
      output: 1,
    },
    {
      input: '-[+>]++',
      output: 2,
    },
    {
      input: '-[+{++}]++{[-]}++',
      output: 2,
    },
    {
      input: '{+}{+}{+}',
      output: 0,
    },
    {
      input: '',
      output: 0,
    },
    {
      input: '+++{[-]+++[-]+}',
      output: 1,
    },
    {
      input: '{>++>++}',
      output: 0,
    },
    {
      input: '++++[-->]>++',
      output: 2,
    },
  ];

  it('should return a number', () => {
    const result = execute('+++');
    expect(typeof result).toBe('number');
  });

  it.each(TEST_CASES)('should return $output', ({ input, output }) => {
    const result = execute(input);
    expect(result).toBe(output);
  });
});
