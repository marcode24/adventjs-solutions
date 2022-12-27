const fitsInOneBox = require('./index');

describe('04 => Caja dentro de otra caja', () => {
  const testCases = [
    {
      input: [
        { l: 2, w: 2, h: 2 },
        { l: 1, w: 1, h: 1 },
      ],
      output: true,
      description: 'should return true',
    },
    {
      input: [
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
        { l: 3, w: 1, h: 3 },
      ],
      output: false,
      description: 'should return false',
    },
    {
      input: [
        { l: 1, w: 1, h: 1 },
        { l: 3, w: 3, h: 3 },
        { l: 2, w: 2, h: 2 },
      ],
      output: true,
      description: 'should return true',
    },
    {
      input: [
        { l: 1, w: 1, h: 1 },
        { l: 3, w: 3, h: 3 },
        { l: 2, w: 2, h: 2 },
        { l: 4, w: 4, h: 4 },
      ],
      output: true,
      description: 'should return true',
    },
    {
      input: [
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
        { l: 2, w: 10, h: 2 },
      ],
      output: false,
      description: 'should return false',
    },
  ];

  it('should return a boolean type', () => {
    expect(typeof fitsInOneBox([])).toBe('boolean');
  });

  it.each(testCases)('$description', (testCase) => {
    expect(fitsInOneBox(testCase.input)).toEqual(testCase.output);
  });
});
