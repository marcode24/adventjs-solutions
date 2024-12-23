function distributeWeight(weight) {
  const boxLayouts = {
    1: [' _ ', '|_|'],
    2: [' ___ ', '|___|'],
    5: [' _____ ', '|     |', '|_____|'],
    10: [' _________ ', '|         |', '|_________|'],
  };

  const stackedBoxes = [];
  const numbers = Object.keys(boxLayouts).map(Number).reverse();

  function findTheBiggestBox(boxWeight) {
    return numbers.find((number) => number <= boxWeight);
  }

  while (weight > 0) {
    const boxWeight = findTheBiggestBox(weight);
    const [bottom, ...rest] = boxLayouts[boxWeight].slice().reverse();
    const last = stackedBoxes.shift();
    const newBottom = `${bottom}${last?.slice(bottom.length, -1) ?? ''}`;
    stackedBoxes.unshift(...[newBottom, ...rest].reverse());

    weight -= boxWeight;
  }

  return stackedBoxes.join('\n');
}

module.exports = distributeWeight;
