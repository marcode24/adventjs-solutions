const createChristmasTree = (ornaments, height) => {
  const heightSucessive = (height / 2) * (height + 1);
  const repeatOrnaments = [
    ...ornaments.repeat((heightSucessive / ornaments.length) + 1),
  ].join(' ');
  const spaces = ' '.repeat(height - 1);

  let tree = '';
  let i = 0;
  let counter = 0;
  while (counter < height) {
    const ornamentsLine = repeatOrnaments.substring(i, i + 2 * counter + 1);
    const level = `${spaces.substring(counter)}${ornamentsLine}\n`;
    tree += level;
    i += 2 * (counter + 1);
    counter++;
  }

  return `${tree}${' '.repeat(height - 1)}|\n`;
};

module.exports = createChristmasTree;
