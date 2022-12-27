function fitsInOneBox(boxes) {
  return boxes
    .sort((a, b) => a.l - b.l)
    .every((box, i) => {
      const beforeBox = boxes[i - 1];
      return (
        i === 0
        || (box.l > beforeBox.l && box.w > beforeBox.w && box.h > beforeBox.h)
      );
    });
}

module.exports = fitsInOneBox;
