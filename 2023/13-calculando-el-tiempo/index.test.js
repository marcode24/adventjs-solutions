const calculateTime = require('./index');

describe('13 => Calculando el tiempo', () => {
  const testCases = [
    {
      input: ['00:10:00', '01:00:00', '03:30:00'],
      output: '-02:20:00',
    },
    {
      input: ['02:00:00', '05:00:00', '00:30:00'],
      output: '00:30:00',
    },
    {
      input: ['00:45:00', '00:45:00', '00:00:30', '00:00:30'],
      output: '-05:29:00',
    },
  ];

  it('should return a string type', () => {
    expect(typeof calculateTime(testCases[0].input)).toBe('string');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(calculateTime(testCase.input)).toBe(testCase.output);
  });
});
