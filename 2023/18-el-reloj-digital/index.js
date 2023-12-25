function drawClock(time) {
  const digitPatterns = {
    0: ['***', '* *', '* *', '* *', '* *', '* *', '***'],
    1: ['  *', '  *', '  *', '  *', '  *', '  *', '  *'],
    2: ['***', '  *', '  *', '***', '*  ', '*  ', '***'],
    3: ['***', '  *', '  *', '***', '  *', '  *', '***'],
    4: ['* *', '* *', '* *', '***', '  *', '  *', '  *'],
    5: ['***', '*  ', '*  ', '***', '  *', '  *', '***'],
    6: ['***', '*  ', '*  ', '***', '* *', '* *', '***'],
    7: ['***', '  *', '  *', '  *', '  *', '  *', '  *'],
    8: ['***', '* *', '* *', '***', '* *', '* *', '***'],
    9: ['***', '* *', '* *', '***', '  *', '  *', '***'],
    ':': [' ', ' ', '*', ' ', '*', ' ', ' '],
  };

  const firstDigitPattern = digitPatterns[time[0]];
  const secondDigitPattern = digitPatterns[time[1]];
  const colonPattern = digitPatterns[':'];
  const thirdDigitPattern = digitPatterns[time[3]];
  const fourthDigitPattern = digitPatterns[time[4]];

  const result = [...firstDigitPattern];
  let position = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const row of result) {
    const rowString = `${row} ${secondDigitPattern[position]} `
      + `${colonPattern[position]} ${thirdDigitPattern[position]} `
      + `${fourthDigitPattern[position]}`;
    result[position] = [...rowString];
    position++;
  }

  return result;
}

module.exports = drawClock;
