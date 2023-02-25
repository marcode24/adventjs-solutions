const sortToys = require('./index');

describe('19 => Ordenando los regalos', () => {
  const testCases = [
    {
      input: [['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0]],
      ouput: ['puzzle', 'car', 'ball', 'doll'],
    },
    {
      input: [['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [8, 6, 5, 7, 9]],
      ouput: ['ps4', 'xbox', 'switch', 'pc', 'nintendo'],
    },
    {
      input: [['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [3, 1, 0, 2, 4]],
      ouput: ['ps4', 'xbox', 'switch', 'pc', 'nintendo'],
    },
    {
      input: [['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [8, 6, 5, 7, 9]],
      ouput: ['ps4', 'xbox', 'switch', 'pc', 'nintendo'],
    },
    {
      input: [
        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'],
        [1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111],
      ],
      ouput: ['l', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k'],
    },
  ];

  it('should return an array type', () => {
    expect(sortToys([], [])).toBeInstanceOf(Array);
  });

  it.each(testCases)('should return toys sorted by position', (testCase) => {
    expect(sortToys(...testCase.input)).toEqual(testCase.ouput);
  });
});
