# Reto 14: Acomodando-los-renos

Los renos necesitan moverse para ocupar los establos, **pero no puede haber más de un reno por establo**. Además, para que los renos estén cómodos, debemos minimizar la distancia total que recorren para acomodarse.

Tenemos dos parámetros:

- `reindeer`: Un array de enteros que representan las posiciones de los renos.
- `stables`: Un array de enteros que representan las posiciones de los establos.

Hay que mover cada reno, desde su posición actual, hasta un establo. Pero hay que tener en cuenta **que sólo puede haber un reno por establo**.

Tu tarea es calcular el **mínimo número de movimientos necesarios** para que todos los renos acaben en un establo.

*Nota:* Ten en cuenta que **el array de establos siempre tendrá el mismo tamaño que el array de renos y que siempre los establos serán únicos.**

Ejemplo

```js
minMovesToStables([2, 6, 9], [3, 8, 5]) // -> 3
// Explicación:
// Renos en posiciones: 2, 6, 9
// Establos en posiciones: 3, 8, 5
// 1er reno: se mueve de la posición 2 al establo en la posición 3 (1 movimiento).
// 2do reno: se mueve de la posición 6 al establo en la posición 5 (1 movimiento)
// 3er reno: se mueve de la posición 9 al establo en la posición 8 (1 movimiento).
// Total de movimientos: 1 + 1 + 1 = 3 movimientos

minMovesToStables([1, 1, 3], [1, 8, 4])
// Explicación:
// Renos en posiciones: 1, 1, 3
// Establos en posiciones: 1, 8, 4
// 1er reno: no se mueve (0 movimientos)
// 2do reno: se mueve de la posición 1 al establo en la posición 4 (3 movimientos)
// 3er reno: se mueve de la posición 3 al establo en la posición 8 (5 movimientos)
// Total de movimientos: 0 + 3 + 5 = 8 movimientos
```

## Mi solución explicada

```js
function minMovesToStables(reindeer, stables) {
  reindeer.sort();
  stables.sort();

  return reindeer.reduce((totalMoves, currentReindeerPosition, index) => {
    const currentStablePosition = stables[index];
    const distance = Math.abs(currentReindeerPosition - currentStablePosition);
    return totalMoves + distance;
  }, 0);
}
```

Para poder resolver este reto, hay que hallar la forma de minimizar la distancia total que recorren los renos para acomodarse en los establos.

Para ello, primero ordenamos los arrays de renos y establos de menor a mayor. Una vez hecho esto, recorremos el array de renos y, por cada reno, calculamos la distancia que tiene que recorrer para llegar al establo correspondiente.

En este caso, dado que trabajamos con un array puramente numérico, no es necesario proporcionar una función de comparación al método sort, ya que JavaScript detecta que los elementos son números y aplica una comparación implícita para ordenarlos correctamente en orden ascendente.

Por lo tanto, incluso para valores como `[1, 10, 2]`, `sort()` producirá el resultado correcto `[1, 2, 10]`.

Sin embargo, si el array contiene cadenas de texto numéricas o es mixto (números y cadenas), es recomendable usar una función de comparación explícita `(a, b) => a - b` para garantizar un comportamiento consistente en todos los casos.

Por último, sumamos todas las distancias calculadas y devolvemos el total de movimientos necesarios para que todos los renos acaben en un establo.

**Veamos un ejemplo:**

```js
minMovesToStables([2, 6, 9], [3, 8, 5]) // -> 3
```

Supongamos que tenemos la siguiente entrada, donde los renos están en las posiciones `2, 6, 9` y los establos en las posiciones `3, 8, 5`. Si todo sale bien, el resultado debería ser `3`.

Primero, ordenamos los arrays de menor a mayor.

Hay que tener en cuenta que no es necesario asignar los valores ordenados a nuevas variables, ya que los arrays originales se ordenan de forma mutativa. Es decir, los arrays originales se modifican directamente.

```js
// reindeer.sort();
// [2, 6, 9].sort();
[2, 6, 9];

// stables.sort();
// [3, 8, 5].sort();
[3, 5, 8]
```

Para este momento, los arrays tienen la siguiente forma:

```js
reindeer = [2, 6, 9];
stables = [3, 5, 8];
```

Luego, recorremos el array de renos y calculamos la distancia que tiene que recorrer cada reno para llegar al establo correspondiente. Aquí utilizamos el método `reduce` para acumular la suma de las distancias iterando sobre los renos.

```js
return reindeer.reduce((totalMoves, currentReindeerPosition, index) => {
  ...
}, 0);
```

Nuestra función de reducción recibe 2 parametros:

Primero, una función que toma 3 argumentos: `totalMoves`, `currentReindeerPosition` e `index`.

- `totalMoves` es el acumulador que mantiene la suma total de las distancias recorridas por los renos
- `currentReindeerPosition` es la posición actual del reno en el array. También pasamos un tercer parámetro opcional
- `index` nos permitirá acceder a la posición actual del reno en el array. Este índice se utiliza para acceder a la posición correspondiente en el array de establos.

Segundo, un valor inicial para `totalMoves`, que en este caso es `0`. Este valor inicial es importante para que la función de reducción pueda comenzar a acumular la suma de las distancias desde el primer reno.

Para nuestra primera iteración, tenemos lo siguiente:

El valor de nuestros parámetros es:

```js
totalMoves = 0
currentReindeerPosition = 2
index = 0
```

Calculamos la distancia entre la posición actual del reno y la posición del establo correspondiente.

```js
// const currentStablePosition = stables[index];
// const currentStablePosition = [3, 5, 8][0];
const currentStablePosition = 3;

// const distance = Math.abs(currentReindeerPosition - currentStablePosition);
// const distance = Math.abs(2 - 3);
// const distance = Math.abs(-1);
const distance = 1;

// return totalMoves + distance;
// return 0 + 1;
return 1;
```

Para la segunda iteración, tenemos lo siguiente:

```js
totalMoves = 1
currentReindeerPosition = 6
index = 1
```

Calculamos la distancia entre la posición actual del reno y la posición del establo correspondiente.

```js
// const currentStablePosition = stables[index];
// const currentStablePosition = [3, 5, 8][1];
const currentStablePosition = 5;

// const distance = Math.abs(currentReindeerPosition - currentStablePosition);
// const distance = Math.abs(6 - 5);
// const distance = Math.abs(1);
const distance = 1;

// return totalMoves + distance;
// return 1 + 1;
return 2;
```

Para la tercera iteración, tenemos lo siguiente:

```js
totalMoves = 2
currentReindeerPosition = 9
index = 2
```

Calculamos la distancia entre la posición actual del reno y la posición del establo correspondiente.

```js
// const currentStablePosition = stables[index];
// const currentStablePosition = [3, 5, 8][2];
const currentStablePosition = 8;

// const distance = Math.abs(currentReindeerPosition - currentStablePosition);
// const distance = Math.abs(9 - 8);
// const distance = Math.abs(1);
const distance = 1;

// return totalMoves + distance;
// return 2 + 1;
return 3;
```

Como son 3 iteraciones, devolvemos directamente el total de movimientos necesarios para que todos los renos acaben en un establo.

```js
// return reindeer.reduce((totalMoves, currentReindeerPosition, index) => {...}, 0);
// return [2, 6, 9].reduce((0, 2, 0) => {...}, 0);
// return [2, 6, 9].reduce((1, 6, 1) => {...}, 0);
// return [2, 6, 9].reduce((2, 2, 9) => {...}, 0);
return 3;
```

Por lo tanto, el resultado final es `3`, que es el mínimo número de movimientos necesarios para que todos los renos acaben en un establo.

**Nota:** Siempre es importante tener en cuenta que, en este caso, los arrays de renos y establos tienen la misma longitud y que los establos son únicos. Si no se cumple esta condición, el resultado podría no ser el esperado.

Asi es como resolvemos el reto de hoy 🎉
