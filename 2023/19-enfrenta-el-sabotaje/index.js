/* eslint-disable no-restricted-syntax */
const revealSabotage = (store) => {
  for (const [i, row] of store.entries()) {
    for (const [j, col] of row.entries()) {
      // Si la celda actual contiene una mina, continuamos al siguiente paso
      if (col !== '*') {
        // Obtener las filas adyacentes
        const nextRow = store[i + 1];
        const prevRow = store[i - 1];

        // Obtener las celdas adyacentes
        const adjacentCells = [
          prevRow?.[j - 1], prevRow?.[j], prevRow?.[j + 1],
          row[j - 1], row[j + 1],
          nextRow?.[j - 1], nextRow?.[j], nextRow?.[j + 1],
        ];

        // Contar las minas adyacentes
        const count = adjacentCells.reduce(
          (acc, curr) => acc + +(curr === '*'),
          0,
        );

        // Si hay minas adyacentes, actualizamos el valor de la celda actual
        if (count !== 0) {
          row[j] = `${count}`;
        }
      }
    }
  }

  return store;
};

module.exports = revealSabotage;
