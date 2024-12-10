function moveTrain(board, mov) {
  const directions = {
    U: (row, col) => board[row - 1]?.[col],
    D: (row, col) => board[row + 1]?.[col],
    R: (row, col) => board[row][col + 1],
    L: (row, col) => board[row][col - 1],
  };

  const flatBoard = board.join('');
  const trainHeadIndex = flatBoard.indexOf('@');

  const totalColumns = board[0].length;
  const currentRow = Math.floor(trainHeadIndex / totalColumns);
  const currentColumn = trainHeadIndex % totalColumns;

  const nextCell = directions[mov](currentRow, currentColumn);

  const results = {
    '*': 'eat',
    '·': 'none',
  };

  return results[nextCell] || 'crash';
}

module.exports = moveTrain;
