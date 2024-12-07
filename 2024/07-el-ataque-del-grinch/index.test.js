const fixPackages = require('./index');

describe('07 => El-ataque-del-grinch', () => {
  const TEST_CASES = [
    {
      input: 'a(bc)de',
      output: 'acbde',
    },
    {
      input: 'a(bc(def)g)h',
      output: 'agdefcbh',
    },
    {
      input: 'abc(def(gh)i)jk',
      output: 'abcighfedjk',
    },
    {
      input: 'a(b(c))e',
      output: 'acbe',
    },
    {
      input: 'a(b(cd(efg)))h',
      output: 'acdgfebh',
    },
    {
      input: '(abc(def(ghi)))',
      output: 'defihgcba',
    },
  ];

  it('should return string type', () => {
    const testCase = TEST_CASES[0];
    expect(typeof fixPackages(testCase.input)).toBe('string');
  });

  it.each(TEST_CASES)('should return $output', ({ input, output }) => {
    expect(fixPackages(input)).toBe(output);
  });
});
