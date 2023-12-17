const autonomousDrive = require('./index');

describe('15 => Robot autonomo', () => {
  const testCases = [
    {
      input: [
        ['..!....'], ['R', 'L'],
      ],
      output: ['..!....'],
    },
    {
      input: [
        ['!..', '***'], ['U', 'L'],
      ],
      output: [
        '!..',
        '***',
      ],
    },
    {
      input: [
        [
          '..!....',
          '......*',
        ],
        ['R', 'D', 'L'],
      ],
      output: [
        '.......',
        '..!...*',
      ],
    },
    {
      input: [
        [
          '*..!..*',
          '*.....*',
        ],
        ['R', 'R', 'R', 'D', 'D'],
      ],
      output: [
        '*.....*',
        '*....!*',
      ],
    },
    {
      input: [
        ['***', '.!.', '***'], ['D', 'U', 'R', 'R', 'R'],
      ],
      output: [
        '***',
        '..!',
        '***',
      ],
    },
    {
      input: [
        ['***', '*!*', '***'], ['D', 'U', 'R', 'L'],
      ],
      output: [
        '***',
        '*!*',
        '***',
      ],
    },
    {
      input: [
        [
          '.**.*.*.',
          '.***....',
          '..!.....',
        ], ['D', 'U', 'R', 'R', 'R'],
      ],
      output:
      [
        '.**.*.*.',
        '.***....',
        '.....!..',
      ],

    },
  ];

  it('should return an array type', () => {
    expect(Array.isArray(autonomousDrive(...testCases[0].input))).toBe(true);
  });

  it.each(testCases)('should return the correct output', (testCase) => {
    expect(autonomousDrive(...testCase.input)).toEqual(testCase.output);
  });
});
