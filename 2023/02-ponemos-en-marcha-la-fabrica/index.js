const manufacture = (gifts, materials) => gifts.filter((gift) => (
  [...gift].every((letter) => materials.includes(letter))));

module.exports = manufacture;
