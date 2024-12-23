const findInAgenda = require('./index');

describe('18 => La-agenda-magica-de-santa', () => {
  const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`;

  const testCases = [
    {
      input: [agenda, '34-600-123-456'],
      output: { name: 'Juan Perez', address: 'Calle Gran Via 12' },
    },
    {
      input: [agenda, '600-987'],
      output: {
        name: 'Maria Gomez',
        address: 'Mayor 45 Madrid 28013',
      },
    },
    {
      input: [agenda, '111'],
      output: null,
    },
    {
      input: [agenda, '1'],
      output: null,
    },
  ];

  it('should return an object', () => {
    const result = findInAgenda(agenda, '34-600-123-456');
    expect(typeof result).toBe('object');
  });

  it.each(testCases)(
    'should return the correct name and address',
    (testCase) => {
      const result = findInAgenda(...testCase.input);
      expect(result).toEqual(testCase.output);
    },
  );
});
