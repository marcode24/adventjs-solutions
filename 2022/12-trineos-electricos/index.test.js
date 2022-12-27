const selectSleigh = require('./index');

describe('12 => Trineos eléctricos', () => {
  const testCases = [
    {
      input: [30, [
        { name: 'Dasher', consumption: 0.3 },
        { name: 'Dancer', consumption: 0.5 },
        { name: 'Rudolph', consumption: 0.7 },
        { name: 'Midu', consumption: 1 },
      ]],
      output: 'Dancer',
      description: 'should return Dancer sleigh',
    },
    {
      input: [1, [
        { name: 'pheralb', consumption: 0.3 },
        { name: 'TMChein', consumption: 0.5 },
      ]],
      output: 'TMChein',
      description: 'should return TMChein sleigh',
    },
    {
      input: [10, [
        { name: 'Pedrosillano', consumption: 1 },
        { name: 'SamarJaffal', consumption: 5 },
      ]],
      output: 'Pedrosillano',
      description: 'should return Pedrosillano sleigh',
    },
    {
      input: [10, [
        { name: 'Pedrosillano', consumption: 1 },
        { name: 'SamarJaffal', consumption: 2 },
        { name: 'marcospage', consumption: 3 },
      ]],
      output: 'SamarJaffal',
      description: 'should return SamarJaffal sleigh',
    },
    {
      input: [50, [
        { name: 'Pedrosillano', consumption: 1 },
        { name: 'SamarJaffal', consumption: 2 },
        { name: 'marcospage', consumption: 3 },
      ]],
      output: null,
      description: 'should return null',
    },
  ];

  it('should return a string type', () => {
    expect(typeof selectSleigh(...testCases[0].input)).toBe('string');
  });

  it.each(testCases)('$description', (testCase) => {
    expect(selectSleigh(...testCase.input)).toBe(testCase.output);
  });
});
