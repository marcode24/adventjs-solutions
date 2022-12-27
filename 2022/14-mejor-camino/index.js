function getOptimalPath(path) {
  return path
    .reduceRight((acc, curr) => curr
      .map((value, index) => value + Math.min(acc[index], acc[index + 1])))[0];
}

module.exports = getOptimalPath;
