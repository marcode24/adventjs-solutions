const generateGiftSets = require('./index');

describe('22 => Genera-combinaciones-de-regalos', () => {
  const TEST_CASES = [
    {
      input: ['car'],
      output: [['car']],
    },
    {
      input: ['car', 'doll', 'puzzle'],
      output: [
        ['car'],
        ['doll'],
        ['puzzle'],
        ['car', 'doll'],
        ['car', 'puzzle'],
        ['doll', 'puzzle'],
        ['car', 'doll', 'puzzle'],
      ],
    },
    {
      input: ['car', 'doll'],
      output: [['car'], ['doll'], ['car', 'doll']],
    },
    {
      input: ['apple', 'banana', 'cherry', 'date'],
      output: [
        ['apple'],
        ['banana'],
        ['cherry'],
        ['date'],
        ['apple', 'banana'],
        ['apple', 'cherry'],
        ['apple', 'date'],
        ['banana', 'cherry'],
        ['banana', 'date'],
        ['cherry', 'date'],
        ['apple', 'banana', 'cherry'],
        ['apple', 'banana', 'date'],
        ['apple', 'cherry', 'date'],
        ['banana', 'cherry', 'date'],
        ['apple', 'banana', 'cherry', 'date'],
      ],
    },
    {
      input: ['pen', 'notebook', 'eraser', 'pencil', 'marker'],
      output: [
        ['pen'],
        ['notebook'],
        ['eraser'],
        ['pencil'],
        ['marker'],
        ['pen', 'notebook'],
        ['pen', 'eraser'],
        ['pen', 'pencil'],
        ['pen', 'marker'],
        ['notebook', 'eraser'],
        ['notebook', 'pencil'],
        ['notebook', 'marker'],
        ['eraser', 'pencil'],
        ['eraser', 'marker'],
        ['pencil', 'marker'],
        ['pen', 'notebook', 'eraser'],
        ['pen', 'notebook', 'pencil'],
        ['pen', 'notebook', 'marker'],
        ['pen', 'eraser', 'pencil'],
        ['pen', 'eraser', 'marker'],
        ['pen', 'pencil', 'marker'],
        ['notebook', 'eraser', 'pencil'],
        ['notebook', 'eraser', 'marker'],
        ['notebook', 'pencil', 'marker'],
        ['eraser', 'pencil', 'marker'],
        ['pen', 'notebook', 'eraser', 'pencil'],
        ['pen', 'notebook', 'eraser', 'marker'],
        ['pen', 'notebook', 'pencil', 'marker'],
        ['pen', 'eraser', 'pencil', 'marker'],
        ['notebook', 'eraser', 'pencil', 'marker'],
        ['pen', 'notebook', 'eraser', 'pencil', 'marker'],
      ],
    },
    {
      input: [],
      output: [],
    },
  ];

  it('should return array type', () => {
    const result = generateGiftSets(['car']);
    expect(Array.isArray(result)).toBe(true);
  });

  it.each(TEST_CASES)(
    'should return an array with $output.length elements',
    ({ input, output }) => {
      const result = generateGiftSets(input);
      expect(result).toHaveLength(output.length);
    },
  );
});
