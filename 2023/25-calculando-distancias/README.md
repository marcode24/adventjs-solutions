# Reto 25: Calculando distancias

## Problema

**Ya ha entregado Santa Claus 🎅 todos los regalos** a los niños pero quieren revisar si pueden mejorar de cara al año que viene.

Los elfos quieren saber c**uántos movimientos ha hecho Santa Claus** 🛷 para entregar todos los regalos. Para ello, te dan un mapa de la ciudad con la ubicación de cada niño y de Santa.

El mapa es una cadena de texto multi línea donde cada caracter representa una casilla. Los niños se representan por números del 1 al 9 y Santa Claus por la letra S. El resto de casillas son .

Santa Claus sólo puede moverse hacia arriba, abajo, izquierda o derecha, y cada movimiento cuenta como 1 km. Además, siempre empieza en la posición S y debe entregar los regalos en orden, del 1 al 9.

```js
const map = `.....1....
..S.......
..........
....3.....
......2...`

const result = travelDistance(map)
console.log(result) // -> 12 km
/*
De la S al niño 1: 4 movimientos
Del niño 1 al 2: 5 movimientos
Del niño 2 al 3: 3 movimientos
Total: 12 movimientos
*/

const result2 = travelDistance(`..S.1...`)
console.log(result2) // -> 2
```

Escribe una función travelDistance que reciba un mapa y devuelva la distancia total que ha recorrido Santa Claus según la posición de los niños.

Ten en cuenta que:

- El mapa no tiene por qué ser cuadrado.
- El mapa siempre tendrá al menos un niño.
- El mapa siempre tendrá una posición inicial para Santa Claus.
- Los números de los niños nunca se repiten.

## Mi solución

```js
function travelDistance(map) {
  const roadmapArr = map.split('\n');
  const roadmap = roadmapArr.join('');
  const rows = roadmapArr.length;
  const cols = roadmapArr[0].length;
  const len = roadmap.length;
  const santaPos = roadmap.indexOf('S');

  let gift = 1;
  let movements = 0;
  let santaCol = santaPos % cols;
  let santaRow = Math.floor((santaPos * rows) / len);
  const numbers = roadmap.replace(/\.|S/g, '');

  // eslint-disable-next-line no-restricted-syntax, no-underscore-dangle, no-unused-vars
  for (const _num of numbers) {
    const giftPos = roadmap.indexOf(`${gift}`);
    const giftCol = giftPos % cols;
    const giftRow = Math.floor((giftPos * rows) / len);
    movements += Math.abs(santaRow - giftRow);
    movements += Math.abs(santaCol - giftCol);
    santaCol = giftCol;
    santaRow = giftRow;
    gift++;
  }
  return movements;
}
```
