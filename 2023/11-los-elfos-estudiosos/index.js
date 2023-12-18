function getIndexsForPalindrome(word) {
  const wordLength = word.length;
  const isPalindrome = (str) => str === [...str].reverse().join('');

  if (isPalindrome(word)) return [];

  for (let i = 0; i < wordLength; i++) {
    for (let j = i + 1; j < wordLength; j++) {
      const newWord = [...word];
      [newWord[i], newWord[j]] = [newWord[j], newWord[i]];

      if (newWord.join('') === newWord.reverse().join('')) {
        return [i, j];
      }
    }
  }

  return null;
}

module.exports = getIndexsForPalindrome;
