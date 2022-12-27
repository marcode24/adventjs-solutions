const executeCommands = require('./index');

describe('23 => Compilador de Papa Noel', () => {
  const testCases = [
    {
      input: [
        'MOV 5,V00',
        'MOV 10,V01',
        'DEC V00',
        'ADD V00,V01',
      ],
      output: [14, 10, 0, 0, 0, 0, 0, 0],
    },
    {
      input: [
        'MOV 255,V00',
        'INC V00',
        'DEC V01',
        'DEC V01',
      ],
      output: [0, 254, 0, 0, 0, 0, 0, 0],
    },
    {
      input: [
        'MOV 10,V00',
        'DEC V00',
        'INC V01',
        'JMP 1',
        'INC V06',
      ],
      output: [0, 10, 0, 0, 0, 0, 1, 0],
    },
    {
      input: [
        'MOV 10,V00',
        'MOV V00,V01',
        'MOV V01,V02',
        'MOV V02,V03',
        'MOV V03,V04',
      ],
      output: [10, 10, 10, 10, 10, 0, 0, 0],
    },
  ];

  it('should return an array type', () => {
    const result = executeCommands(testCases[0].input);
    expect(Array.isArray(result)).toBe(true);
  });

  it.each(testCases)('should return the correct result', (testCase) => {
    const result = executeCommands(testCase.input);
    expect(result).toEqual(testCase.output);
  });
});
