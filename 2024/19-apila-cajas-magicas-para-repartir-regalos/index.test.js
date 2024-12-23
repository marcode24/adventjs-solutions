/* eslint-disable operator-linebreak */
const distributeWeight = require('./index');

describe('19 => Apila-cajas-magicas-para-repartir-regalos', () => {
  const TEST_CASES = [
    {
      input: 1,
      output: ' _ \n|_|',
    },
    {
      input: 2,
      output: ' ___ \n|___|',
    },
    {
      input: 3,
      output: ' _ \n|_|_\n|___|',
    },
    {
      input: 4,
      output: ' ___ \n|___|\n|___|',
    },
    {
      input: 5,
      output: ' _____ \n|     |\n|_____|',
    },
    {
      input: 6,
      output: ' _ \n|_|___\n|     |\n|_____|',
    },
    {
      input: 7,
      output: ' ___ \n|___|_\n|     |\n|_____|',
    },
    {
      input: 18,
      output:
        ' _ \n|_|_\n|___|_\n|     |\n|_____|___\n|         |\n|_________|',
    },
    {
      input: 121,
      output:
        ' _ \n|_|_______\n|         |\n|_________|\n|         |\n|_________|\n|         |\n|_________|' +
        '\n|         |\n|_________|\n|         |\n|_________|\n|         |\n|_________|\n|         |\n' +
        '|_________|\n|         |\n|_________|\n|         |\n|_________|\n|         |\n|_________|\n' +
        '|         |\n|_________|\n|         |\n|_________|',
    },
  ];

  it('should return string type', () => {
    const testCase = TEST_CASES[0];
    const { input } = testCase;
    const result = distributeWeight(input);
    expect(typeof result).toBe('string');
  });

  it.each(TEST_CASES)('should return expected output', (testCase) => {
    const { input, output } = testCase;
    const result = distributeWeight(input);
    expect(result).toBe(output);
  });
});
