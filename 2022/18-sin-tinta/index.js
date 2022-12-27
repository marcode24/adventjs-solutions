function dryNumber(dry, numbers) {
  const dryNumbers = [];
  while (numbers) {
    `${numbers}`.includes(dry) && dryNumbers.push(numbers);
    numbers--;
  }
  return dryNumbers.sort((a, b) => a - b);
}

module.exports = dryNumber;
