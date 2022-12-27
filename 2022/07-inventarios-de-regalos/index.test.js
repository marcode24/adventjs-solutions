const getGiftsToRefill = require('./index');

describe('07 => Inventarios de regalos', () => {
  const testCases = [
    {
      input: [
        ['bici', 'coche', 'bici', 'bici'],
        ['coche', 'bici', 'muñeca', 'coche'],
        ['bici', 'pc', 'pc'],
      ],
      output: ['muñeca', 'pc'],
      description: 'should return muñeca and pc',
    },
    {
      input: [[], [], []],
      output: [],
      description: 'should return an empty array',
    },
    {
      input: [['a', 'a'], ['a', 'a'], ['a', 'a']],
      output: [],
      description: 'should return an empty array',
    },
    {
      input: [['a', 'a'], ['b', 'b'], ['c', 'c']],
      output: ['a', 'b', 'c'],
      description: 'should return a, b and c',
    },
    {
      input: [['a'], ['a'], ['a']],
      output: [],
      description: 'should return an empty array',
    },
  ];

  it('should return an array type', () => {
    expect(getGiftsToRefill([], [], [])).toBeInstanceOf(Array);
  });

  it.each(testCases)('$description', (testCase) => {
    expect(getGiftsToRefill(...testCase.input)).toEqual(testCase.output);
  });
});
