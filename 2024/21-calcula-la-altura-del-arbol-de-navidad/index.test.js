const treeHeight = require('./index');

describe('21 => Calcula-la-altura-del-arbol-de-navidad', () => {
  const TEST_CASES = [
    {
      input: {
        value: '🎁',
        left: null,
        right: null,
      },
      output: 1,
    },
    {
      input: {
        value: '🎁',
        left: {
          value: '🎄',
          left: null,
          right: null,
        },
        right: {
          value: '❄️',
          left: null,
          right: null,
        },
      },
      output: 2,
    },
    {
      input: {
        value: '🎁',
        left: {
          value: '🎄',
          left: {
            value: '⭐',
            left: null,
            right: null,
          },
          right: null,
        },
        right: {
          value: '❄️',
          left: null,
          right: null,
        },
      },
      output: 3,
    },
    {
      input: null,
      output: 0,
    },
    {
      input: {
        value: '🎁',
        left: {
          value: '🎄',
          left: {
            value: '⭐',
            left: {
              value: '🎅',
              left: null,
              right: null,
            },
            right: null,
          },
          right: null,
        },
        right: null,
      },
      output: 4,
    },
  ];

  it('should return number type', () => {
    const testCase = TEST_CASES[0];

    expect(typeof treeHeight(testCase.input)).toBe('number');
  });

  it.each(TEST_CASES)('should return $output', (testCase) => {
    const received = treeHeight(testCase.input);

    expect(received).toBe(testCase.output);
  });
});
