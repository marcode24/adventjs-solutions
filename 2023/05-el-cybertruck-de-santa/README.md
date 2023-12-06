# Reto 05: El cybertruck de santa

## Problema

Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:

- **. = Carretera**
- **S = Trineo de Santa**
- **\* = Barrera abierta**
- **| = Barrera cerrada**

Ejemplo de carretera: `S...|....|.....`

Cada unidad de tiempo, **el trineo avanza una posición a la derecha.** Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

**Todas las barreras empiezan cerradas,** pero después de 5 unidades de tiempo, se abren todas **para siempre.**

**Crea una función que simule el movimiento del trineo** durante un tiempo dado y **devuelva un array** de cadenas representando el estado de la carretera en cada unidad de tiempo:

```js
const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/
```

El resultado es un **array donde cada elemento muestra la carretera en cada unidad de tiempo.**

Ten en cuenta que **si el trineo está en la misma posición que una barrera,** entonces toma su lugar en el array.

Los elfos **se inspiraron en este reto de Code Wars.**

## Mi solución

```js
const cyberReindeer = (road, time) => {
  const moves = [road];
  let currentPosition = 0;
  let b = '.';

  for (let position = 1; position < time; position++) {
    if (position === 5) road = road.replace(/\|/g, '*');
    const newRoad = road.replace(/S[.*]/, `${b}S`);

    if (newRoad !== road) {
      currentPosition++;
      b = road[currentPosition];
    }

    road = newRoad;
    moves.push(road);
  }

  return moves;
};
```

## Explicación de mi solución

1. Creo un array `moves` donde voy a guardar el estado de la carretera en cada unidad de tiempo.
2. Creo una variable `currentPosition` que me va a indicar la posición actual del trineo en la carretera.
3. Creo una variable `b` que me va a indicar el estado de la barrera en la posición actual del trineo.
4. Recorro la carretera `time` veces.
5. Si la posición actual es igual a 5, entonces reemplazo todas las barreras `|` por barreras abiertas `*`.
6. Creo una nueva carretera `newRoad` donde reemplazo la posición actual del trineo `S` por el estado de la barrera `b` y el trineo `S`.
7. Si la nueva carretera es diferente a la carretera anterior, entonces incremento la posición actual del trineo y actualizo el estado de la barrera `b`.
8. Actualizo la carretera `road` con la nueva carretera `newRoad`.
9. Agrego la carretera `road` al array `moves`.
10. Retorno el array `moves`.
