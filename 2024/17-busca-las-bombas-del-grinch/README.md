# Reto 17: Busca-las-bombas-del-grinch

El Grinch ha estado haciendo de las suyas en el Polo Norte y ha sembrado **bombas de carbón explosivo** 💣 en la fábrica de juguetes de los duendes. Quiere que todos los juguetes queden inutilizados y por eso ha dejado una cuadrícula donde algunas celdas tienen carbón explosivo (`true`) y otras están vacías (`false`).

Los duendes necesitan tu ayuda para **mapear las zonas peligrosas.** Cada celda vacía debe mostrar un número que indique **cuántas bombas de carbón explosivo hay en las posiciones adyacentes,** incluidas las diagonales.

```js
detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false]
])
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

detectBombs([
  [true, false],
  [false, false]
])
// [
//   [0, 1],
//   [1, 1]
// ]

detectBombs([
  [true, true],
  [false, false],
  [true, true]
])

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]
```

**Nota:** ¿Quieres una pista? Seguro que has jugado al juego de buscaminas antes… 😉

## Mi solución explicada

```js
function detectBombs(grid) {
  const neighborOffsets = [-1, 0, 1];

  return grid.map((row, rowIndex) =>
    row.map((_, colIndex) => {
      const adjacentBombsCount = neighborOffsets.reduce(
        (totalBombs, rowOffset) =>
          totalBombs +
          neighborOffsets.reduce((bombsInColumn, colOffset) => {
            const neighborRow = rowIndex + rowOffset;
            const neighborCol = colIndex + colOffset;
            const isBomb = grid[neighborRow]?.[neighborCol];
            return bombsInColumn + (isBomb ? 1 : 0);
          }, 0),
        0,
      );

      return adjacentBombsCount - (grid[rowIndex][colIndex] ? 1 : 0);
    }),
  );
}
```

Este problema se puede resolver con un enfoque similar al que se utiliza en el juego de buscaminas. Para cada celda de la cuadrícula, necesitamos contar cuántas bombas hay en las posiciones adyacentes (incluidas las diagonales).

Nos dice que una celda será `true` si hay una bomba y `false` si no hay bomba.

Para este caso definiremos una constante `neighborOffsets` que contiene los desplazamientos posibles para acceder a las celdas adyacentes. Estos desplazamientos son `-1`, `0` y `1`. **¿Por qué estos valores?** Porque con ellos podemos acceder a las celdas adyacentes en la fila y columna actual. Con un desplazamiento de `-1` podemos acceder a la celda anterior, con un desplazamiento de `0` accedemos a la celda actual y con un desplazamiento de `1` accedemos a la celda siguiente.

Por ejemplo: si estamos en la celda `[1, 1]` (segunda fila, segunda columna), los desplazamientos `-1`, `0` y `1` nos permiten acceder a las celdas `[0, 0]`, `[0, 1]`, `[0, 2]`, `[1, 0]`, `[1, 1]`, `[1, 2]`, `[2, 0]`, `[2, 1]` y `[2, 2]`.

Pero **¿por qué a estas celdas?** Porque son las celdas adyacentes a la celda `[1, 1]`. Ejemplo:

```txt
[0, 0] [0, 1] [0, 2]
[1, 0] [1, 1] [1, 2] <-- Celda actual [1, 1] (segunda fila, segunda columna)
[2, 0] [2, 1] [2, 2]
```

Como tendremos una matriz de entrada, utlizaremos 2 ciclos `map` para recorrer cada celda de la cuadrícula. En el primer ciclo `map` recorremos las filas y en el segundo ciclo `map` recorremos las columnas. Para cada celda, utilizamos el método `reduce` para contar cuántas bombas hay en las posiciones adyacentes.

Dentro del segundo ciclo `map`, utilizaremos 2 ciclos `reduce` para recorrer las celdas adyacentes. El primer ciclo `reduce` recorre las filas y el segundo ciclo `reduce` recorre las columnas. Para cada celda adyacente, verificamos si es una bomba y sumamos `1` si es una bomba o `0` si no es una bomba. Al final, restamos `1` si la celda actual es una bomba. Esto es necesario porque la celda actual también se incluye en las celdas adyacentes. Si la celda actual es una bomba, no queremos contarla dos veces.

Quiza sea un poco confuso, pero si lo piensas detenidamente, verás que es una solución bastante elegante. 😄

**Veamos cómo funciona:**

Supongamos que tenemos la siguiente cuadrícula:

```js
[
  [false, true, false],
  [true, false, true],
  [false, true, false],
]
```

Tenemos que `neighborOffsets` es una constante con valor de `[-1, 0, 1]`.

```js
const neighborOffsets = [-1, 0, 1];
```

Aqui es donde comienza la magia. Utilizaremos el método `map` para recorrer cada fila de la cuadrícula. Como `grid` tiene 3 filas, este primer `map` se ejecutará 3 veces.

**NOTA:** *Recordemos que `map` recibe una función de callback que se ejecutará por cada elemento de la matriz. En este caso, la función de callback recibe 2 parámetros: `row` y `rowIndex`. `row` es la fila actual y `rowIndex` es el índice de la fila actual.*

Para no perdernos en el proceso, diremos que este primer ciclo se llamará `MAP_FILA_1`.

Entonces tenemos que `row` es igual a `[false, true, false]` y `rowIndex` es igual a `0`.

```js
// grid = [
//   [false, true, false], <-- row para la primera iteración
//   [true, false, true],
//   [false, true, false],
// ]

grid.map((row, rowIndex) => {
  // ...
});

row = [false, true, false]
rowIndex = 0
```

Dentro de `MAP_FILA_1`, utilizaremos nuevamente el método `map` para recorrer cada celda de la fila actual. Como `row` tiene 3 celdas, este segundo `map` se ejecutará 3 veces.

Para no perdernos en el proceso, diremos que este segundo ciclo se llamará `MAP_FILA_1_COLUMNA_1`.

Para la primera iteración de `MAP_FILA_1_COLUMNA_1`, tenemos que `_`  es igual a `false` y `colIndex` es igual a `0`. Para este proceso no necesitaremos el valor de la celda, por eso utilizamos `_`. Solo necesitamos el índice de la columna.

```js
// row = [false, true, false] <-- col para la primera iteración
// rowIndex = 0

row.map((_, colIndex) => {
  // ...
});

_ = false
colIndex = 0
```

Dentro de `MAP_FILA_1_COLUMNA_1`, utilizaremos el método `reduce` para contar cuántas bombas hay en las posiciones adyacentes. El método `reduce` recibe una función de callback y un valor inicial. La función de callback se ejecutará por cada elemento de la matriz. En este caso, la función de callback recibe 2 parámetros: `totalBombs` y `rowOffset`. `totalBombs` es el total de bombas en las celdas adyacentes y `rowOffset` es el desplazamiento en la fila. Al final, el método `reduce` retorna el total de bombas en las celdas adyacentes.

Como `neighborOffsets` tiene 3 elementos, este ciclo se ejecutará 3 veces.

Para no perdernos en el proceso, diremos que este ciclo se llamará `REDUCE_1_FILA_1_COLUMNA_1`.

Entonces tenemos que `totalBombs` es igual a `0` y `rowOffset` es igual a `-1`.

```js
// row = [false, true, false] <-- col para la primera iteración
// rowIndex = 0
// neighborOffsets = [-1, 0, 1]

row.map((_, colIndex) => {
  const adjacentBombsCount = neighborOffsets.reduce(
    (totalBombs, rowOffset) => {
      // ...
    },
    0,
  );
});

totalBombs = 0
rowOffset = -1
```

Dentro de `REDUCE_1_FILA_1_COLUMNA_1`, utilizaremos nuevamente el método `reduce` para contar cuántas bombas hay en las posiciones adyacentes. Igual que antes, el método `reduce` recibe una función de callback y un valor inicial. La función de callback se ejecutará por cada elemento de la matriz. En este caso, la función de callback recibe 2 parámetros: `bombsInColumn` y `colOffset`. `bombsInColumn` es el total de bombas en las celdas adyacentes en la columna y `colOffset` es el desplazamiento en la columna. Al final, el método `reduce` retorna el total de bombas en las celdas adyacentes en la columna.

Como `neighborOffsets` tiene 3 elementos, este ciclo se ejecutará 3 veces.

Para no perdernos en el proceso, diremos que este ciclo se llamará `REDUCE_1_1_FILA_1_COLUMNA_1`.

Entonces tenemos que para la primera iteración -> `bombsInColumn` es igual a `0` y `colOffset` es igual a `-1`.

```js
// row = [false, true, false] <-- col para la primera iteración
// rowIndex = 0
// rowOffset = -1
// colIndex = 0
// neighborOffsets = [-1, 0, 1]

row.map((_, colIndex) => {
  const adjacentBombsCount = neighborOffsets.reduce(
    (totalBombs, rowOffset) =>
      totalBombs +
      neighborOffsets.reduce((bombsInColumn, colOffset) => {
        const neighborRow = rowIndex + rowOffset;
        const neighborCol = colIndex + colOffset;
        const isBomb = grid[neighborRow]?.[neighborCol];
        return bombsInColumn + (isBomb ? 1 : 0);
      }, 0),
    0,
  );
});

bombsInColumn = 0
colOffset = -1
```

```js
// const neighborRow = rowIndex + rowOffset;
const neighborRow = 0 + -1;
const neighborRow = -1;

// const neighborCol = colIndex + colOffset;
const neighborCol = 0 + -1;
const neighborCol = -1;

// const isBomb = grid[neighborRow]?.[neighborCol];
// const isBomb = grid[-1]?.[-1];
const isBomb = undefined;

// return bombsInColumn + (isBomb ? 1 : 0);
// return 0 + (undefined ? 1 : 0);
// return 0 + 0;
return 0;
```

Para la segunda iteración -> `bombsInColumn` es igual a `0` y `colOffset` es igual a `0`. Este ciclo lo llamaremos `REDUCE_1_2_FILA_1_COLUMNA_1`.

```js
// row = [false, true, false] <-- col para la primera iteración
// rowIndex = 0
// rowOffset = -1
// colIndex = 0
// neighborOffsets = [-1, 0, 1]

row.map((_, colIndex) => {
  const adjacentBombsCount = neighborOffsets.reduce(
    (totalBombs, rowOffset) =>
      totalBombs +
      neighborOffsets.reduce((bombsInColumn, colOffset) => {
        const neighborRow = rowIndex + rowOffset;
        const neighborCol = colIndex + colOffset;
        const isBomb = grid[neighborRow]?.[neighborCol];
        return bombsInColumn + (isBomb ? 1 : 0);
      }, 0),
    0,
  );
});

bombsInColumn = 0
colOffset = 0
```

```js
// const neighborRow = rowIndex + rowOffset;
const neighborRow = 0 + -1;
const neighborRow = -1;

// const neighborCol = colIndex + colOffset;
const neighborCol = 0 + 0;
const neighborCol = 0;

// const isBomb = grid[neighborRow]?.[neighborCol];
// const isBomb = grid[-1]?.[0];
const isBomb = undefined;

// return bombsInColumn + (isBomb ? 1 : 0);
// return 0 + (undefined ? 1 : 0);
// return 0 + 0;
return 0;
```

Para la tercera iteración -> `bombsInColumn` es igual a `0` y `colOffset` es igual a `1`. Este ciclo lo llamaremos `REDUCE_1_3_FILA_1_COLUMNA_1`.

```js
// row = [false, true, false] <-- col para la primera iteración
// rowIndex = 0
// rowOffset = -1
// colIndex = 0
// neighborOffsets = [-1, 0, 1]

row.map((_, colIndex) => {
  const adjacentBombsCount = neighborOffsets.reduce(
    (totalBombs, rowOffset) =>
      totalBombs +
      neighborOffsets.reduce((bombsInColumn, colOffset) => {
        const neighborRow = rowIndex + rowOffset;
        const neighborCol = colIndex + colOffset;
        const isBomb = grid[neighborRow]?.[neighborCol];
        return bombsInColumn + (isBomb ? 1 : 0);
      }, 0),
    0,
  );
});

bombsInColumn = 0
colOffset = 1
```

```js
// const neighborRow = rowIndex + rowOffset;
const neighborRow = 0 + -1;
const neighborRow = -1;

// const neighborCol = colIndex + colOffset;
const neighborCol = 0 + 1;
const neighborCol = 1;

// const isBomb = grid[neighborRow]?.[neighborCol];
// const isBomb = grid[-1]?.[1];
const isBomb = undefined;

// return bombsInColumn + (isBomb ? 1 : 0);
// return 0 + (undefined ? 1 : 0);
// return 0 + 0;
return 0;
```

Entonces para la primera iteración de `REDUCE_1_FILA_1_COLUMNA_1`, el resultado es `0`. Sumando `totalBombs` con el resultado de los 3 ciclos `reduce` -> `REDUCE_1_1_FILA_1_COLUMNA_1`, `REDUCE_1_2_FILA_1_COLUMNA_1` y `REDUCE_1_3_FILA_1_COLUMNA_1`

```js
// return totalBombs + neighborOffsets.reduce(...)
// return totalBombs + 0 + 0 + 0
// return totalBombs + 0
// return 0
return o
```

Ahora realizaremos la iteración para `REDUCE_2_FILA_1_COLUMNA_1`. Para la primera iteración -> `totalBombs` es igual a `0` y `rowOffset` es igual a `0`.

`TotalBombs` es igual a `0` porque para la primera iteración de `REDUCE_1_FILA_1_COLUMNA_1` el resultado fue `0`, como este es el acumulador su valor se mantuvo en `0` como desde el principio.

```js
// row = [false, true, false] <-- col para la primera iteración
// rowIndex = 0
// neighborOffsets = [-1, 0, 1]

row.map((_, colIndex) => {
  const adjacentBombsCount = neighborOffsets.reduce(
    (totalBombs, rowOffset) =>
      totalBombs +
      neighborOffsets.reduce((bombsInColumn, colOffset) => {
        const neighborRow = rowIndex + rowOffset;
        const neighborCol = colIndex + colOffset;
        const isBomb = grid[neighborRow]?.[neighborCol];
        return bombsInColumn + (isBomb ? 1 : 0);
      }, 0),
    0,
  );
});

totalBombs = 0
rowOffset = 0
```

Para la primera iteración -> `bombsInColumn` es igual a `0` y `colOffset` es igual a `-1`. Este ciclo lo llamaremos `REDUCE_2_1_FILA_1_COLUMNA_1`.

```js
// row = [false, true, false] <-- col para la primera iteración
// rowIndex = 0
// rowOffset = 0
// colIndex = 0
// neighborOffsets = [-1, 0, 1]

row.map((_, colIndex) => {
  const adjacentBombsCount = neighborOffsets.reduce(
    (totalBombs, rowOffset) =>
      totalBombs +
      neighborOffsets.reduce((bombsInColumn, colOffset) => {
        const neighborRow = rowIndex + rowOffset;
        const neighborCol = colIndex + colOffset;
        const isBomb = grid[neighborRow]?.[neighborCol];
        return bombsInColumn + (isBomb ? 1 : 0);
      }, 0),
    0,
  );
});

bombsInColumn = 0
colOffset = -1
```

```js
// const neighborRow = rowIndex + rowOffset;
const neighborRow = 0 + 0;
const neighborRow = 0;

// const neighborCol = colIndex + colOffset;
const neighborCol = 0 + -1;
const neighborCol = -1;

// const isBomb = grid[neighborRow]?.[neighborCol];
// const isBomb = grid[0]?.[-1];
const isBomb = undefined;

// return bombsInColumn + (isBomb ? 1 : 0);
// return 0 + (undefined ? 1 : 0);
// return 0 + 0;
return 0;
```

Para la segunda iteración -> `bombsInColumn` es igual a `0` y `colOffset` es igual a `0`. Este ciclo lo llamaremos `REDUCE_2_2_FILA_1_COLUMNA_1`.

```js
// row = [false, true, false] <-- col para la primera iteración
// rowIndex = 0
// rowOffset = 0
// colIndex = 0
// neighborOffsets = [-1, 0, 1]

row.map((_, colIndex) => {
  const adjacentBombsCount = neighborOffsets.reduce(
    (totalBombs, rowOffset) =>
      totalBombs +
      neighborOffsets.reduce((bombsInColumn, colOffset) => {
        const neighborRow = rowIndex + rowOffset;
        const neighborCol = colIndex + colOffset;
        const isBomb = grid[neighborRow]?.[neighborCol];
        return bombsInColumn + (isBomb ? 1 : 0);
      }, 0),
    0,
  );
});

bombsInColumn = 0
colOffset = 0
```

```js
// const neighborRow = rowIndex + rowOffset;
const neighborRow = 0 + 0;
const neighborRow = 0;

// const neighborCol = colIndex + colOffset;
const neighborCol = 0 + 0;
const neighborCol = 0;

// const isBomb = grid[neighborRow]?.[neighborCol];
// const isBomb = grid[0]?.[0];
const isBomb = false;

// return bombsInColumn + (isBomb ? 1 : 0);
// return 0 + (false ? 1 : 0);
// return 0 + 0;
return 0;
```

Para la tercera iteración -> `bombsInColumn` es igual a `0` y `colOffset` es igual a `1`. Este ciclo lo llamaremos `REDUCE_2_3_FILA_1_COLUMNA_1`.

```js
// row = [false, true, false] <-- col para la primera iteración
// rowIndex = 0
// rowOffset = 0
// colIndex = 0
// neighborOffsets = [-1, 0, 1]

row.map((_, colIndex) => {
  const adjacentBombsCount = neighborOffsets.reduce(
    (totalBombs, rowOffset) =>
      totalBombs +
      neighborOffsets.reduce((bombsInColumn, colOffset) => {
        const neighborRow = rowIndex + rowOffset;
        const neighborCol = colIndex + colOffset;
        const isBomb = grid[neighborRow]?.[neighborCol];
        return bombsInColumn + (isBomb ? 1 : 0);
      }, 0),
    0,
  );
});

bombsInColumn = 0
colOffset = 1
```

```js
// const neighborRow = rowIndex + rowOffset;
const neighborRow = 0 + 0;
const neighborRow = 0;

// const neighborCol = colIndex + colOffset;
const neighborCol = 0 + 1;
const neighborCol = 1;

// const isBomb = grid[neighborRow]?.[neighborCol];
// const isBomb = grid[0]?.[1];
const isBomb = true;

// return bombsInColumn + (isBomb ? 1 : 0);
// return 0 + (true ? 1 : 0);
// return 0 + 1;
return 1;
```

Entonces para la segunda iteración de `REDUCE_2_FILA_1_COLUMNA_1`, el resultado es `1`. Sumando `totalBombs` con el resultado de los 3 ciclos `reduce` -> `REDUCE_2_1_FILA_1_COLUMNA_1`, `REDUCE_2_2_FILA_1_COLUMNA_1` y `REDUCE_2_3_FILA_1_COLUMNA_1`

```js
// return totalBombs + neighborOffsets.reduce(...)
// return totalBombs + 0 + 0 + 1
// return totalBombs + 1
// return 0 + 1
return 1
```

Ahora realizaremos la iteración para `REDUCE_3_FILA_1_COLUMNA_1`. Para la primera iteración -> `totalBombs` es igual a `1` y `rowOffset` es igual a `1`. `TotalBombs` ahora es igual a `1` porque como este es el acumulador, su valor ya fue actualizado en la iteración anterior.

```js
// row = [false, true, false] <-- col para la primera iteración
// rowIndex = 0
// neighborOffsets = [-1, 0, 1]

row.map((_, colIndex) => {
  const adjacentBombsCount = neighborOffsets.reduce(
    (totalBombs, rowOffset) =>
      totalBombs +
      neighborOffsets.reduce((bombsInColumn, colOffset) => {
        const neighborRow = rowIndex + rowOffset;
        const neighborCol = colIndex + colOffset;
        const isBomb = grid[neighborRow]?.[neighborCol];
        return bombsInColumn + (isBomb ? 1 : 0);
      }, 0),
    0,
  );
});

totalBombs = 1
rowOffset = 1
```

Para la primera iteración -> `bombsInColumn` es igual a `0` y `colOffset` es igual a `-1`. Este ciclo lo llamaremos `REDUCE_3_1_FILA_1_COLUMNA_1`.

```js
// row = [false, true, false] <-- col para la primera iteración
// rowIndex = 0
// rowOffset = 1
// colIndex = 0
// neighborOffsets = [-1, 0, 1]

row.map((_, colIndex) => {
  const adjacentBombsCount = neighborOffsets.reduce(
    (totalBombs, rowOffset) =>
      totalBombs +
      neighborOffsets.reduce((bombsInColumn, colOffset) => {
        const neighborRow = rowIndex + rowOffset;
        const neighborCol = colIndex + colOffset;
        const isBomb = grid[neighborRow]?.[neighborCol];
        return bombsInColumn + (isBomb ? 1 : 0);
      }, 0),
    0,
  );
});

bombsInColumn = 0
colOffset = -1
```

```js
// const neighborRow = rowIndex + rowOffset;
const neighborRow = 0 + 1;
const neighborRow = 1;

// const neighborCol = colIndex + colOffset;
const neighborCol = 0 + -1;
const neighborCol = -1;

// const isBomb = grid[neighborRow]?.[neighborCol];
// const isBomb = grid[1]?.[-1];
const isBomb = undefined;

// return bombsInColumn + (isBomb ? 1 : 0);
// return 0 + (undefined ? 1 : 0);
// return 0 + 0;

return 0;
```

Para la segunda iteración -> `bombsInColumn` es igual a `0` y `colOffset` es igual a `0`. Este ciclo lo llamaremos `REDUCE_3_2_FILA_1_COLUMNA_1`.

```js
// row = [false, true, false] <-- col para la primera iteración
// rowIndex = 0
// rowOffset = 1
// colIndex = 0
// neighborOffsets = [-1, 0, 1]

row.map((_, colIndex) => {
  const adjacentBombsCount = neighborOffsets.reduce(
    (totalBombs, rowOffset) =>
      totalBombs +
      neighborOffsets.reduce((bombsInColumn, colOffset) => {
        const neighborRow = rowIndex + rowOffset;
        const neighborCol = colIndex + colOffset;
        const isBomb = grid[neighborRow]?.[neighborCol];
        return bombsInColumn + (isBomb ? 1 : 0);
      }, 0),
    0,
  );
});

bombsInColumn = 0
colOffset = 0
```

```js
// const neighborRow = rowIndex + rowOffset;
const neighborRow = 0 + 1;
const neighborRow = 1;

// const neighborCol = colIndex + colOffset;
const neighborCol = 0 + 0;
const neighborCol = 0;

// const isBomb = grid[neighborRow]?.[neighborCol];
// const isBomb = grid[1]?.[0];
const isBomb = true;

// return bombsInColumn + (isBomb ? 1 : 0);
// return 0 + (true ? 1 : 0);
// return 0 + 1;
return 1;
```

Para la tercera iteración -> `bombsInColumn` es igual a `0` y `colOffset` es igual a `1`. Este ciclo lo llamaremos `REDUCE_3_3_FILA_1_COLUMNA_1`.

```js
// row = [false, true, false] <-- col para la primera iteración
// rowIndex = 0
// rowOffset = 1
// colIndex = 0
// neighborOffsets = [-1, 0, 1]

row.map((_, colIndex) => {
  const adjacentBombsCount = neighborOffsets.reduce(
    (totalBombs, rowOffset) =>
      totalBombs +
      neighborOffsets.reduce((bombsInColumn, colOffset) => {
        const neighborRow = rowIndex + rowOffset;
        const neighborCol = colIndex + colOffset;
        const isBomb = grid[neighborRow]?.[neighborCol];
        return bombsInColumn + (isBomb ? 1 : 0);
      }, 0),
    0,
  );
});

bombsInColumn = 0
colOffset = 1
```

```js
// const neighborRow = rowIndex + rowOffset;
const neighborRow = 0 + 1;
const neighborRow = 1;

// const neighborCol = colIndex + colOffset;
const neighborCol = 0 + 1;
const neighborCol = 1;

// const isBomb = grid[neighborRow]?.[neighborCol];
// const isBomb = grid[1]?.[1];
const isBomb = false;

// return bombsInColumn + (isBomb ? 1 : 0);
// return 0 + (false ? 1 : 0);
// return 0 + 0;
return 0;
```

Entonces para la tercera iteración de `REDUCE_3_FILA_1_COLUMNA_1`, el resultado es `1`. Sumando `totalBombs` con el resultado de los 3 ciclos `reduce` -> `REDUCE_3_1_FILA_1_COLUMNA_1`, `REDUCE_3_2_FILA_1_COLUMNA_1` y `REDUCE_3_3_FILA_1_COLUMNA_1`

```js
// return totalBombs + neighborOffsets.reduce(...)
// return totalBombs + 0 + 1 + 0
// return totalBombs + 1
// return 1 + 1
return 2
```

Entonces para la primera iteración de `MAP_FILA_1_COLUMNA_1`, el resultado es `2`. Sumando `totalBombs` con el resultado de los 3 ciclos `reduce` -> `REDUCE_1_FILA_1_COLUMNA_1`, `REDUCE_2_FILA_1_COLUMNA_1` y `REDUCE_3_FILA_1_COLUMNA_1`

```js
// const adjacentBombsCount = neighborOffsets.reduce(
//   (totalBombs, rowOffset) =>
//     totalBombs + neighborOffsets.reduce(...)
//     totalBombs + 2
//     0 + 2

const adjacentBombsCount = 2
```

Antes de terminar con el ciclo `MAP_FILA_1_COLUMNA_1`, retornamos el valor de `adjacentBombsCount` menos `1` si la celda actual es una bomba.

```js
// return adjacentBombsCount - (grid[rowIndex][colIndex] ? 1 : 0);
// return adjacentBombsCount - (grid[0][0] ? 1 : 0);
// return adjacentBombsCount - (false ? 1 : 0);
// return adjacentBombsCount - 0;
// return 2 - 0;
return 2;
```

Entonces para la primera iteración de `MAP_FILA_1_COLUMNA_1`, el resultado es `2`.

Para no hacer más largo este README, simplemente realizaremos el mismo proceso para las siguientes iteraciones pero sin explicar cada paso. Solo mostraremos el resultado final.

Asi quedaría mapeada la cuadricula simulando las operaciones

```js
[
  ['MAP_FILA_1_COLUMNA_1', 'MAP_FILA_1_COLUMNA_2', 'MAP_FILA_1_COLUMNA_3'],
  ['MAP_FILA_2_COLUMNA_1', 'MAP_FILA_2_COLUMNA_2', 'MAP_FILA_2_COLUMNA_3'],
  ['MAP_FILA_3_COLUMNA_1', 'MAP_FILA_3_COLUMNA_2', 'MAP_FILA_3_COLUMNA_3'],
]
```

Para `MAP_FILA_1_COLUMNA_1` el resultado es `2`.

- `REDUCE_1_FILA_1_COLUMNA_1` -> `2`
- Celda actual no es una bomba -> `2 - 0 = 2`

Para `MAP_FILA_1_COLUMNA_2` el resultado es `2`.

- `REDUCE_2_FILA_1_COLUMNA_2` -> `3`
- Celda actual es una bomba -> `3 - 1 = 2`

Para `MAP_FILA_1_COLUMNA_3` el resultado es `2`.

- `REDUCE_3_FILA_1_COLUMNA_3` -> `2`
- Celda actual no es una bomba -> `2 - 0 = 2`

Para `MAP_FILA_2_COLUMNA_1` el resultado es `2`.

- `REDUCE_1_FILA_2_COLUMNA_1` -> `3`
- Celda actual es una bomba -> `3 - 1 = 2`

Para `MAP_FILA_2_COLUMNA_2` el resultado es `4`.

- `REDUCE_2_FILA_2_COLUMNA_2` -> `4`
- Celda actual no es una bomba -> `4 - 0 = 4`

Para `MAP_FILA_2_COLUMNA_3` el resultado es `2`.

- `REDUCE_3_FILA_2_COLUMNA_3` -> `3`
- Celda actual es una bomba -> `3 - 1 = 2`

Para `MAP_FILA_3_COLUMNA_1` el resultado es `2`.

- `REDUCE_1_FILA_3_COLUMNA_1` -> `2`
- Celda actual no es una bomba -> `3 - 0 = 3`

Para `MAP_FILA_3_COLUMNA_2` el resultado es `2`.

- `REDUCE_2_FILA_3_COLUMNA_2` -> `3`
- Celda actual es una bomba -> `3 - 1 = 2`

Para `MAP_FILA_3_COLUMNA_3` el resultado es `2`.

- `REDUCE_3_FILA_3_COLUMNA_3` -> `2`
- Celda actual no es una bomba -> `2 - 0 = 2`

Entonces la cuadrícula mapeada que es la respuesta final es:

```js
[
  [2, 2, 2],
  [2, 4, 2],
  [2, 2, 2],
]
```

Y eso es todo, hemos mapeado la cuadrícula. 🎉
