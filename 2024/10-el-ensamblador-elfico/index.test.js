const compile = require('./index');

describe('10 => El-ensamblador-elfico', () => {
  const TEST_CASES = [
    {
      input: ['MOV 0 A', 'INC A'],
      output: 1,
    },
    {
      input: ['INC A', 'INC A', 'DEC A', 'MOV A B'],
      output: 1,
    },
    {
      input: ['MOV 5 B', 'DEC B', 'MOV B A', 'INC A'],
      output: 5,
    },
    {
      input: ['INC C', 'DEC B', 'MOV C Y', 'INC Y'],
      output: undefined,
    },
    {
      input: ['MOV 2 X', 'DEC X', 'DEC X', 'JMP X 1', 'MOV X A'],
      output: -2,
    },
    {
      input: ['MOV 3 C', 'DEC C', 'DEC C', 'DEC C', 'JMP C 3', 'MOV C A'],
      output: -1,
    },
  ];

  it('should return number type', () => {
    const result = compile(['MOV 0 A', 'INC A']);
    expect(typeof result).toBe('number');
  });

  it.each(TEST_CASES)('should return $output', ({ input, output }) => {
    const result = compile(input);
    expect(result).toBe(output);
  });
});
