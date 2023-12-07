const drawGift = require('./index');

describe('07 => Las cajas en 3d', () => {
  const testCases = [
    {
      input: [4, '+'],
      output: '   ####\n  #++##\n #++#+#\n####++#\n#++#+#\n#++##\n####\n',
    },
    {
      input: [1, '^'],
      output: '#\n',
    },
    {
      input: [5, '*'],
      output: '    #####\n   #***##\n  #***#*#\n #***#**#\n#####***#\n#***#**#\n#***#*#\n#***##\n#####\n',
    },
    {
      input: [2, '&'],
      output: ' ##\n###\n##\n',
    },
    {
      input: [10, '%'],
      output: '         ##########\n        #%%%%%%%%##\n       #%%%%%%%%#%#\n      #%%%%%%%%#%%#'
        + '\n     #%%%%%%%%#%%%#\n    #%%%%%%%%#%%%%#\n   #%%%%%%%%#%%%%%#\n  #%%%%%%%%#%%%%%%#'
        + '\n #%%%%%%%%#%%%%%%%#\n##########%%%%%%%%#\n#%%%%%%%%#%%%%%%%#\n#%%%%%%%%#%%%%%%#'
        + '\n#%%%%%%%%#%%%%%#\n#%%%%%%%%#%%%%#\n#%%%%%%%%#%%%#\n#%%%%%%%%#%%#\n#%%%%%%%%#%#'
        + '\n#%%%%%%%%##\n##########\n',
    },
  ];

  it('should return a string type', () => {
    expect(typeof drawGift(1, '*')).toBe('string');
  });

  it.each(testCases)('should return the correct output', ({ input, output }) => {
    expect(drawGift(...input)).toBe(output);
  });
});
