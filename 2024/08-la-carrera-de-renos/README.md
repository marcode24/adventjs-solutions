# Reto 08: La-carrera-de-renos

**¡Es hora de seleccionar a los renos más rápidos para los viajes de Santa! 🦌🎄**
Santa Claus ha organizado unas emocionantes carreras de renos para decidir cuáles están en mejor forma.

Tu tarea es mostrar el progreso de cada reno en una pista de nieve en **formato isométrico.**

La información que recibes:

- `indices:` Un array de enteros que representan el progreso de cada reno en la pista:
- `0:` El carril está vacío.
- `Número positivo:` La posición actual del reno desde el inicio de la pista.
- `Número negativo:` La posición actual del reno desde el final de la pista.
- `length:` La longitud de cada carril.
Devuelve un string que represente la pista de la carrera:

- Cada carril tiene exactamente length posiciones llenas de nieve `(~)`.
- Cada reno se representa con la letra `r`.
- Los carriles están numerados al final con `/1`, `/2`, etc.
- La vista es isométrica, por lo que los carriles inferiores están desplazados hacia la derecha.

**Ejemplos:**

```js
drawRace([0, 5, -3], 10)
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

drawRace([2, -1, 0, 5], 8)
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

drawRace([3, 7, -2], 12)
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~~r~~~ /2
~~~~~~~~~r~~ /3
*/
```

## Mi solución explicada

```js
function drawRace(indices, length) {
  return indices
    .map((progress, laneIndex) => {
      const trackLine = [...'~'.repeat(length)];

      if (progress !== 0) {
        const renoPosition = progress > 0 ? progress : length + progress;
        trackLine[renoPosition] = 'r';
      }

      const isometricOffset = ' '.repeat(indices.length - laneIndex - 1);
      const trackLineStr = trackLine.join('');
      return `${isometricOffset}${trackLineStr} /${laneIndex + 1}`;
    })
    .join('\n');
}
```

Para solucionar este problema tenemos que recorrer cada uno de los carriles y en cada uno de ellos, recorrer cada una de las posiciones de la pista de nieve y colocar la letra `r` en la posición correspondiente al progreso del reno.

Para ello, utilizamos el método `map` para recorrer cada uno de los carriles y en cada uno de ellos, creamos un array con la longitud de la pista de nieve, lleno de caracteres `~`.

Como `map` nos devuelve un nuevo array, podemos modificar el array original y devolver un nuevo array con las modificaciones necesarias.

Hay que tener en cuenta que la vista es isométrica, por lo que los carriles inferiores están desplazados hacia la derecha. Para ello, creamos un string con espacios en blanco, cuya longitud será la longitud de la pista de nieve menos el índice del carril menos `1`.

**Veamos con un ejemplo cómo se resuelve el problema:**

```js
drawRace([2, -1, 0, 5], 8)
```

*Este ejemplo me gusta porque abarca todos los casos posibles*

Como `indices` tiene 4 elementos, realizamos 4 iteraciones, una por cada carril.

Para el primer carril, con progreso `2`, la posición del reno será la `2`, por lo que colocamos la letra `r` en la posición `2` del array de la pista de nieve. Muy importante recordar que los arrays en JavaScript empiezan en la posición `0`, por lo que la posición `2` será la tercera posición del array.

Nuestro `trackLine` de primer inicio lo construiremos dibujando la pista de nieve con la longitud de `8` posiciones. Para ello utilizamos el método `repeat` para repetir el caracter `~` `8` veces.

```js
const trackLine = [...'~'.repeat(8)];
// ['~', '~', '~', '~', '~', '~', '~', '~']
```

Ahora, validamos si el progreso del reno es diferente de `0`, si es así, calculamos la posición del reno en la pista de nieve. Si el progreso es positivo, la posición del reno será la misma que el progreso, si es negativo, la posición del reno será la longitud de la pista de nieve más el progreso, dando como resultado la posición del reno desde el final de la pista hacia atrás.

```js
if (progress !== 0) {
  const renoPosition = progress > 0 ? progress : length + progress;
  trackLine[renoPosition] = 'r';
}
```

Como `progres` para el primer carril es `2`, la posición del reno será la `2`, por lo que colocamos la letra `r` en la posición `2` del array de la pista de nieve.

```js
// const renoPosition = progress > 0 ? progress : length + progress;
// const renoPosition = 2 > 0 ? 2 : 8 + 2;
// como 2 es mayor que 0, renoPosition = 2
const renoPosition = 2;

// trackLine[renoPosition] = 'r';
// trackLine[2] = 'r';
trackLine[renoPosition] = 'r';

// ['~', '~', 'r', '~', '~', '~', '~', '~']
```

Ahora, creamos un string con el offset isométrico, que será un string con espacios en blanco, cuya longitud será la longitud de la pista de nieve menos el índice del carril menos `1`. Para esta primera iteración `laneIndex` es `0`. Por lo que el offset isométrico serán `3` espacios en blanco.

```js
// const isometricOffset = ' '.repeat(indices.length - laneIndex - 1);
// const isometricOffset = ' '.repeat(4 - 0 - 1);
// const isometricOffset = ' '.repeat(3);
const isometricOffset = '   ';
```

Unimos el array de la pista de nieve con su progreso si es que tiene

```js
// const trackLineStr = trackLine.join('');
// const trackLineStr = ['~', '~', 'r', '~', '~', '~', '~', '~'].join('');
const trackLineStr = '~~r~~~~~';
```

Finalmente, retornamos el string con el offset isométrico y la pista de nieve con su progreso

```js
// return `${isometricOffset}${trackLineStr} /${laneIndex + 1}`;
// return `   ~~r~~~~~ /1`;
return `   ~~r~~~~~ /1`;
```

Para el segundo carril, con progreso `-1`, la posición del reno será la `7`, por lo que colocamos la letra `r` en la posición `7` del array de la pista de nieve.

```js
const trackLine = [...'~'.repeat(8)];
// ['~', '~', '~', '~', '~', '~', '~', '~']

// progress = -1 --> entra en el if
if (progress !== 0) {
  const renoPosition = progress > 0 ? progress : length + progress;
  trackLine[renoPosition] = 'r';
}

// const renoPosition = progress > 0 ? progress : length + progress;
// const renoPosition = -1 > 0 ? -1 : 8 + -1;
// como -1 no es mayor que 0, renoPosition = 8 - 1 = 7
const renoPosition = 7;

// trackLine[renoPosition] = 'r';
// trackLine[7] = 'r';
trackLine[renoPosition] = 'r';

// ['~', '~', '~', '~', '~', '~', '~', 'r']
```

Nuestro offset isométrico será de `2` espacios en blanco

```js
// const isometricOffset = ' '.repeat(indices.length - laneIndex - 1);
// const isometricOffset = ' '.repeat(4 - 1 - 1);
// const isometricOffset = ' '.repeat(2);
const isometricOffset = '  ';
```

Unimos el array de la pista de nieve con su progreso si es que tiene

```js
// const trackLineStr = trackLine.join('');
// const trackLineStr = ['~', '~', '~', '~', '~', '~', '~', 'r'].join('');
const trackLineStr = '~~~~~~r';
```

Finalmente, retornamos el string con el offset isométrico y la pista de nieve con su progreso

```js
// return `${isometricOffset}${trackLineStr} /${laneIndex + 1}`;
// return `  ~~~~~~r /2`;
return `  ~~~~~~r /2`;
```

Para el tercer carril, con progreso `0`, no hacemos ninguna modificación en la pista de nieve.

```js
const trackLine = [...'~'.repeat(8)];
// ['~', '~', '~', '~', '~', '~', '~', '~']

// progress = 0 --> no entra en el if y continua calculando el offset isométrico

// const isometricOffset = ' '.repeat(indices.length - laneIndex - 1);
// const isometricOffset = ' '.repeat(4 - 2 - 1);
// const isometricOffset = ' '.repeat(1);
const isometricOffset = ' ';
```

Unimos el array de la pista de nieve con su progreso si es que tiene

```js
// const trackLineStr = trackLine.join('');
// const trackLineStr = ['~', '~', '~', '~', '~', '~', '~', '~'].join('');
const trackLineStr = '~~~~~~~~';
```

Finalmente, retornamos el string con el offset isométrico y la pista de nieve con su progreso

```js
// return `${isometricOffset}${trackLineStr} /${laneIndex + 1}`;
// return ` ~~~~~~~ /3`;
return ` ~~~~~~~ /3`;
```

Para el cuarto carril, con progreso `5`, la posición del reno será la `5`, por lo que colocamos la letra `r` en la posición `5` del array de la pista de nieve.

```js
const trackLine = [...'~'.repeat(8)];
// ['~', '~', '~', '~', '~', '~', '~', '~']

// progress = 5 --> entra en el if
if (progress !== 0) {
  const renoPosition = progress > 0 ? progress : length + progress;
  trackLine[renoPosition] = 'r';
}

// const renoPosition = progress > 0 ? progress : length + progress;
// const renoPosition = 5 > 0 ? 5 : 8 + 5;
// como 5 es mayor que 0, renoPosition = 5
const renoPosition = 5;

// trackLine[renoPosition] = 'r';
// trackLine[5] = 'r';
trackLine[renoPosition] = 'r';

// ['~', '~', '~', '~', '~', 'r', '~', '~']
```

Nuestro offset isométrico será de `0` espacios en blanco

```js
// const isometricOffset = ' '.repeat(indices.length - laneIndex - 1);
// const isometricOffset = ' '.repeat(4 - 3 - 1);
// const isometricOffset = ' '.repeat(0);
const isometricOffset = '';
```

Unimos el array de la pista de nieve con su progreso si es que tiene

```js
// const trackLineStr = trackLine.join('');
// const trackLineStr = ['~', '~', '~', '~', '~', 'r', '~', '~'].join('');
const trackLineStr = '~~~~~r~~';
```

Finalmente, retornamos el string con el offset isométrico y la pista de nieve con su progreso

```js
// return `${isometricOffset}${trackLineStr} /${laneIndex + 1}`;
// return `~~~~~r~~ /4`;
return `~~~~~r~~ /4`;
```

Después de realizar las 4 iteraciones, nuestro array de strings se ve de la siguiente manera:

```js
[
  '   ~~r~~~~~ /1',
  '  ~~~~~~~r /2',
  ' ~~~~~~~ /3',
  '~~~~~r~~ /4'
]
```

Finalmente, unimos cada uno de los strings con un salto de línea

```js
// return indices
//   .map((progress, laneIndex) => {
//     ...
//   })
//   .join('\n');

// [
//   '   ~~r~~~~~ /1',
//   '  ~~~~~~~r /2',
//   ' ~~~~~~~ /3',
//   '~~~~~r~~ /4'
// ].join('\n');

return `   ~~r~~~~~ /1\n  ~~~~~~~r /2\n ~~~~~~~ /3\n~~~~~r~~ /4`;
```

Y con esto, hemos terminado de resolver el problema. 🎉
