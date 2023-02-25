const printTable = require('./index');

describe('21 => Tabla de regalos', () => {
  const testCases = [
    {
      input: [
        [
          { name: 'PlayStation 5', quantity: 9234782374892 },
          { name: 'Book Learn Web Dev', quantity: 23531 },
        ],
      ],
      output: '++++++++++++++++++++++++++++++++++++++\n| Gift               | Quantity      |'
      + '\n| ------------------ | ------------- |\n| PlayStation 5      | 9234782374892 |\n| '
      + 'Book Learn Web Dev | 23531         |\n**************************************',
    },
    {
      input: [
        [
          { name: 'Game', quantity: 2 },
          { name: 'Bike', quantity: 1 },
          { name: 'Book', quantity: 3 },
        ],
      ],
      output: '+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n'
      + '| Game | 2        |\n| Bike | 1        |\n| Book | 3        |\n*******************',
    },
    {
      input: [
        [
          { name: 'Game', quantity: 10000 },
        ],
      ],
      output: '+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 10000    |\n*******************',
    },
    {
      input: [
        [
          { name: 'Game', quantity: 1234567890 },
        ],
      ],
      output: '+++++++++++++++++++++\n| Gift | Quantity   |\n| ---- | ---------- |\n'
      + '| Game | 1234567890 |\n*********************',
    },
    {
      input: [
        [
          { name: 'Toy', quantity: 12 },
          { name: 'Mic', quantity: 123 },
        ],
      ],
      output: '+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n'
      + '| Toy  | 12       |\n| Mic  | 123      |\n*******************',
    },
  ];

  it('should return an string type', () => {
    expect(typeof printTable(...testCases[0].input)).toBe('string');
  });

  it.each(testCases)('should return the correct table', (testCase) => {
    expect(printTable(...testCase.input)).toBe(testCase.output);
  });
});
