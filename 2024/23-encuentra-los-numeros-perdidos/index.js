function findMissingNumbers(nums) {
  const maxNumber = Math.max(...nums);
  const fullSetOfNumbers = new Set(
    Array.from({ length: maxNumber }, (_, index) => index + 1),
  );
  const uniqueNumbers = new Set(nums);
  const missingNumbers = fullSetOfNumbers.difference(uniqueNumbers);
  return [...missingNumbers];
}

module.exports = findMissingNumbers;
