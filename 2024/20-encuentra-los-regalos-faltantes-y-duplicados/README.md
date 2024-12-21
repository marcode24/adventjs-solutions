# Reto 20: Encuentra-los-regalos-faltantes-y-duplicados

**Santa Claus** 🎅 está revisando la lista de regalos que debe entregar esta Navidad. Sin embargo, **algunos regalos faltan, otros están duplicados, y algunos tienen cantidades incorrectas.** Necesita tu ayuda para resolver el problema.

Recibirás dos arrays:

- `received`: Lista con los regalos que Santa tiene actualmente.
- `expected`: Lista con los regalos que Santa debería tener.

Tu tarea es escribir una función que, dado received y expected, devuelva un objeto con dos propiedades:

- `missing`: Un objeto donde las claves son los nombres de los regalos faltantes y los valores son las cantidades que faltan.
- `extra`: Un objeto donde las claves son los nombres de los regalos extra o duplicados y los valores son las cantidades que sobran.

Ten en cuenta que:

- Los regalos pueden repetirse en ambas listas.
- Las listas de regalos están desordenadas.
- Si no hay regalos que falten o sobren, las propiedades correspondientes (`missing o extra`) deben ser objetos vacíos.

```js
fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

fixGiftList(
  ['book', 'train', 'kite', 'train'],
  ['train', 'book', 'kite', 'ball', 'kite']
)
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

fixGiftList(
  ['bear', 'bear', 'car'],
  ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
)
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear'])
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }
```

## Mi solución explicada

```js
function fixGiftList(received, expected) {
  const counts = {};

  for (const gift of received) counts[gift] = ~~counts[gift] + 1;
  for (const gift of expected) counts[gift] = ~~counts[gift] - 1;

  const missing = {};
  const extra = {};
  for (const [gift, count] of Object.entries(counts)) {
    if (count > 0) extra[gift] = count;
    else if (count < 0) missing[gift] = -count;
  }

  return { missing, extra };
}

module.exports = fixGiftList;
```

Para resolver este reto, hay que tener en cuenta que necesitamos comparar dos listas de regalos: `received` y `expected`. Para ello, vamos a recorrer ambas listas y vamos a ir contando cuántas veces aparece cada regalo en cada una de ellas.

Para llevar la cuenta de los regalos, vamos a utilizar un objeto llamado `counts`. Este objeto va a tener como claves los nombres de los regalos y como valores la cantidad de veces que aparece cada regalo en la lista.

Como no sabemos si un regalo se repite en ambas listas, vamos a recorrer la lista `received` y vamos a incrementar en 1 la cantidad de veces que aparece cada regalo en el objeto `counts`. Luego, vamos a recorrer la lista `expected` y vamos a decrementar en 1 la cantidad de veces que aparece cada regalo en el objeto `counts`. De esta forma, si un regalo aparece en ambas listas, la cantidad de veces que aparece en el objeto `counts` será 0. Si un regalo aparece más veces en `received` que en `expected`, la cantidad será positiva. Si un regalo aparece más veces en `expected` que en `received`, la cantidad será negativa. Si un regalo no aparece en ninguna de las listas, la cantidad será 0.

Una vez que tenemos el objeto `counts` con la cantidad de veces que aparece cada regalo en ambas listas, vamos a recorrer este objeto y vamos a crear dos objetos: `missing` y `extra`. En el objeto `missing` vamos a guardar los regalos que faltan y en el objeto `extra` vamos a guardar los regalos que sobran. Para ello, vamos a recorrer el objeto `counts` y vamos a verificar si la cantidad de veces que aparece un regalo es mayor que 0. Si es así, significa que ese regalo sobra y lo agregamos al objeto `extra`. Si la cantidad es menor que 0, significa que ese regalo falta y lo agregamos al objeto `missing`.

Finalmente, devolvemos un objeto con las propiedades `missing` y `extra`, que contienen los regalos que faltan y sobran, respectivamente.

**Veamos con un ejemplo cómo funciona el código:**

Supongamos que recibimos las listas `received` y `expected` siguientes:

```js
const received = ['car', 'puzzle', 'car'];
const expected = ['puzzle', 'car', 'doll'];
```

Utilizaremos un ciclo `for...of` para recorrer la lista `received` y vamos a incrementar en 1 la cantidad de veces que aparece cada regalo en el objeto `counts`.

Recorremos la lista `received` y como esta lista tiene 3 elementos, el ciclo se ejecutará 3 veces. En la primera iteración, el regalo es `'car'`. Como el objeto `counts` está vacío, la cantidad de veces que aparece el regalo `'car'` es `undefined`. Al utilizar el operador `~~` para convertir el valor a un número entero, obtenemos `0`. Luego, incrementamos en 1 la cantidad de veces que aparece el regalo `'car'` en el objeto `counts`. Ahora, el objeto `counts` es `{ car: 1 }`.

```js
// counts[gift] = ~~counts[gift] + 1;
// counts['car'] = ~~counts['car'] + 1;
// counts['car'] = ~~undefined + 1;
// counts['car'] = 0 + 1;
counts['car'] = 1;

const counts = { car: 1 };
```

En la segunda iteración tenemos el regalo `'puzzle'`. Al igual que en la iteración anterior, la cantidad de veces que aparece el regalo `'puzzle'` es `undefined`. Al convertir este valor a un número entero, obtenemos `0`. Luego, incrementamos en 1 la cantidad de veces que aparece el regalo `'puzzle'` en el objeto `counts`. Ahora, el objeto `counts` es `{ car: 1, puzzle: 1 }`.

```js
// counts[gift] = ~~counts[gift] + 1;
// counts['puzzle'] = ~~counts['puzzle'] + 1;
// counts['puzzle'] = ~~undefined + 1;
// counts['puzzle'] = 0 + 1;
counts['puzzle'] = 1;

const counts = { car: 1, puzzle: 1 };
```

En la tercera y última iteración, el regalo es `'car'`. La cantidad de veces que aparece el regalo `'car'` en el objeto `counts` es `1`. Al incrementar en 1 esta cantidad, obtenemos `2`. Ahora, el objeto `counts` es `{ car: 2, puzzle: 1 }`.

```js
// counts[gift] = ~~counts[gift] + 1;
// counts['car'] = ~~counts['car'] + 1;
// counts['car'] = ~~1 + 1;
// counts['car'] = 1 + 1;
counts['car'] = 2;

const counts = { car: 2, puzzle: 1 };
```

Luego, recorremos la lista `expected` y vamos a decrementar en 1 la cantidad de veces que aparece cada regalo en el objeto `counts`.

Recorremos la lista `expected` y como esta lista tiene 3 elementos, el ciclo se ejecutará 3 veces. En la primera iteración, el regalo es `'puzzle'`. La cantidad de veces que aparece el regalo `'puzzle'` en el objeto `counts` es `1`. Al decrementar en 1 esta cantidad, obtenemos `0`. Ahora, el objeto `counts` es `{ car: 2, puzzle: 0 }`.

```js
// counts[gift] = ~~counts[gift] - 1;
// counts['puzzle'] = ~~counts['puzzle'] - 1;
// counts['puzzle'] = ~~1 - 1;
// counts['puzzle'] = 1 - 1;
counts['puzzle'] = 0;

const counts = { car: 2, puzzle: 0 };
```

En la segunda iteración tenemos el regalo `'car'`. La cantidad de veces que aparece el regalo `'car'` en el objeto `counts` es `2`. Al decrementar en 1 esta cantidad, obtenemos `1`. Ahora, el objeto `counts` es `{ car: 1, puzzle: 0 }`.

```js
// counts[gift] = ~~counts[gift] - 1;
// counts['car'] = ~~counts['car'] - 1;
// counts['car'] = ~~2 - 1;
// counts['car'] = 2 - 1;
counts['car'] = 1;

const counts = { car: 1, puzzle: 0 };
```

En la tercera y última iteración, el regalo es `'doll'`. La cantidad de veces que aparece el regalo `'doll'` en el objeto `counts` es `undefined`. Al convertir este valor a un número entero, obtenemos `0`. Al decrementar en 1 esta cantidad, obtenemos `-1`. Ahora, el objeto `counts` es `{ car: 1, puzzle: 0, doll: -1 }`.

```js
// counts[gift] = ~~counts[gift] - 1;
// counts['doll'] = ~~counts['doll'] - 1;
// counts['doll'] = ~~undefined - 1;
// counts['doll'] = 0 - 1;
counts['doll'] = -1;

const counts = { car: 1, puzzle: 0, doll: -1 };
```

Una vez que tenemos el objeto `counts` con la cantidad de veces que aparece cada regalo en ambas listas, vamos a recorrer este objeto y vamos a crear dos objetos: `missing` y `extra`.

Nuevamente, utilizaremos un ciclo `for...of` para recorrer el objeto `counts`. Aquí utilizaremos el método `Object.entries()` para obtener un array con las claves y valores del objeto `counts`. Luego, recorreremos este array con un ciclo `for...of` y vamos a verificar si la cantidad de veces que aparece un regalo es mayor que 0. Si es así, significa que ese regalo sobra y lo agregamos al objeto `extra`. Si la cantidad es menor que 0, significa que ese regalo falta y lo agregamos al objeto `missing`.

Entonces para el objeto `counts` que tenemos, el array que obtenemos con `Object.entries(counts)` es el siguiente:

```js
const entries = [
  ['car', 1],
  ['puzzle', 0],
  ['doll', -1]
];
```

En la primera iteración, la clave es `'car'` y el valor es `1`. Como el valor es mayor que 0, agregamos el regalo `'car'` al objeto `extra` con la cantidad `1`.

```js
gift = 'car';
count = 1;

// if (count > 0) extra[gift] = count;
// if (1 > 0) extra['car'] = 1;
// if (true) extra['car'] = 1;
extra['car'] = 1;

const extra = { car: 1 };
const missing = {};
```

En la segunda iteración, la clave es `'puzzle'` y el valor es `0`. Como el valor es igual a 0, no hacemos nada.

```js
gift = 'puzzle';
count = 0;

// if (count > 0) extra[gift] = count;
// if (0 > 0) extra['puzzle'] = 0;
// if (false) extra['puzzle'] = 0; (no se ejecuta)

// else if (count < 0) missing[gift] = -count;
// else if (0 < 0) missing['puzzle'] = 0;
// else if (false) missing['puzzle'] = 0; (no se ejecuta)

const extra = { car: 1 };
const missing = {};
```

En la tercera y última iteración, la clave es `'doll'` y el valor es `-1`. Como el valor es menor que 0, agregamos el regalo `'doll'` al objeto `missing` con la cantidad `1`.

```js
gift = 'doll';
count = -1;

// if (count > 0) extra[gift] = count;
// if (-1 > 0) extra['doll'] = -1;
// if (false) extra['doll'] = -1; (no se ejecuta)

// else if (count < 0) missing[gift] = -count;
// else if (-1 < 0) missing['doll'] = -(-1);
// else if (true) missing['doll'] = 1;
missing['doll'] = 1;

const extra = { car: 1 };
const missing = { doll: 1 };
```

Finalmente, devolvemos un objeto con las propiedades `missing` y `extra`, que contienen los regalos que faltan y sobran, respectivamente.

```js
{
  missing: { doll: 1 },
  extra: { car: 1 }
}
```

En este caso, el regalo `'doll'` falta y el regalo `'car'` sobra.

Y con esto hemos terminado de resolver el reto. 🎉
