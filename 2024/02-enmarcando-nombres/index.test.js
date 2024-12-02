const createFrame = require('./index');

describe('02 => Enmarcando-nombres', () => {
  const TEST_CASES = [
    {
      input: ['midu'],
      output: '********\n* midu *\n********',
    },
    {
      input: ['midu', 'madeval', 'educalvolpz'],
      output:
        '***************\n* midu        *\n* madeval     *\n* educalvolpz *\n***************',
    },
    {
      input: ['a', 'bb', 'ccc'],
      output: '*******\n* a   *\n* bb  *\n* ccc *\n*******',
    },
    {
      input: ['midu', 'madeval', 'educalvolpz', 'midu'],
      output:
        '***************\n* midu        *\n* madeval     *\n* educalvolpz *\n* midu        *\n***************',
    },
  ];

  it('should return an array type', () => {
    const { input } = TEST_CASES[0];
    expect(typeof createFrame(input)).toBe('string');
  });

  it.each(TEST_CASES)(
    'should return the correct frame',
    ({ input, output }) => {
      expect(createFrame(input)).toBe(output);
    },
  );
});
