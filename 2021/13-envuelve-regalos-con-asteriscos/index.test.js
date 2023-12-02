const wrapGifts = require('./index');

describe('13 => Envuelve regalos con asteriscos', () => {
  const testCases = [
    {
      input: ['📷', '⚽️'],
      output: [
        '****',
        '*📷*',
        '*⚽️*',
        '****',
      ],
    },
    {
      input: ['🏈🎸', '🎮🧸'],
      output: [
        '******',
        '*🏈🎸*',
        '*🎮🧸*',
        '******',
      ],
    },
    {
      input: ['📷'],
      output: [
        '****',
        '*📷*',
        '****',
      ],
    },
  ];

  it('should return an array type', () => {
    expect(Array.isArray(wrapGifts([]))).toBe(true);
  });

  it.each(testCases)('should return an array with the correct values', (testCase) => {
    expect(wrapGifts(testCase.input)).toEqual(testCase.output);
  });
});
