function minMovesToStables(reindeer, stables) {
  reindeer.sort();
  stables.sort();

  return reindeer.reduce((totalMoves, currentReindeerPosition, index) => {
    const currentStablePosition = stables[index];
    const distance = Math.abs(currentReindeerPosition - currentStablePosition);
    return totalMoves + distance;
  }, 0);
}

module.exports = minMovesToStables;
