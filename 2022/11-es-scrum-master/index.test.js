const getCompleted = require('./index');

describe('11 => Es Scrum Master', () => {
  const testCases = [
    {
      input: ['01:00:00', '03:00:00'],
      output: '1/3',
      description: 'should return 1/3',
    },
    {
      input: ['02:00:00', '04:00:00'],
      output: '1/2',
      description: 'should return 1/2',
    },
    {
      input: ['01:00:00', '01:00:00'],
      output: '1/1',
      description: 'should return 1/1',
    },
    {
      input: ['00:10:00', '01:00:00'],
      output: '1/6',
      description: 'should return 1/6',
    },
    {
      input: ['01:10:10', '03:30:30'],
      output: '1/3',
      description: 'should return 1/3',
    },
    {
      input: ['03:30:30', '05:50:50'],
      output: '3/5',
      description: 'should return 3/5',
    },
  ];

  it('should return a string type', () => {
    expect(typeof getCompleted('01:00:00', '03:00:00')).toBe('string');
  });

  it.each(testCases)('$description', (testCase) => {
    expect(getCompleted(...testCase.input)).toEqual(testCase.output);
  });
});
