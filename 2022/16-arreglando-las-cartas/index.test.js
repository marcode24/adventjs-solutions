const fixLetter = require('./index');

describe('16 => Arreglando las cartas', () => {
  const testCases = [
    {
      input: [' hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  '],
      output: 'Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.',
    },
    {
      input: ["  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"],
      output: 'Hi Santa Claus. I\'m a girl from Barcelona, Spain. Please, send me a bike. Is it possible?',
    },
    {
      input: ['  hi    santa    claus ??'],
      output: 'Hi Santa Claus?',
    },
    {
      input: ['Hey santa Claus .  I want a bike.   I want a videogame! '],
      output: 'Hey Santa Claus. I want a bike. I want a videogame!',
    },
    {
      input: ['  hi    santa    claus . santa claus is the best  '],
      output: 'Hi Santa Claus. Santa Claus is the best.',
    },
  ];

  it('should return a string type', () => {
    expect(typeof fixLetter('')).toBe('string');
  });

  it.each(testCases)('$description', (testCase) => {
    expect(fixLetter(...testCase.input)).toEqual(testCase.output);
  });
});
