const createXmasTree = require('./index');

describe('04 => Decorando-el-arbol-de-navidad', () => {
  const TEST_CASES = [
    {
      input: [3, '*'],
      output: '__*__\n_***_\n*****\n__#__\n__#__',
    },
    {
      input: [5, '+'],
      output:
        '____+____\n___+++___\n__+++++__\n_+++++++_\n+++++++++\n____#____\n____#____',
    },
    {
      input: [6, '@'],
      output:
        '_____@_____\n____@@@____\n___@@@@@___\n__@@@@@@@__\n_@@@@@@@@@_\n@@@@@@@@@@@\n_____#_____\n_____#_____',
    },
    {
      input: [1, '*'],
      output: '*\n#\n#',
    },
    {
      input: [4, '#'],
      output: '___#___\n__###__\n_#####_\n#######\n___#___\n___#___',
    },
  ];

  it('should return a string', () => {
    expect(typeof createXmasTree(3, '*')).toBe('string');
  });

  it.each(TEST_CASES)(
    'should return the expected output',
    ({ input, output }) => {
      expect(createXmasTree(...input)).toBe(output);
    },
  );
});
