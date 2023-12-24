const distributeGifts = (weights) => {
  const numRows = weights.length;
  const numCols = weights[0].length;

  const averages = [];

  for (let i = 0; i < numRows; i++) {
    averages[i] = [];

    for (let j = 0; j < numCols; j++) {
      let sum = 0;
      let count = 0;

      const addToSum = (value) => {
        sum += value ?? 0;
        count += value ? 1 : 0;
      };

      addToSum(weights[i][j - 1]); // left
      addToSum(weights[i][j + 1]); // right
      addToSum(weights[i - 1]?.[j]); // top
      addToSum(weights[i + 1]?.[j]); // bottom
      addToSum(weights[i][j]); // current

      averages[i][j] = Math.round(sum / count);
    }
  }

  return averages;
};

module.exports = distributeGifts;
