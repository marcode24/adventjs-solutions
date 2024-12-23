/* eslint-disable func-names */
/* eslint-disable no-extend-native */
Set.prototype.difference = function (set) {
  return new Set([...this].filter((x) => !set.has(x)));
};

// La función de set.difference() esta disponible desde la version 22 de nodejs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/difference#browser_compatibility
// Para poder utilizarla en versiones anteriores de nodejs, se debe de agregar la función al prototipo de Set

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
