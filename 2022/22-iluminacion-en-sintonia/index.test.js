const checkStepNumbers = require('./index');

describe('22 => Iluminación en sintonía', () => {
  const testCases = [
    {
      input: [['tree_1', 'tree_2', 'house', 'tree_1', 'tree_2', 'house'],
        [1, 33, 10, 2, 44, 20]],
      output: true,
      description: 'should return true',
    },
    {
      input: [['tree_1', 'tree_1', 'house'], [2, 1, 10]],
      output: false,
      description: 'should return false',
    },
    {
      input: [['tree_1', 'tree_1', 'house'], [1, 2, 10]],
      output: true,
      description: 'should return true',
    },
    {
      input: [['house', 'house', 'tree_1', 'tree_1', 'house', 'tree_2', 'tree_2', 'tree_3'], [5, 2, 1, 2, 3, 4, 5, 6]],
      output: false,
      description: 'should return false',
    },
  ];

  it('should return a boolean type', () => {
    expect(typeof checkStepNumbers(...testCases[0].input)).toBe('boolean');
  });

  it.each(testCases)('$description', (testCase) => {
    expect(checkStepNumbers(...testCase.input)).toBe(testCase.output);
  });
});
