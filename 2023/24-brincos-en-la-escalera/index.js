function getStaircasePaths(steps, maxJump) {
  const result = [];

  function generatePaths(currentPath, remainingSteps) {
    if (remainingSteps === 0) {
      result.push([...currentPath]);
      return;
    }

    for (let jump = 1; jump <= maxJump && jump <= remainingSteps; jump++) {
      currentPath.push(jump);
      generatePaths(currentPath, remainingSteps - jump);
      currentPath.pop();
    }
  }

  generatePaths([], steps);
  return result;
}

module.exports = getStaircasePaths;
