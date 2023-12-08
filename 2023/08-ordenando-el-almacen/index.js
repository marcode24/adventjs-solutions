const organizeGifts = (gifts) => {
  const PALLET_SIZE = 50;
  const BOX_SIZE = 10;

  const giftsArray = gifts.match(/\d+[a-z]/g);
  return giftsArray.map((gift) => {
    const [quantity, type] = gift.match(/(\d+)([a-z])/).slice(1);
    const pales = Math.floor(quantity / PALLET_SIZE);
    const boxes = (quantity % PALLET_SIZE) / BOX_SIZE;
    const bags = quantity % BOX_SIZE;

    return `[${type}]`.repeat(pales)
      + `{${type}}`.repeat(boxes)
      + `(${type.repeat(bags)})`.repeat(bags > 0);
  }).join('');
};

module.exports = organizeGifts;
