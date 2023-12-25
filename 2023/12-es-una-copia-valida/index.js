function checkIsValidCopy(original, copy) {
  let isValidCopy = true;
  const symbolSequence = '#+:. ';

  let copyIndex = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const letter of original) {
    const copyLetter = copy[copyIndex];
    const symbolIndex = symbolSequence.indexOf(letter);

    const symbols = symbolIndex !== -1
      ? symbolSequence.slice(symbolIndex)
      : symbolSequence;

    const isValidLetter = `${letter}${letter.toLowerCase()}${symbols}`
      .includes(copyLetter);

    const isLetterBlankSpace = letter === ' ';
    const isCopyLetterBlankSpace = copyLetter === ' ';

    const isValidCharacter = isLetterBlankSpace
      ? isCopyLetterBlankSpace
      : isValidLetter;

    if (!isValidCharacter) {
      isValidCopy = false;
      break;
    }

    copyIndex++;
  }

  return isValidCopy;
}

module.exports = checkIsValidCopy;
