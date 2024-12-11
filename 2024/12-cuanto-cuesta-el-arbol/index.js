function calculatePrice(ornaments) {
  const ornamentValues = {
    '*': 1,
    o: 5,
    '^': 10,
    '#': 50,
    '@': 100,
  };

  if (!/^[*o^#@]*$/.test(ornaments)) return undefined;

  return [...ornaments].reduce((totalPrice, current, index) => {
    const currentValue = ornamentValues[current];
    const nextValue = ornamentValues[ornaments[index + 1]];

    const isNextGreater = nextValue > currentValue;
    const valueToAdd = isNextGreater ? -currentValue : currentValue;

    return totalPrice + valueToAdd;
  }, 0);
}

module.exports = calculatePrice;
