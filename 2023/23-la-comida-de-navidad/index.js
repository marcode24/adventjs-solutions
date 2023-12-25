/* eslint-disable no-restricted-syntax */
function organizeChristmasDinner(dishes) {
  const ingredients = {};

  for (const [dishName, ...dishIngredients] of dishes) {
    for (const ingredient of dishIngredients) {
      ingredients[ingredient] = [
        ...(ingredients[ingredient] ?? []),
        dishName,
      ];
    }
  }

  const output = Object.entries(ingredients)
    .filter(([, dishList]) => dishList.length > 1)
    .map(([ingredient, dishList]) => [ingredient, ...dishList.sort()])
    .sort();

  return output;
}

module.exports = organizeChristmasDinner;
