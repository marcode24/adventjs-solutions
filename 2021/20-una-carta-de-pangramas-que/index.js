function pangram(str) {
  const cleanedStr = str
    .toLowerCase()
    .replace(/[áä]/g, 'a')
    .replace(/[éë]/g, 'e')
    .replace(/[íï]/g, 'i')
    .replace(/[óö]/g, 'o')
    .replace(/[úü]/g, 'u');

  const uniqueLetters = new Set(cleanedStr);
  const allLetters = new Set('abcdefghijklmnñopqrstuvwxyz');

  return [...allLetters].every((letter) => uniqueLetters.has(letter));
}

module.exports = pangram;
