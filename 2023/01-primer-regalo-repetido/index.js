// complejidad: 1
const findFirstRepeated = (gifts) => gifts.find((gift, index) => gifts.indexOf(gift) !== index) ?? -1;

// complejidad: 3
const findFirstRepeated2 = (gifts) => {
  const repeated = gifts.filter((id, index) => gifts.indexOf(id) !== index);
  return repeated.length > 0 ? repeated[0] : -1;
};

// complejidad: 3
const findFirstRepeated3 = (gifts) => (
  [...new Set(gifts)].length === gifts.length
    ? -1
    : gifts.find((id, index) => gifts.indexOf(id) !== index)
);

module.exports = {
  findFirstRepeated,
  findFirstRepeated2,
  findFirstRepeated3,
};
