const adjustLights = require('./index');

describe('09 => Alterna las luces', () => {
  const testCases = [
    {
      input: ['🟢', '🔴', '🟢', '🟢', '🟢'],
      output: 1,
    },
    {
      input: ['🔴', '🔴', '🟢', '🟢', '🔴'],
      output: 2,
    },
    {
      input: ['🟢', '🔴', '🟢', '🔴', '🟢'],
      output: 0,
    },
    {
      input: ['🔴', '🔴', '🔴'],
      output: 1,
    },
  ];

  it('should return number type', () => {
    expect(typeof adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])).toBe('number');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(adjustLights(testCase.input)).toBe(testCase.output);
  });
});
