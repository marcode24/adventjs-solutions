/* eslint-disable no-bitwise */
/* eslint-disable no-restricted-syntax */
function fixGiftList(received, expected) {
  const counts = {};

  for (const gift of received) counts[gift] = ~~counts[gift] + 1;
  for (const gift of expected) counts[gift] = ~~counts[gift] - 1;

  const missing = {};
  const extra = {};
  for (const [gift, count] of Object.entries(counts)) {
    if (count > 0) extra[gift] = count;
    else if (count < 0) missing[gift] = -count;
  }

  return { missing, extra };
}

module.exports = fixGiftList;
