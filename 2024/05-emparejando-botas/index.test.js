const organizeShoes = require('./index');

describe('05 => Emparejando-botas', () => {
  const testCases = [
    {
      input: [
        { type: 'I', size: 38 },
        { type: 'R', size: 38 },
        { type: 'R', size: 42 },
        { type: 'I', size: 41 },
        { type: 'I', size: 42 },
      ],
      output: [38, 42],
    },
    {
      input: [
        { type: 'I', size: 38 },
        { type: 'R', size: 38 },
        { type: 'I', size: 38 },
        { type: 'I', size: 38 },
        { type: 'R', size: 38 },
      ],
      output: [38, 38],
    },
    {
      input: [
        { type: 'I', size: 38 },
        { type: 'R', size: 36 },
        { type: 'R', size: 42 },
        { type: 'I', size: 41 },
        { type: 'I', size: 42 },
      ],
      output: [42],
    },
    {
      input: [
        { type: 'I', size: 40 },
        { type: 'R', size: 40 },
        { type: 'I', size: 40 },
        { type: 'R', size: 40 },
      ],
      output: [40, 40],
    },
    {
      input: [
        { type: 'I', size: 39 },
        { type: 'R', size: 39 },
        { type: 'R', size: 39 },
      ],
      output: [39],
    },
  ];

  it('should return an array', () => {
    const result = organizeShoes([]);
    expect(result).toBeInstanceOf(Array);
  });

  it.each(testCases)('should return $output', ({ input, output }) => {
    const result = organizeShoes(input);
    expect(result).toEqual(output);
  });
});
