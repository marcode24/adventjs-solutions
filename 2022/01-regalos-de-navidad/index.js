function wrapping(gifts) {
  return gifts.map((gift) => {
    const repeat = '*'.repeat(gift.length + 2);
    return `${repeat}\n*${gift}*\n${repeat}`;
  });
}

module.exports = wrapping;
