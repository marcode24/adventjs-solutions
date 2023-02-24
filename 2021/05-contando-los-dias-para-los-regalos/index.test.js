const daysToXmas = require('./index');

describe('05 => Contando los días para los regalos', () => {
  const testCases = [
    {
      input: new Date('Dec 25, 2021'),
      output: 0,
    },
    {
      input: new Date('Dec 26, 2021'),
      output: -1,
    },
    {
      input: new Date('Dec 31, 2021'),
      output: -6,
    },
    {
      input: new Date('Jan 1, 2022 00:00:01'),
      output: -7,
    },
    {
      input: new Date('Jan 1, 2022 23:59:59'),
      output: -7,
    },
  ];

  it('should return a number type', () => {
    expect(typeof daysToXmas(new Date('Dec 25, 2021'))).toBe('number');
  });

  it.each(testCases)('should return $output', (testCase) => {
    expect(daysToXmas(testCase.input)).toBe(testCase.output);
  });
});
