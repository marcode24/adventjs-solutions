function createXmasTree(height, ornament) {
  const totalWidth = 2 * height - 1;
  const trunkPadding = '_'.repeat((totalWidth - 1) / 2);

  const tree = Array.from({ length: height }, (_, i) => {
    const layerWidth = 2 * i + 1;
    const spaces = '_'.repeat((totalWidth - layerWidth) / 2);
    return spaces + ornament.repeat(layerWidth) + spaces;
  });

  const trunk = `${trunkPadding}#${trunkPadding}`;
  tree.push(trunk, trunk);

  return tree.join('\n');
}

module.exports = createXmasTree;
