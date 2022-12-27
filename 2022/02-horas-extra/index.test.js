const countHours = require('./index');

describe('02 => Horas extra', () => {
  const testCases = [
    {
      input: [2022, ['01/06', '04/01', '12/25']],
      output: 4,
      description: 'should return 4 hours',
    },
    {
      input: [2023, ['01/06', '04/01', '12/25']],
      output: 4,
      description: 'should return 4 hours',
    },
    {
      input: [
        1985,
        [
          '01/01',
          '01/06',
          '02/02',
          '02/17',
          '02/28',
          '06/03',
          '12/06',
          '12/25',
        ],
      ],
      output: 10,
      description: 'should return 10 hours',
    },
    {
      input: [2000, ['01/01']],
      output: 0,
      description: 'should return 0 hours',
    },
  ];

  it('should return a number type', () => {
    expect(typeof countHours(2022, [])).toBe('number');
  });

  it.each(testCases)('$description', (testCase) => {
    expect(countHours(...testCase.input)).toEqual(testCase.output);
  });
});
