# Reto 01: 🎁 ¡Primer regalo repetido!

**Santa Claus** 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones. Además, **los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.**

Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.

```js
const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1) // [1, 2, 3, 4, 5]

const gifts2 = [6, 5, 5, 5, 5]
const preparedGifts2 = prepareGifts(gifts2)
console.log(preparedGifts2) // [5, 6]

const gifts3 = []
const preparedGifts3 = prepareGifts(gifts3)
console.log(preparedGifts3) // []
// No hay regalos, la lista queda vacía
```

## Mi solución explicada

```js
function prepareGifts(gifts) {
  return [...new Set(gifts)].sort((a, b) => a - b);
}
```

Primero, creamos un nuevo `Set` a partir de la lista de regalos. Un `Set` es una colección de valores únicos, por lo que automáticamente elimina los duplicados.

```js
[...new Set(gifts)]
```

Después, convertimos el `Set` en un array con el operador de propagación (`...`) y lo ordenamos en orden ascendente con el método `sort`.

Hay que tener en cuenta que el trabajar con números, el método `sort` por defecto ordena los elementos como si fueran cadenas de texto. Por lo tanto, es necesario pasar una función de comparación que convierta los elementos a números antes de compararlos.

```js
[...new Set(gifts)].sort((a, b) => a - b)
```

Finalmente, devolvemos el array resultante.
