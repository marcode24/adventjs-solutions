const drawGift = (size, symbol) => {
  const WRAPPER = '#';
  const SPACE = ' ';

  if (size <= 1) return `${WRAPPER}\n`;

  const top = [SPACE.repeat(size - 1) + WRAPPER.repeat(size)];
  const bottom = [`${WRAPPER.repeat(size)}`];
  const middle = `${WRAPPER.repeat(size)}${symbol.repeat(Math.abs(size - 2))}`
    + `${WRAPPER}\n`;
  for (let i = 1; i < size; i++) {
    const line = `${WRAPPER}${symbol.repeat(size - 2)}${WRAPPER}`
      + `${symbol.repeat(i - 1)}${WRAPPER}`;
    top.push(SPACE.repeat(size - i - 1) + line);
    bottom.push(line);
  }

  top.pop();
  bottom.pop();
  top.push(middle);
  bottom.reverse();
  return `${top.join('\n')}${bottom.join('\n')}\n`;
};

module.exports = drawGift;
