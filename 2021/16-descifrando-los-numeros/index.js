const decodeNumbers = (symbols) => {
  const numbers = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100,
  };

  return [...symbols].reduce((acc, currentSymbol, index, symbol) => (
    acc + (numbers[symbol[index + 1]] > numbers[currentSymbol]
      ? -numbers[currentSymbol]
      : numbers[currentSymbol])
  ), 0);
};

module.exports = decodeNumbers;
