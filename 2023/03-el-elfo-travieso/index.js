const findNaughtyStep = (original, modified) => {
  const maxLength = Math.max(original.length, modified.length);

  for (let i = 0; i < maxLength; i++) {
    if (original[i] !== modified[i]) {
      return original.length > modified.length ? original[i] : modified[i];
    }
  }

  return '';
};

module.exports = findNaughtyStep;
