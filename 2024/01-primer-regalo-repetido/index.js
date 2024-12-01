function prepareGifts(gifts) {
  return [...new Set(gifts)].sort((a, b) => a - b);
}

module.exports = prepareGifts;
