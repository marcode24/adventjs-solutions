/* eslint-disable no-continue */
function canExit(maze) {
  const start = maze.findIndex((row) => row.includes('S'));
  const end = maze.findIndex((row) => row.includes('E'));
  const queue = [];
  const visited = new Set();
  queue.push(start * maze[0].length + maze[start].indexOf('S'));

  while (queue.length > 0) {
    const current = queue.shift();
    const row = Math.floor(current / maze[0].length);
    const col = current % maze[0].length;

    if (maze[row][col] === 'W' || visited.has(current)) continue;
    visited.add(current);

    if (current === end * maze[0].length + maze[end].indexOf('E')) return true;

    if (row > 0) queue.push(current - maze[0].length);
    if (row < maze.length - 1) queue.push(current + maze[0].length);
    if (col > 0) queue.push(current - 1);
    if (col < maze[0].length - 1) queue.push(current + 1);
  }
  return false;
}

module.exports = canExit;
