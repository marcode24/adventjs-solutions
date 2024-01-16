const travelDistance = require('./index');

describe('25 => Calculando distancias', () => {
  const testCases = [
    {
      input: '.....1....\n..S.......\n..........\n....3.....\n......2...',
      output: 12,
    },
    {
      input: '..S.1...',
      output: 2,
    },
    {
      input: '.....2....\n..S.......\n..........\n....1.....\n......3...',
      output: 13,
    },
    {
      input: '3....1....\n..S.......\n.........2\n..........\n......4...',
      output: 31,
    },
    {
      input: 'S1',
      output: 1,
    },
    {
      input: '1....S',
      output: 5,
    },
    {
      input: 'S12....3',
      output: 7,
    },
  ];

  it('should return a number type', () => {
    expect(typeof travelDistance(testCases[0].input)).toBe('number');
  });

  it.each(testCases)('should return $output', ({ input, output }) => {
    expect(travelDistance(input)).toBe(output);
  });
});
