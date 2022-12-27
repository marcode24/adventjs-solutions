const getFilesToBackup = require('./index');

describe('13 => Backup de archivos', () => {
  const testCases = [
    {
      input: [1546300800, [
        [2, 1546300800],
        [3, 1546301100],
        [1, 1546300800],
        [1, 1546300900],
        [1, 1546301000],
      ]],
      output: [1, 3],
      description: 'should return [1, 3]',
    },
    {
      input: [1546300800, [
        [2, 1546300800],
        [3, 1546301100],
        [1, 1546300800],
        [1, 1546300900],
        [1, 1546301000],
      ]],
      output: [1, 3],
      description: 'should return [1, 3]',
    },
    {
      input: [1556300600, [
        [1, 1546300800],
        [2, 1546300800],
        [1, 1546300900],
        [1, 1546301000],
        [3, 1546301100],
      ]],
      output: [],
      description: 'should return []',
    },
  ];

  it('should return an array type', () => {
    expect(getFilesToBackup(...testCases[0].input)).toBeInstanceOf(Array);
  });

  it.each(testCases)('$description', (testCase) => {
    expect(getFilesToBackup(...testCase.input)).toEqual(testCase.output);
  });
});
