/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
function inBox(box) {
  return box
    .slice(1, -1)
    .some(
      (line) =>
        line.includes('*') &&
        line.indexOf('*') > 0 &&
        line.indexOf('*') < line.length - 1,
    );
}

module.exports = inBox;
