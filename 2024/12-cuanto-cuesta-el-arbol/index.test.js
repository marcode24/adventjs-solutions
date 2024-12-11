const calculatePrice = require('./index');

describe('12 => Cuanto-cuesta-el-arbol', () => {
  const TEST_CASES = [
    {
      input: '***',
      output: 3,
    },
    {
      input: '*o',
      output: 4,
    },
    {
      input: 'o*',
      output: 6,
    },
    {
      input: '*o@',
      output: 94,
    },
    {
      input: '^#',
      output: 40,
    },
    {
      input: '*@Z',
      output: undefined,
    },
  ];

  it('should return number type', () => {
    const testCase = TEST_CASES[0];
    const result = calculatePrice(testCase.input);
    expect(typeof result).toBe('number');
  });

  it.each(TEST_CASES)('should return $output', ({ input, output }) => {
    const result = calculatePrice(input);
    expect(result).toBe(output);
  });
});
