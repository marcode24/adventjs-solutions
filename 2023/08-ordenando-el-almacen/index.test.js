const organizeGifts = require('./index');

describe('08 => Ordenando el almacen', () => {
  const testCases = [
    {
      input: '76a11b',
      output: '[a]{a}{a}(aaaaaa){b}(b)',
    },
    {
      input: '20a',
      output: '{a}{a}',
    },
    {
      input: '70b120a4c',
      output: '[b]{b}{b}[a][a]{a}{a}(cccc)',
    },
    {
      input: '9c',
      output: '(ccccccccc)',
    },
    {
      input: '19d51e',
      output: '{d}(ddddddddd)[e](e)',
    },
  ];

  it('should return a string type', () => {
    expect(typeof organizeGifts('3c')).toBe('string');
  });

  it.each(testCases)('should return the correct output', (testCase) => {
    expect(organizeGifts(testCase.input)).toBe(testCase.output);
  });
});
