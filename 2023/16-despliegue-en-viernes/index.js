function transformTree(tree) {
  // eslint-disable-next-line prefer-rest-params
  const index = arguments[1] ?? 0;
  return tree[index] == null
    ? null
    : {
      value: tree[index],
      left: transformTree(tree, 2 * index + 1),
      right: transformTree(tree, 2 * index + 2),
    };
}

module.exports = transformTree;
