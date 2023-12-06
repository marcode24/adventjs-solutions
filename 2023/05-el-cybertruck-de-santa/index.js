const cyberReindeer = (road, time) => {
  const moves = [road];
  let currentPosition = 0;
  let b = '.';

  for (let position = 1; position < time; position++) {
    if (position === 5) road = road.replace(/\|/g, '*');
    const newRoad = road.replace(/S[.*]/, `${b}S`);

    if (newRoad !== road) {
      currentPosition++;
      b = road[currentPosition];
    }

    road = newRoad;
    moves.push(road);
  }

  return moves;
};

module.exports = cyberReindeer;
