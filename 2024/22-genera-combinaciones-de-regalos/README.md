# Reto 22: Genera-combinaciones-de-regalos

Santa Claus 🎅 está revisando una **lista de juguetes únicos que podría incluir en su bolsa mágica de regalos.** Quiere explorar todas las combinaciones posibles de juguetes. Quiere ver todas las combinaciones que realmente contengan al menos un juguete.

Tu tarea es escribir una función que, dado un array de juguetes, **devuelva todas las combinaciones posibles.**

Importante: Debes devolverlo en el orden que aparecen los juguetes y de combinaciones de 1 a n juguetes.

```js
generateGiftSets(['car', 'doll', 'puzzle'])
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

generateGiftSets(['ball'])
// [
//   ['ball']
// ]

generateGiftSets(['game', 'pc'])
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]
```

**Nota: En el array de entrada siempre habrá al menos un juguete y nunca habrá juguetes duplicados.**

**Consejo**: Hay muchas formas de solucionar este problema, pero el backtracking puede ser una buena opción. 😉

## Mi solución explicada

```js
/* eslint-disable no-inner-declarations */
function generateGiftSets(gifts) {
  const results = [];
  function backtracking(start, currentSet) {
    if (currentSet.length > 0) {
      results.push([...currentSet]);
    }

    for (let i = start; i < gifts.length; i++) {
      currentSet.push(gifts[i]);
      backtracking(i + 1, currentSet);
      currentSet.pop();
    }
  }

  backtracking(0, []);

  return results.sort((a, b) => a.length - b.length);
}
```

Para poder resolver este problema, utilizaremos un enfoque de backtracking. A grandes rasgos, el backtracking es una técnica que consiste en probar todas las posibles combinaciones de una solución, y si en algún momento nos damos cuenta de que no es posible llegar a una solución válida, retrocedemos y probamos otra combinación.

En este caso, la función `generateGiftSets` recibe un array de juguetes y devuelve todas las combinaciones posibles. Para ello, creamos un array `results` que almacenará todas las combinaciones válidas.

Dentro de la función `generateGiftSets`, definimos una función interna llamada `backtracking` que se encargará de generar las combinaciones. Esta función recibe dos parámetros: `start` (que indica la posición inicial desde la que se deben considerar los juguetes) y `currentSet` (que es el conjunto actual de juguetes que estamos evaluando).

En la función `backtracking`, primero verificamos si el conjunto actual `currentSet` tiene al menos un juguete, y si es así, lo agregamos al array `results`. Luego, recorremos los juguetes a partir de la posición `start` y vamos generando las combinaciones de forma recursiva. Para ello, agregamos un juguete al conjunto actual, llamamos a la función `backtracking` con la siguiente posición y el conjunto actual, y luego eliminamos el último juguete agregado para probar con el siguiente. De esta forma, vamos generando todas las combinaciones posibles.

Finalmente, retornamos el array `results` ordenado por la longitud de cada combinación, de menor a mayor.
