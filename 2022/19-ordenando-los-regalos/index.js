function sortToys(toys, positions) {
  const oldPositions = [...positions];
  return positions.sort((a, b) => a - b)
    .map((position) => toys[oldPositions.indexOf(position)]);
}

module.exports = sortToys;
