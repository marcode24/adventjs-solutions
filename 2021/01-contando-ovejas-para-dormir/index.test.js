const contarOvejas = require('./index');

describe('01 => Contando ovejas para dormir', () => {
  const testCases = [
    {
      input: [
        { name: 'Noa', color: 'azul' },
        { name: 'Euge', color: 'rojo' },
        { name: 'Navidad', color: 'rojo' },
        { name: 'Ki Na Ma', color: 'rojo' },
        { name: 'AAAAAaaaaa', color: 'rojo' },
        { name: 'Nnnnnnnn', color: 'rojo' },
      ],
      output: [
        { name: 'Navidad', color: 'rojo' },
        { name: 'Ki Na Ma', color: 'rojo' },
      ],
    },
    {
      input: [
        { name: 'Noa', color: 'rojo' },
        { name: 'Euge', color: 'rojo' },
        { name: 'Navidad', color: 'rojo' },
      ],
      output: [
        { name: 'Noa', color: 'rojo' },
        { name: 'Navidad', color: 'rojo' },
      ],
    },
  ];

  it('should return an array type', () => {
    expect(contarOvejas([])).toBeInstanceOf(Array);
  });

  it.each(testCases)('should return a correct array', (testCase) => {
    expect(contarOvejas(testCase.input)).toEqual(testCase.output);
  });
});
