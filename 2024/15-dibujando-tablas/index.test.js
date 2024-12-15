/* eslint-disable operator-linebreak */
const drawTable = require('./index');

describe('15 => Dibujando-tablas', () => {
  const TEST_CASES = [
    {
      input: [{ name: 'Alice', city: 'London' }],
      output:
        '+-------+--------+\n' +
        '| Name  | City   |\n' +
        '+-------+--------+\n' +
        '| Alice | London |\n' +
        '+-------+--------+',
    },
    {
      input: [
        { name: 'Alice', city: 'London' },
        { name: 'Bob', city: 'Paris' },
      ],
      output:
        '+-------+--------+\n' +
        '| Name  | City   |\n' +
        '+-------+--------+\n' +
        '| Alice | London |\n' +
        '| Bob   | Paris  |\n' +
        '+-------+--------+',
    },
    {
      input: [
        { gift: 'Doll', quantity: 10 },
        { gift: 'Book', quantity: 5 },
        { gift: 'Music CD', quantity: 1 },
      ],
      output:
        '+----------+----------+\n' +
        '| Gift     | Quantity |\n' +
        '+----------+----------+\n' +
        '| Doll     | 10       |\n' +
        '| Book     | 5        |\n' +
        '| Music CD | 1        |\n' +
        '+----------+----------+',
    },
    {
      input: [
        { id: 1, score: 95 },
        { id: 2, score: 85 },
      ],
      output:
        '+----+-------+\n' +
        '| Id | Score |\n' +
        '+----+-------+\n' +
        '| 1  | 95    |\n' +
        '| 2  | 85    |\n' +
        '+----+-------+',
    },
    {
      input: [
        { id: 'midugato', isCat: true },
        { id: 'miduperro', isCat: false },
      ],
      output:
        '+-----------+-------+\n' +
        '| Id        | IsCat |\n' +
        '+-----------+-------+\n' +
        '| midugato  | true  |\n' +
        '| miduperro | false |\n' +
        '+-----------+-------+',
    },
    {
      input: [
        { game: 'indianajones', subtitle: 'the game' },
        { game: 'pokemonblue', subtitle: '' },
      ],
      output:
        '+--------------+----------+\n' +
        '| Game         | Subtitle |\n' +
        '+--------------+----------+\n' +
        '| indianajones | the game |\n' +
        '| pokemonblue  |          |\n' +
        '+--------------+----------+',
    },
  ];

  it('should return string type', () => {
    const testCase = TEST_CASES[0];
    const result = drawTable(testCase.input);
    expect(typeof result).toBe('string');
  });

  it.each(TEST_CASES)('should return expected output', (testCase) => {
    const result = drawTable(testCase.input);
    expect(result).toBe(testCase.output);
  });
});
