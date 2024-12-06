/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-restricted-syntax */
function organizeShoes(shoes) {
  const sizeCount = new Map();

  for (const { type, size } of shoes) {
    const counts = sizeCount.get(size) || { I: 0, R: 0 };
    counts[type]++;
    sizeCount.set(size, counts);
  }

  return Array.from(sizeCount.entries()).flatMap(([size, { I, R }]) =>
    Array(Math.min(I, R)).fill(size),
  );
}

module.exports = organizeShoes;
