const isTreesSynchronized = require('./index');

describe('24 => Verifica-si-los-arboles-son-espejos-magicos', () => {
  const TEST_CASES = [
    {
      input: [{ value: '🎄' }, { value: '🎄' }],
      output: [true, '🎄'],
    },
    {
      input: [
        { value: '🎄', left: { value: '⭐' }, right: { value: '🎅' } },
        { value: '🎄', left: { value: '🎅' }, right: { value: '⭐' } },
      ],
      output: [true, '🎄'],
    },
    {
      input: [
        { value: '✨', left: { value: '⭐' }, right: { value: '🎅' } },
        { value: '✨', left: { value: '🎅' }, right: { value: '🎁' } },
      ],
      output: [false, '✨'],
    },
    {
      input: [{ value: '🎁' }, { value: '🎁' }],
      output: [true, '🎁'],
    },
    {
      input: [{ value: '🎄' }, { value: '🎁' }],
      output: [false, '🎄'],
    },
    {
      input: [
        { value: '🎄', left: { value: '⭐' } },
        { value: '🎄', right: { value: '⭐' } },
      ],
      output: [true, '🎄'],
    },
  ];

  it('should return an array', () => {
    expect(Array.isArray(isTreesSynchronized({}, {}))).toBe(true);
  });

  it.each(TEST_CASES)(
    'should return the correct value',
    ({ input, output }) => {
      expect(isTreesSynchronized(...input)[0]).toBe(output[0]);
    },
  );
});
