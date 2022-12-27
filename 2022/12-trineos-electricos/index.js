function selectSleigh(distance, sleighs) {
  const selected = sleighs
    .filter((sleigh) => sleigh.consumption * distance <= 20);
  return selected.length > 0 ? selected[selected.length - 1].name : null;
}

module.exports = selectSleigh;
