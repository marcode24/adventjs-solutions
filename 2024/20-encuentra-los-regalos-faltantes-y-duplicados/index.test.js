const fixGiftList = require('./index');

describe('20 => Encuentra-los-regalos-faltantes-y-duplicados', () => {
  const TEST_CASES = [
    {
      input: [
        ['puzzle', 'car'],
        ['puzzle', 'car', 'ball'],
      ],
      output: {
        missing: {
          ball: 1,
        },
        extra: {},
      },
    },
    {
      input: [
        ['car', 'puzzle', 'car'],
        ['puzzle', 'car', 'doll'],
      ],
      output: {
        missing: {
          doll: 1,
        },
        extra: {
          car: 1,
        },
      },
    },
    {
      input: [
        ['train', 'book', 'kite'],
        ['train', 'kite', 'book', 'kite'],
      ],
      output: {
        missing: {
          kite: 1,
        },
        extra: {},
      },
    },
    {
      input: [
        ['bear', 'car'],
        ['bear', 'car', 'car'],
      ],
      output: {
        missing: {
          car: 1,
        },
        extra: {},
      },
    },
    {
      input: [[], ['bear', 'car', 'car']],
      output: {
        missing: {
          bear: 1,
          car: 2,
        },
        extra: {},
      },
    },
    {
      input: [
        ['puzzle', 'puzzle', 'car'],
        ['puzzle', 'car'],
      ],
      output: {
        missing: {},
        extra: {
          puzzle: 1,
        },
      },
    },
    {
      input: [['car'], ['car', 'puzzle', 'ball']],
      output: {
        missing: {
          puzzle: 1,
          ball: 1,
        },
        extra: {},
      },
    },
    {
      input: [
        ['bear', 'bear', 'car'],
        ['bear', 'bear', 'car'],
      ],
      output: {
        missing: {},
        extra: {},
      },
    },
  ];

  it('should return an object', () => {
    const testCase = TEST_CASES[0];
    const received = fixGiftList(...testCase.input);
    expect(received).toEqual(expect.any(Object));
  });

  it.each(TEST_CASES)('should return the correct object', (testCase) => {
    const received = fixGiftList(...testCase.input);
    expect(received).toEqual(testCase.output);
  });
});
