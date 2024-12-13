/* eslint-disable nonblock-statement-body-position */
/* eslint-disable curly */
function isRobotBack(moves) {
  let x = 0;
  let y = 0;

  const moveCount = {
    L: 0,
    R: 0,
    U: 0,
    D: 0,
  };
  const inverted = {
    L: 'R',
    R: 'L',
    U: 'D',
    D: 'U',
  };
  const directions = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  const applyMove = (move, factor = 1) => {
    moveCount[move] += factor;
    x += directions[move][0] * factor;
    y += directions[move][1] * factor;
  };

  moves.replace(/([*!?])?([LRUD])/g, (_, operator, move) => {
    if (operator === '*') applyMove(move, 2);
    else if (operator === '!') applyMove(inverted[move]);
    else if (!operator || (operator === '?' && !moveCount[move]))
      applyMove(move);
  });

  return x || y ? [x, y] : true;
}

module.exports = isRobotBack;
