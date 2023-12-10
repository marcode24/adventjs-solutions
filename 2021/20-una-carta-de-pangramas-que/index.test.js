const pangram = require('./index');

describe('20 => Una carta de pangramas que', () => {
  const testCases = [
    {
      input: 'Extraño pan de col y kiwi se quemó bajo fugaz vaho',
      output: true,
    },
    {
      input: 'Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!',
      output: true,
    },
    {
      input: 'Esto es una frase larga pero no tiene todas las letras del abecedario',
      output: false,
    },
    {
      input: 'De la a a la z, nos faltan letras',
      output: false,
    },
  ];

  it('should return a boolean type', () => {
    expect(typeof pangram('')).toBe('boolean');
  });

  it.each(testCases)('should return $output', ({ input, output }) => {
    expect(pangram(input)).toBe(output);
  });
});
