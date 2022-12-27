function getCompleted(part, total) {
  const MCD = (a, b) => {
    let temp;
    while (b !== 0) {
      temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };
  const [numerator, denominator] = [part, total]
    .map((time) => time.split(':')
      .reduce((acc, curr) => acc * 60 + +curr, 0));
  const mcdResult = MCD(numerator, denominator);
  return `${numerator / mcdResult}/${denominator / mcdResult}`;
}

module.exports = getCompleted;
