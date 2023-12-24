const findBalancedSegment = (message) => {
  let maxLength = 0;
  let startIdx = -1;

  for (let i = 0; i < message.length; i++) {
    let count0 = 0;
    let count1 = 0;

    for (let j = i; j < message.length; j++) {
      message[j] === 0 ? count0++ : count1++;

      if (count0 === count1 && j - i + 1 > maxLength) {
        maxLength = j - i + 1;
        startIdx = i;
      }
    }
  }

  return startIdx !== -1 ? [startIdx, startIdx + maxLength - 1] : [];
};

module.exports = findBalancedSegment;
