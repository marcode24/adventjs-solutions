const isRobotBack = require('./index');

describe('13 => El-robot-esta-de-vuelta', () => {
  const TEST_CASES = [
    {
      input: 'R',
      output: [1, 0],
    },
    {
      input: 'RL',
      output: true,
    },
    {
      input: 'RLUD',
      output: true,
    },
    {
      input: '*RU',
      output: [2, 1],
    },
    {
      input: 'R*U',
      output: [1, 2],
    },
    {
      input: 'LLL!R',
      output: [-4, 0],
    },
    {
      input: 'R?R',
      output: [1, 0],
    },
    {
      input: 'U?D',
      output: true,
    },
    {
      input: 'R!L',
      output: [2, 0],
    },
    {
      input: 'U!D',
      output: [0, 2],
    },
    {
      input: 'R?L',
      output: true,
    },
    {
      input: 'U?U',
      output: [0, 1],
    },
  ];

  it('should return boolean type', () => {
    const testCase = TEST_CASES[1];
    const result = isRobotBack(testCase.input);
    const expected = testCase.output;
    expect(result).toEqual(expected);
  });

  it('should return array type', () => {
    const testCase = TEST_CASES[0];
    const result = isRobotBack(testCase.input);
    const expected = testCase.output;
    expect(result).toEqual(expected);
  });

  it.each(TEST_CASES)('should return $output', ({ input, output }) => {
    const result = isRobotBack(input);
    expect(result).toEqual(output);
  });
});
