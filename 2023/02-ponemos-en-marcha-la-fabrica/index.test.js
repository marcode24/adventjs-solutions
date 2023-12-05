const manufacture = require('./index');

describe('02 => Ponemos en marcha la fabrica', () => {
  const testCases = [
    {
      input: [['tren', 'oso', 'pelota'], 'tronesa'],
      output: ['tren', 'oso'],
    },
    {
      input: [['coche', 'muñeca', 'balon'], 'ocmuñalb'],
      output: [],
    },
    {
      input: [['patineta', 'robot', 'libro'], 'nopor'],
      output: [],
    },
    {
      input: [[], 'letras'],
      output: [],
    },
    {
      input: [['juego', 'puzzle'], 'jlepuz'],
      output: ['puzzle'],
    },
  ];

  it('should return an array type ', () => {
    expect(Array.isArray(manufacture(['a'], ['a']))).toBe(true);
  });

  it.each(testCases)('should return $output', ({ input, output }) => {
    expect(manufacture(...input)).toEqual(output);
  });
});
