function drawRace(indices, length) {
  return indices
    .map((progress, laneIndex) => {
      const trackLine = [...'~'.repeat(length)];

      if (progress !== 0) {
        const renoPosition = progress > 0 ? progress : length + progress;
        trackLine[renoPosition] = 'r';
      }

      const isometricOffset = ' '.repeat(indices.length - laneIndex - 1);
      const trackLineStr = trackLine.join('');
      return `${isometricOffset}${trackLineStr} /${laneIndex + 1}`;
    })
    .join('\n');
}

module.exports = drawRace;
