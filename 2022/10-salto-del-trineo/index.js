function checkJump(heights) {
  const dictionary = { 0: '', '-1': 'd', 1: 'u' }; // -1: down, 0: same, 1: up
  const str = heights.slice(1).reduce((acc, curr, i) => acc + dictionary[Math.sign(curr - heights[i])], '');
  return !!str.match(/^[u]+[d]+$/g);
}

module.exports = checkJump;
