function autonomousDrive(store, movements) {
  let currentRow = store.findIndex((line) => line.includes('!'));
  let currentCol = store[currentRow].indexOf('!');
  store[currentRow] = store[currentRow].replace('!', '.');

  // eslint-disable-next-line no-restricted-syntax
  for (const movement of movements) {
    const di = +(movement === 'D') - +(movement === 'U');
    const dj = +(movement === 'R') - +(movement === 'L');
    currentRow += +(store[currentRow + di]?.[currentCol] === '.' && di);
    currentCol += +(store[currentRow][currentCol + dj] === '.' && dj);
  }

  const currentLine = store[currentRow];
  store[currentRow] = `${currentLine.substring(0, currentCol)}!${
    currentLine.substring(currentCol + 1)}`;

  return store;
}

module.exports = autonomousDrive;
