const wrapGifts = (gifts) => {
  const height = Math.max(0, ...gifts.map((giftsGroup) => giftsGroup.length));
  const wrapper = `*${'*'.repeat(height)}*`;
  const giftsWrapped = gifts.map((giftsGroup) => `*${giftsGroup}*`);
  return [wrapper, ...giftsWrapped, wrapper];
};

module.exports = wrapGifts;
