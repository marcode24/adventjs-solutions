const moveTrain = require('./index');

describe('09 => El-tren-magico', () => {
  const TEST_CASES = [
    {
      input: [['·····', '··*··', '··@··', '··o··', '··o··'], 'U'],
      output: 'eat',
    },
    {
      input: [['·····', '··*··', '··@··', '··o··', '··o··'], 'D'],
      output: 'crash',
    },
    {
      input: [['·····', '··*··', '··@··', '··o··', '··o··'], 'R'],
      output: 'none',
    },
    {
      input: [['··@··', '··o··', '·*o··', '··o··', '··o··'], 'U'],
      output: 'crash',
    },
    {
      input: [['··@··', '··o··', '·*o··', '··o··', '··o··'], 'L'],
      output: 'none',
    },
    {
      input: [['·····', '··@··', '··*··', '·····', '·····'], 'D'],
      output: 'eat',
    },
  ];

  it('should return string type', () => {
    const testCase = TEST_CASES[0];
    const result = moveTrain(...testCase.input);
    expect(typeof result).toBe('string');
  });

  it.each(TEST_CASES)('should return $output', ({ input, output }) => {
    expect(moveTrain(...input)).toBe(output);
  });
});
