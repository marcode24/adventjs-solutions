const organizeInventory = require('./index');

describe('03 => Organizando-el-inventario', () => {
  const TEST_CASES = [
    {
      input: [],
      output: {},
    },
    {
      input: [{ name: 'doll', quantity: 5, category: 'toys' }],
      output: { toys: { doll: 5 } },
    },
    {
      input: [
        { name: 'book', quantity: 10, category: 'education' },
        { name: 'book', quantity: 5, category: 'education' },
        { name: 'paint', quantity: 3, category: 'art' },
      ],
      output: {
        education: {
          book: 15,
        },
        art: {
          paint: 3,
        },
      },
    },
    {
      input: [
        { name: 'doll', quantity: 5, category: 'toys' },
        { name: 'car', quantity: 3, category: 'toys' },
        { name: 'ball', quantity: 2, category: 'sports' },
        { name: 'car', quantity: 2, category: 'toys' },
        { name: 'racket', quantity: 4, category: 'sports' },
      ],
      output: {
        toys: {
          doll: 5,
          car: 5,
        },
        sports: {
          ball: 2,
          racket: 4,
        },
      },
    },
  ];

  it('should return an object', () => {
    const { input } = TEST_CASES[0];
    const result = organizeInventory(input);
    expect(typeof result).toBe('object');
  });

  it.each(TEST_CASES)(
    'should return the expected value',
    ({ input, output }) => {
      const result = organizeInventory(input);
      expect(result).toEqual(output);
    },
  );
});
