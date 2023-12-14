const getIndexsForPalindrome = require('./index');

describe('11 => Los elfos estudiosos', () => {
  const testCases = [
    {
      input: 'anna',
      output: [],
    },
    {
      input: 'abab',
      output: [0, 1],
    },
    {
      input: 'abac',
      output: null,
    },
    {
      input: 'aaaaaaaa',
      output: [],
    },
    {
      input: 'aaababa',
      output: [1, 3],
    },
    {
      input: 'caababa',
      output: null,
    },
  ];

  it('should return an array type if the input is a palindrome', () => {
    expect(getIndexsForPalindrome('abab')).toEqual([0, 1]);
  });

  it('should return null type if the input could not be a palindrome', () => {
    expect(getIndexsForPalindrome('abac')).toBeNull();
  });

  it.each(testCases)('should return $output', ({ input, output }) => {
    expect(getIndexsForPalindrome(input)).toEqual(output);
  });
});
