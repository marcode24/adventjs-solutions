const carryGifts = require('./index');

describe('17 => Regalos en sacos', () => {
  const testCases = [
    {
      input: [['game', 'bike', 'book', 'toy'], 10],
      output: ['game bike', 'book toy'],
      description: 'should return 2 bags',
    },
    {
      input: [['game', 'bike', 'book', 'toy'], 7],
      output: ['game', 'bike', 'book toy'],
      description: 'should return 3 bags',
    },
    {
      input: [['game', 'bike', 'book', 'toy'], 4],
      output: ['game', 'bike', 'book', 'toy'],
      description: 'should return 4 bags',
    },
    {
      input: [['toy', 'gamme', 'toy', 'bike'], 6],
      output: ['toy', 'gamme', 'toy', 'bike'],
      description: 'should return 4 bags',
    },
    {
      input: [['toy', 'toy', 'toy', 'toy'], 2],
      output: [],
      description: 'should return a empty array',
    },
    {
      input: [['toy', 'toy', 'disk', 'disk', 'toy', 'toy'], 7],
      output: ['toy toy', 'disk', 'disk toy', 'toy'],
      description: 'should return 4 bags',
    },
  ];

  it('should return an array type', () => {
    expect(carryGifts([], 0)).toBeInstanceOf(Array);
  });

  it.each(testCases)('$description', (testCase) => {
    expect(carryGifts(...testCase.input)).toEqual(testCase.output);
  });
});
