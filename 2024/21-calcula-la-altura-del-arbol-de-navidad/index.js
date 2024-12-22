function treeHeight(tree) {
  if (!tree) return 0;

  const leftHeight = treeHeight(tree.left);
  const rightHeight = treeHeight(tree.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

module.exports = treeHeight;
