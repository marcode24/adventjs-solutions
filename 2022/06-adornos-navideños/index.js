function createCube(size) {
  const topSide = [];
  const bottomSide = [];
  for (let i = 1; i <= size; i++) {
    topSide.push(' '.repeat(size - i) + '/\\'.repeat(i) + '_\\'.repeat(size));
    bottomSide.push(' '.repeat(size - i) + '\\/'.repeat(i) + '_/'.repeat(size));
  }
  return topSide.concat(bottomSide.reverse()).join('\n');
}

module.exports = createCube;
