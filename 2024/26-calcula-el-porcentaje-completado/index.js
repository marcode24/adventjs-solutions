function getCompleted(timeWorked, totalTime) {
  const timeToSeconds = (time) => {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  const partSeconds = timeToSeconds(timeWorked);
  const totalSeconds = timeToSeconds(totalTime);

  return `${Math.round((partSeconds / totalSeconds) * 100)}%`;
}

module.exports = getCompleted;
