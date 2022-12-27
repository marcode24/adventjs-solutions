function carryGifts(gifts, maxWeight) {
  const bags = []; const bagTemp = [];
  let giftJoined = '';
  gifts
    .filter((gift) => gift.length <= maxWeight)
    .forEach((gift) => {
      giftJoined += gift;
      if (giftJoined.length > maxWeight) {
        bags.push(bagTemp.join(' '));
        giftJoined = gift;
        bagTemp.length = 0;
      }
      bagTemp.push(gift);
    });
  bags.push(bagTemp.join(' '));
  return bags.filter((gift) => gift !== '');
}

module.exports = carryGifts;

// this solution makes me feel like a noob jajaja
// function carryGifts(gifts, maxWeight) {
//   const regex = new RegExp(`\\b(\\w ?){1,${maxWeight}}(?= |$)`, 'g')
//   const res = gifts.join(' ').match(regex);
//   return res ? res : [];
// }
