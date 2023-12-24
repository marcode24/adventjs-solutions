# Reto 19: Enfrenta el sabotaje

## Problema

¡Alerta en la fábrica de juguetes de Santa! El **Grinch** 😈 se ha infiltrado en el almacén y ha saboteado algunos de los juguetes 💣.

**Los elfos necesitan ayuda para encontrar los juguetes saboteados** y eliminarlos antes de que llegue la Navidad. Para ello tenemos el mapa 🗺️ del almacén, que es una matriz.

Los * representan los juguetes saboteados y las celdas vacías con un espacio en blanco son los lugares seguros.

Tu tarea es escribir **una función que devuelva la misma matriz pero, en cada posición, nos indique el número de juguetes saboteados que hay en las celdas adyacentes.**

Si una celda contiene un juguete saboteado, debe permanecer igual. Si una celda no toca ningún juguete saboteado, debe contener un espacio en blanco .

```js
const store = [
  ['*', ' ', ' ', ' '],
  [' ', ' ', '*', ' '],
  [' ', ' ', ' ', ' '],
  ['*', ' ', ' ', ' ']
]

console.log(revealSabotage(store))
/* Debería mostrar:
[
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
]
*/
```

Ten en cuenta que…

- Las celdas diagonales también se consideran adyacentes.
- El tablero siempre tendrá al menos una celda vacía y un juguete saboteado *.
- El tablero puede tener cualquier tamaño.
- Los números son cadenas de texto.

## Mi solución

```js
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
```
