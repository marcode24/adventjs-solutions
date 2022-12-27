function checkStepNumbers(systemNames, stepNumbers) {
  return systemNames
    .every((_, i) => stepNumbers[i] <= stepNumbers[i + systemNames
      .slice(i + 1).indexOf(systemNames[i]) + 1
    ]);
}

module.exports = checkStepNumbers;
