const listGifts = require('./index');

describe('02 => Ayuda al elfo a listar los regalos', () => {
  const testCases = [
    {
      input: 'bici coche balón _playstation bici coche peluche',
      output: {
        bici: 2, coche: 2, balón: 1, peluche: 1,
      },
    },
    {
      input: 'bici coche balón _playstation bici coche peluche bici coche balón _playstation bici coche peluche',
      output: {
        bici: 4, coche: 4, balón: 2, peluche: 2,
      },
    },
  ];

  it('should return an object type', () => {
    expect(typeof listGifts('bici coche balón _playstation bici coche peluche')).toBe('object');
  });

  it.each(testCases)('should return an object with the correct values', (testCase) => {
    expect(listGifts(testCase.input)).toEqual(testCase.output);
  });
});
