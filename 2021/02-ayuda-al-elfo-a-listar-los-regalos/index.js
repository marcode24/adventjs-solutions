const listGifts = (letter) => letter.trim().split(' ').reduce((acc, gift) => {
  if (!gift.startsWith('_')) {
    acc[gift] = (acc[gift] || 0) + 1;
  }
  return acc;
}, {});

module.exports = listGifts;
