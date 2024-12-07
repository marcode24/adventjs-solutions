const inBox = require('./index');

describe('06 => Regalo-dentro-de-la-caja', () => {
  const TEST_CASES = [
    {
      input: ['###', '#*#', '###'],
      output: true,
    },
    {
      input: ['#*#', '###', '###'],
      output: false,
    },
    {
      input: ['###', '# #', '###'],
      output: false,
    },
    {
      input: ['####', '#* #', '#  #', '####'],
      output: true,
    },
    {
      input: ['#####', '#   #', '#  #*', '####'],
      output: false,
    },
    {
      input: ['#####', '#   #', '#   #', '#   #', '#####'],
      output: false,
    },
    {
      input: ['#####', '#   #', '#   #', '*#  #', '#####'],
      output: false,
    },
    {
      input: ['##*##', '#   #', '#   #', '#   #', '#####'],
      output: false,
    },
    {
      input: ['####', '#  #', '##*#'],
      output: false,
    },
    {
      input: ['###', '###', '#*#'],
      output: false,
    },
  ];

  it('should return a boolean type', () => {});

  it.each(TEST_CASES)('should return $output', ({ input, output }) => {
    expect(inBox(input)).toBe(output);
  });
});
