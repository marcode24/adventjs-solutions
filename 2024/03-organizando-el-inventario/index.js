/* eslint-disable no-bitwise */
/* eslint-disable no-sequences */
function organizeInventory(inventory) {
  return inventory.reduce(
    (result, { category, name, quantity }) => (
      (result[category] ??= {}),
      (result[category][name] = ~~result[category][name] + quantity),
      result
    ),
    {},
  );
}

module.exports = organizeInventory;
