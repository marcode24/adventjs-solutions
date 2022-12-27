# Reto 24: El último reto es un laberinto

## Problema

¡Ha llegado el día! Hoy vamos a repartir los regalos… pero los almacenes son un labertinto y los elfos están perdidos.

Indielfo Jones quiere escribir un programa que al recibir una matriz, sepa si puede salir o no del laberinto rápidamente desde su entrada a la salida.

Los laberintos tienen las siguientes posiciones:

- W: Es una pared, no se puede pasar por ahí.
- S: Punto de entrada al almacén.
- E: Punto de salida del almacén.
- : Los espacios en blanco es por donde se puede pasar.

Los movimientos válidos son de una posición hacia arriba, abajo, izquierda o derecha. No se puede mover en diagonal.

```js
canExit([
  [" ", " ", "W", " ", "S"],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", "W", " "],
  ["W", "W", " ", "W", "W"],
  [" ", " ", " ", " ", "E"],
]); // -> true

// Se puede salir porque empezamos en [0, 4]
// y hay un camino hasta la salida que es [4, 4]

canExit([
  [" ", " ", "W", "W", "S"],
  [" ", " ", " ", "W", " "],
  [" ", " ", " ", "W", " "],
  ["W", "W", " ", "W", "W"],
  [" ", " ", " ", " ", "E"],
]); // -> false

// No hay manera de llegar de [0, 4] a [4, 4]
```

**Recuerda que:**

- Sólo tienes que devolver si se puede salir del laberinto con un booleano.
- Las paredes W no se pueden saltar.
- No se pueden salir de los límites de la matriz, siempre hay que seguir un camino interno.

## Mi Solución

```js
function canExit(maze) {
  const start = maze.findIndex((row) => row.includes("S"));
  const end = maze.findIndex((row) => row.includes("E"));
  const queue = [];
  const visited = new Set();
  queue.push(start * maze[0].length + maze[start].indexOf("S"));

  while (queue.length > 0) {
    const current = queue.shift();
    const row = Math.floor(current / maze[0].length);
    const col = current % maze[0].length;

    if (maze[row][col] === "W" || visited.has(current)) continue;
    visited.add(current);

    if (current === end * maze[0].length + maze[end].indexOf("E")) return true;

    if (row > 0) queue.push(current - maze[0].length);
    if (row < maze.length - 1) queue.push(current + maze[0].length);
    if (col > 0) queue.push(current - 1);
    if (col < maze[0].length - 1) queue.push(current + 1);
  }
  return false;
}
```

solucion por fuerza bruta de la comunidad

```js
function canExit(maze) {
  function replace(str) {
    return str
      .replace(/[S][\sE]/g, "SS")
      .replace(/[\sE][S]/g, "SS")
      .split("");
  }
  const queue = [];
  new Array(maze[0].length * maze.length).fill(0).forEach(() => {
    const check = [...maze];
    maze.forEach((horizontal, index) => {
      maze[index] = replace(horizontal.join(""));
      const v = maze[0].map((_, i) => replace(maze.map((x) => x[i]).join("")));
      maze[index] = v.map((x) => x[index]);
    });
    check.flat().join("") === maze.flat().join("") && queue.push(check);
  });
  return !queue.flat(2).includes("E");
}
```
