const drawRace = require('./index');

describe('08 => La-carrera-de-renos', () => {
  const TEST_CASES = [
    {
      input: [[0, 5, -3], 10],
      output: '  ~~~~~~~~~~ /1\n ~~~~~r~~~~ /2\n~~~~~~~r~~ /3',
    },
    {
      input: [[2, -1, 0, 5], 8],
      output: '   ~~r~~~~~ /1\n  ~~~~~~~r /2\n ~~~~~~~~ /3\n~~~~~r~~ /4',
    },
    {
      input: [[3, 7, -2], 12],
      output: '  ~~~r~~~~~~~~ /1\n ~~~~~~~r~~~~ /2\n~~~~~~~~~~r~ /3',
    },
    {
      input: [[0, 0, 0], 6],
      output: '  ~~~~~~ /1\n ~~~~~~ /2\n~~~~~~ /3',
    },
    {
      input: [[5, 3, -4], 9],
      output: '  ~~~~~r~~~ /1\n ~~~r~~~~~ /2\n~~~~~r~~~ /3',
    },
  ];

  it('should return string type', () => {
    const result = drawRace(...TEST_CASES[0].input);
    expect(typeof result).toBe('string');
  });

  it.each(TEST_CASES)('should return expected output', (testCase) => {
    const result = drawRace(...testCase.input);
    expect(result).toBe(testCase.output);
  });
});
