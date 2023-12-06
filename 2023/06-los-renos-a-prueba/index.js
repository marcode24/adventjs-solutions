/* eslint-disable no-restricted-syntax */

// complejidad: 4
const maxDistance1 = (movements) => {
  const { move, stars } = movements.split('').reduce((acc, movement) => {
    if (movement === '>') acc.move++;
    else if (movement === '<') acc.move--;
    else acc.stars++;
    return acc;
  }, { move: 0, stars: 0 });

  return Math.abs(move) + stars;
};

// complejidad: 3
// para el problema es la que mas da puntos
const maxDistance2 = (movements) => {
  let move = 0;
  let stars = 0;

  for (const movement of movements) {
    if (movement === '>') move++;
    else if (movement === '<') move--;
    else stars++;
  }

  return Math.abs(move) + stars;
};

// complejidad: 1
const maxDistance3 = (movements) => {
  const left = movements.match(/</g)?.length ?? 0;
  const right = movements.match(/>/g)?.length ?? 0;
  const stars = movements.match(/\*/g)?.length ?? 0;
  return Math.abs(left - right) + stars;
};

// complejidad: 1
const maxDistance4 = (movements) => {
  const counts = { '<': 0, '>': 0, '*': 0 };

  for (const movement of movements) {
    counts[movement]++;
  }

  return Math.abs(counts['<'] - counts['>']) + counts['*'];
};

module.exports = {
  maxDistance1,
  maxDistance2,
  maxDistance3,
  maxDistance4,
};
