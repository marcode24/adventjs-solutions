const transformTree = require('./index');

describe('16 => Despliegue en viernes', () => {
  const testCases = [
    {
      input: [],
      output: null,
    },
    {
      input: [1],
      output: {
        value: 1,
        left: null,
        right: null,
      },
    },
    {
      input: [1, 2, 3],
      output: {
        value: 1,
        left: {
          value: 2,
          left: null,
          right: null,
        },
        right: {
          value: 3,
          left: null,
          right: null,
        },
      },
    },
    {
      input: [17, 0, null, null, 1],
      output: {
        value: 17,
        left: {
          value: 0,
          left: null,
          right: {
            value: 1,
            left: null,
            right: null,
          },
        },
        right: null,
      },
    },
    {
      input: [3, 1, 0, 8, 12, null, 1],
      output: {
        value: 3,
        left: {
          value: 1,
          left: {
            value: 8,
            left: null,
            right: null,
          },
          right: {
            value: 12,
            left: null,
            right: null,
          },
        },
        right: {
          value: 0,
          left: null,
          right: {
            value: 1,
            left: null,
            right: null,
          },
        },
      },
    },
    {
      input: [2, 7, 5, null, 6, null, 9, null, null, 1, 11, null, null, null, 10],
      output: {
        value: 2,
        left: {
          value: 7,
          left: null,
          right: {
            value: 6,
            left: {
              value: 1,
              left: null,
              right: null,
            },
            right: {
              value: 11,
              left: null,
              right: null,
            },
          },
        },
        right: {
          value: 5,
          left: null,
          right: {
            value: 9,
            left: null,
            right: {
              value: 10,
              left: null,
              right: null,
            },
          },
        },
      },
    },
  ];

  it('should return an object type', () => {
    expect(typeof transformTree([1])).toBe('object');
  });

  it.each(testCases)('should return the correct tree', ({ input, output }) => {
    expect(transformTree(input)).toStrictEqual(output);
  });
});
