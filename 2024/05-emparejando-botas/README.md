# Reto 05: Emparejando-botas

**Los elfos 🧝🧝‍♂️ de Santa Claus** han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

- type indica si es una bota izquierda (I) o derecha (R).
- size indica el tamaño de la bota.

Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

¡Ten en cuenta que **puedes tener más de una zapatilla emparejada del mismo tamaño!**

```js
const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

organizeShoes(shoes)
// [38, 42]

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]
// [38, 38]

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

organizeShoes(shoes3)
// []
```

## Mi solución explicada

```js
function organizeShoes(shoes) {
  const sizeCount = new Map();

  for (const { type, size } of shoes) {
    const counts = sizeCount.get(size) || { I: 0, R: 0 };
    counts[type]++;
    sizeCount.set(size, counts);
  }

  return Array.from(sizeCount.entries()).flatMap(([size, { I, R }]) =>
    Array(Math.min(I, R)).fill(size),
  );
}
```

Para resolver este problema, primero creamos un mapa `sizeCount` para almacenar el recuento de botas de cada tamaño. Esto nos permitirá contar cuántas botas izquierdas y derechas hay para cada tamaño.

```js
const sizeCount = new Map();
```

Luego, recorremos todas las botas y actualizamos el recuento de botas de cada tamaño en el mapa `sizeCount`.

```js
for (const { type, size } of shoes) {
  const counts = sizeCount.get(size) || { I: 0, R: 0 };
  counts[type]++;
  sizeCount.set(size, counts);
}
```

Denotamos el recuento de botas izquierdas y derechas para cada tamaño con un objeto `{ I: 0, R: 0 }`. Luego, incrementamos el recuento correspondiente según el tipo de bota. Finalmente, actualizamos el recuento en el mapa `sizeCount`.

Si nuestra entrada es la siguiente:

```js
const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
];
```

El mapa `sizeCount` se verá así:

```js
Map {
  38 => { I: 1, R: 1 },
  42 => { I: 1, R: 1 },
  41 => { I: 1, R: 0 }
}
```

Finalmente, devolvemos un array de pares de botas emparejadas. Para cada entrada en el mapa `sizeCount`, creamos un array de tamaño igual al mínimo de botas izquierdas y derechas para ese tamaño. Luego, llenamos el array con el tamaño de la bota y lo aplanamos.

```js
return Array.from(sizeCount.entries()).flatMap(([size, { I, R }]) =>
  Array(Math.min(I, R)).fill(size),
);
```

Desmenuzando el código, tenemos que `sizeCount.entries()` nos devolveria lo siguiente:

```js
[
  [38, { I: 1, R: 1 }],
  [42, { I: 1, R: 1 }],
  [41, { I: 1, R: 0 }]
]
```

Pasandolo por `flatMap`, tenemos que son 3 iteraciones. Para la primera iteración, tenemos:

```js
size = 38
{ I: 1, R: 1 }
```

Por lo que `Math.min(I, R)` nos devolvería `1`, y `Array(1).fill(size)` nos devolvería `[38]`. Para la segunda iteración, tenemos:

```js
size = 42
{ I: 1, R: 1 }
```

Por lo que `Math.min(I, R)` nos devolvería `1`, y `Array(1).fill(size)` nos devolvería `[42]`. Para la tercera iteración, tenemos:

```js
size = 41
{ I: 1, R: 0 }
```

Por lo que `Math.min(I, R)` nos devolvería `0`, y `Array(0).fill(size)` nos devolvería `[]`.

Fuera de `flatMap`, tenemos `[ [38], [42], [] ]`. Al aplanar el array, obtenemos `[38, 42]`, que es el resultado correcto.
