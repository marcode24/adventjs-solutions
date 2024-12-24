function isTreesSynchronized(tree1, tree2) {
  function areMirrors(node1, node2) {
    if (!node1 && !node2) return true;
    if (!node1 || !node2 || node1.value !== node2.value) return false;

    const leftAndRightAreMirrors = areMirrors(node1.left, node2.right);
    const rightAndLeftAreMirrors = areMirrors(node1.right, node2.left);

    return leftAndRightAreMirrors && rightAndLeftAreMirrors;
  }

  const synchronized = tree1.value === tree2.value && areMirrors(tree1, tree2);

  return [synchronized, tree1.value];
}

module.exports = isTreesSynchronized;
