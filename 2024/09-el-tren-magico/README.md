# Reto 09: El-tren-magico

Los elfos están jugando con un tren 🚂 **mágico que transporta regalos.** Este tren se mueve en un tablero representado por un **array de strings.**

El tren está compuesto por una locomotora `(@)`, seguida de sus vagones `(o)`, y debe recoger frutas mágicas `(*)` que le sirve de combustible. El movimiento del tren sigue las siguientes reglas:

Recibirás dos parámetros `board` y `mov`.

`board` es un array de strings que representa el tablero:

- `@` es la locomotora del tren.
- `o` son los vagones del tren.
- `*` es una fruta mágica.
- `·` son espacios vacíos.

`mov` es un string que indica el próximo movimiento del tren desde la cabeza del tren `@`:

- `'L'`: izquierda
- `'R'`: derecha
- `'U'`: arriba
- `'D'`: abajo.

Con esta información, debes devolver una cadena de texto:

- `'crash'`: Si el tren choca contra los bordes del tablero o contra sí mismo.
- `'eat'`: Si el tren recoge una fruta mágica `(*)`.
- `'none'`: Si avanza sin chocar ni recoger ninguna fruta mágica.

**Ejemplo:**

```js
const board = ['·····', '*····', '@····', 'o····', 'o····']

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha
```

## Mi solución explicada

```js
function moveTrain(board, mov) {
  const directions = {
    U: (row, col) => board[row - 1]?.[col],
    D: (row, col) => board[row + 1]?.[col],
    R: (row, col) => board[row][col + 1],
    L: (row, col) => board[row][col - 1],
  };

  const flatBoard = board.join('');
  const trainHeadIndex = flatBoard.indexOf('@');

  const totalColumns = board[0].length;
  const currentRow = Math.floor(trainHeadIndex / totalColumns);
  const currentColumn = trainHeadIndex % totalColumns;

  const nextCell = directions[mov](currentRow, currentColumn);

  const results = {
    '*': 'eat',
    '·': 'none',
  };

  return results[nextCell] || 'crash';
}
```

Para resolver este reto, debemos tener en cuenta que el tren se mueve en un tablero representado por un array de strings. Por lo tanto, necesitamos saber la posición actual de la cabeza del tren y la dirección en la que se moverá.

Para ello, creamos un objeto `directions` que contiene las funciones para obtener la celda siguiente en cada dirección. Luego, unimos el tablero en un solo string para encontrar la posición de la cabeza del tren y calcular la fila y columna actuales.

Después, obtenemos la celda siguiente y devolvemos el resultado según el contenido de la celda. Si no hay resultado, devolvemos `'crash'`.

**Veamos con un ejemplo cómo funciona este mecanismo:**

Antes de empezar, necesitamos entender cómo se mueve el tren en el tablero. Para ello, creamos un objeto `directions` que contiene las funciones para obtener la siguiente celda en cada dirección:

```js
const directions = {
  U: (row, col) => board[row - 1]?.[col],
  D: (row, col) => board[row + 1]?.[col],
  R: (row, col) => board[row][col + 1],
  L: (row, col) => board[row][col - 1],
};
```

**¿Como es que funciona esto?**

- Si el tren se mueve hacia arriba `U`, entonces la celda siguiente será la fila anterior y la misma columna. Por ejemplo, si la cabeza del tren está en la fila 3 y columna 1, entonces la celda siguiente será la fila 2 y la misma columna que es 1.

```txt
  1 2 3 4 5        1 2 3 4 5
1 · · · · ·      1 · · · · ·
2 · · · · ·      2 @ · · · ·
3 @ · · · · -->  3 o · · · ·
4 o · · · ·      4 o · · · ·
5 o · · · ·      5 · · · · ·
```

- Si el tren se mueve hacia abajo `D`, entonces la celda siguiente será la fila siguiente y la misma columna. Por ejemplo, si la cabeza del tren está en la fila 2 y columna 3, entonces la celda siguiente será la fila 3 y la misma columna que es 3.

```txt
  1 2 3 4 5        1 2 3 4 5
1 · · · · ·      1 · · · · ·
2 o o @ · ·      2 . o o . .
3 . . . . . -->  3 . . @ . .
4 . . . . .      4 . . . . .
5 . . . . .      5 . . . . .
```

- Si el tren se mueve hacia la derecha, entonces la celda siguiente será la misma fila y la columna siguiente. Por ejemplo, si la cabeza del tren está en la fila 3 y columna 1, entonces la celda siguiente será la misma fila que es 3 y la columna 2.

```txt
  1 2 3 4 5        1 2 3 4 5
1 · · · · ·      1 · · · · ·
2 · · · · ·      2 · · · · ·
3 @ · · · · -->  3 o @ · · ·
4 o · · · ·      4 o · · · ·
5 o · · · ·      5 · · · · ·
```

- Si el tren se mueve hacia la izquierda, entonces la celda siguiente será la misma fila y la columna anterior. Por ejemplo, si la cabeza del tren está en la fila 2 y columna 3, entonces la celda siguiente será la misma fila que es 2 y la columna 2.

```txt
  1 2 3 4 5        1 2 3 4 5
1 · · · · ·      1 · · · · ·
2 · · @ · ·      2 · @ o · ·
3 · · o · · -->  3 · · o · ·
4 · · o · ·      4 · · · · ·
5 · · · · ·      5 · · · · ·
```

**En las dos primeras opciones utilizamos el operador de encadenamiento opcional `?.` para evitar errores si la fila o columna no existen.** Por ejemplo, si el tren está en la fila 0 y se mueve hacia arriba, entonces la fila -1 no existe y devolverá `undefined`. Lo mismo sucede si el tren está en la última fila y se mueve hacia abajo. En ambos casos, no habrá problemas.

Ahora, supongamos que tenemos el siguiente tablero:

```js
const board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
];
```

Simularemos los 4 movimientos posibles del tren `L` - izquierda, `R` - derecha, `U` - arriba, `D` - abajo.

Para el movimiento hacia la izquierda `L` tenemos lo siguiente:

Primero, unimos el tablero en un solo string para encontrar la posición de la cabeza del tren y calcular la fila y columna actuales:

```js
const flatBoard = board.join('');
// flatBoard = '·····*····@····o····o····'
```

Luego, encontramos la posición de la cabeza del tren, para ello utilizamos el método `indexOf` para encontrar la primera aparición de `@` en el tablero. Por ejemplo, si la cabeza del tren está en la posición 15, entonces `trainHeadIndex = 15`. Si la cabeza del tren no existe, entonces `trainHeadIndex = -1`. En este caso, la cabeza del tren existe.

```js
// const trainHeadIndex = flatBoard.indexOf('@');
// const trainHeadIndex = '·····*····@····o····o····'.indexOf('@');
const trainHeadIndex = 10
```

Calculamos la fila y columna actuales

- Para el total de columnas, obtenemos la longitud de la primera fila del tablero.
- Para la fila actual, dividimos la posición de la cabeza del tren entre el total de columnas. Utilizamos `Math.floor` para redondear hacia abajo. Por ejemplo, si la cabeza del tren está en la posición 15 y hay 5 columnas, entonces la fila actual será 3. Esto se debe a que `15 / 5 = 3`.

```js
const totalColumns = board[0].length;
// totalColumns = '·····'.length
// totalColumns = 5

const currentRow = Math.floor(trainHeadIndex / totalColumns);
// currentRow = Math.floor(10 / 5)
// currentRow = Math.floor(2)
// currentRow = 2
```

Para la columna actual, obtenemos el módulo de la posición de la cabeza del tren entre el total de columnas. Por ejemplo, si la cabeza del tren está en la posición 15 y hay 5 columnas, entonces la columna actual será 0. Esto se debe a que `15 % 5 = 0`. Otro ejemplo, si la cabeza del tren está en la posición 16 y hay 5 columnas, entonces la columna actual será 1. Esto se debe a que `16 % 5 = 1`.

```js
const currentColumn = trainHeadIndex % totalColumns;
// currentColumn = 10 % 5
// currentColumn = 0
```

Ahora, obtenemos la siguiente celda según la dirección del tren. En este instante nuestro tablero se visualiza así:

```js
[
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
]
```

Retomemos la fórmula para obtener la siguiente celda según la dirección del tren, en este caso, hacia la izquierda `L`, nuestro formulario nos dice que la fórmula es `board[row][col - 1]`.

Al realizar las sustituciones tenemos que primero `board[2]` nos da `'@····'`, despues como la formula es `board[row][col - 1]` entonces `board[2][0 - 1]` resulta `board[2][-1]` dando como resultado `undefined` y por ende el tren choca contra la pared. (Podemos ver en el tablero que es evidente que el tren choca contra la pared si se mueve hacia la izquierda)

```js
const board = [
  '·····',
  '*····',
  '@····', // <-- board[2]
  'o····',
  'o····'
];
```

Entonces tenemos que la ejecución de `directions[mov](currentRow, currentColumn)` nos devuelve `undefined`

```js
// const nextCell = directions[mov](currentRow, currentColumn);
// const nextCell = directions['L'](2, 0);
const nextCell = undefined;
```

Finalmente, declaramos un objeto `results` que contiene los resultados posibles según el contenido de la siguiente celda: si es una fruta mágica `'*'`, entonces devolvemos `'eat'`; si es un espacio vacío `'·'`, entonces devolvemos `'none'`; en caso contrario, devolvemos `'crash'`.

```js
const results = {
  '*': 'eat',
  '·': 'none',
};
```

Vevolvemos el resultado según el contenido de la celda siguiente. Si no hay resultado, devolvemos `'crash'`.

```js
return results[nextCell] || 'crash';
// return results[undefined] || 'crash';
// return undefined || 'crash';
// return 'crash';
```

Para este primer movimiento hacia la izquierda `L`, nuestro resultado es `'crash'`.

Para los siguientes movimientos `R`, `U`, `D`, nos basaremos en el mismo tablero, por lo tanto, el cálculo de la fila y columna actuales será el mismo. Solo cambia la dirección del tren y la celda siguiente. Entonces tenemos que:

```js
const flatBoard = board.join(''); // --> '·····*····@····o····o····'
const trainHeadIndex = flatBoard.indexOf('@'); // --> 10
const totalColumns = board[0].length; // --> 5
const currentRow = Math.floor(trainHeadIndex / totalColumns); // --> 2
const currentColumn = trainHeadIndex % totalColumns; // --> 0
```

Para el movimiento hacia la derecha `R` tenemos lo siguiente:

Nuestro tablero se visualiza así:

```js
[
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
]
```

Al realizar el movimiento tenemos que `board[2]` nos da `'@····'`, despues como la formula es `board[row][col + 1]` entonces `board[2][0 + 1]` resulta `board[2][1]` dando como resultado `'·'`, ya que la celda siguiente es un espacio vacío. (Podemos ver en el tablero que es evidente que el tren avanza sin chocar ni recoger ninguna fruta mágica si se mueve hacia la derecha)

```js
const board = [
  '·····',
  '*····',
  '@····', // <-- board[2]
  'o····',
  'o····'
];
```

```txt
0 1 2 3 4
@ · · · · // <-- board[2]

1
·       // <-- board[2][1]
```

```js
const nextCell = directions[mov](currentRow, currentColumn);
// const nextCell = directions['R'](2, 0);
// const nextCell = directions['R'](2, 0);
// const nextCell = board[2][0 + 1];
// const nextCell = board[2][1];
// const nextCell = '·';
```

Finalmente, devolvemos el resultado según el contenido de la celda siguiente. Si no hay resultado, devolvemos `'crash'`.

```js
// return results[nextCell] || 'crash';
// return results['·'] || 'crash';
// return 'none' || 'crash';
return 'none';
```

Nuestro resultado es `'none'` para el movimiento hacia la derecha `R`.

Para el movimiento hacia arriba `U` tenemos lo siguiente:

Nuestro tablero se visualiza así:

```js
[
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
]
```

Al realizar el movimiento tenemos que la formula es `board[row - 1]?.[col]`, entonces de primer instancia tenemos que `board[2 - 1]` resulta `board[1]` y este nos da `'*····'`, despues como la formula es `board[row - 1]?.[col]` entonces `board[1].?[0]` resulta `'*'`, y por ende el tren recoge una fruta mágica. (Podemos ver en el tablero que es evidente que el tren recoge una fruta mágica si se mueve hacia arriba)

```js
const board = [
  '·····',
  '*····', // <-- board[1]
  '@····',
  'o····',
  'o····'
];
```

```txt
0 1 2 3 4
* · · · · // <-- board[1]

1
@       // <-- board[1][0]
```

```js
const nextCell = directions[mov](currentRow, currentColumn);
// const nextCell = directions['U'](2, 0);
// const nextCell = directions['U'](2, 0);
// const nextCell = board[2 - 1]?.[0];
// const nextCell = board[1]?.[0];
// const nextCell = '*';
```

Finalmente, devolvemos el resultado según el contenido de la celda siguiente. Si no hay resultado, devolvemos `'crash'`.

```js
// return results[nextCell] || 'crash';
// return results['*'] || 'crash';
// return 'eat' || 'crash';
return 'eat';
```

Nuestro resultado es `'eat'` para el movimiento hacia arriba `U`.

Para nuestro último movimiento hacia abajo `D` tenemos lo siguiente:

Nuestro tablero se visualiza así:

```js
[
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
]
```

Al realizar el movimiento tenemos que la formula es `board[row + 1]?.[col]`, entonces de primer instancia tenemos que `board[2 + 1]` resulta `board[3]` y este nos da `'o····'`, despues como la formula es `board[row + 1]?.[col]` entonces `board[3].?[0]` resulta `'o'`, y por ende el tren choca contra sí mismo. (Podemos ver en el tablero que es evidente que el tren choca contra sí mismo si se mueve hacia abajo)

```js
const board = [
  '·····',
  '*····',
  '@····',
  'o····', // <-- board[3]
  'o····'
];

```

```txt
0 1 2 3 4
o · · · · // <-- board[3]

1
o       // <-- board[3][0]
```

```js
const nextCell = directions[mov](currentRow, currentColumn);
// const nextCell = directions['D'](2, 0);
// const nextCell = directions['D'](2, 0);
// const nextCell = board[2 + 1]?.[0];
// const nextCell = board[3]?.[0];
// const nextCell = 'o';
```

Finalmente, devolvemos el resultado según el contenido de la celda siguiente. Si no hay resultado, devolvemos `'crash'`.

```js
// return results[nextCell] || 'crash';
// return results['o'] || 'crash';
// return undefined || 'crash';
return 'crash';
```

Nuestro resultado es `'crash'` para el movimiento hacia abajo `D`.

Y asi es como funciona este algoritmo para determinar si el tren choca contra los bordes del tablero o contra sí mismo, o si recoge una fruta mágica. 🚂✨
