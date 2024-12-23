# Reto 23: Encuentra-los-numeros-perdidos

Los elfos están trabajando en un sistema para verificar las listas de regalos de los niños 👧👦. Sin embargo, ¡algunas listas están incompletas y **faltan números**!

Tu tarea es escribir **una función que, dado un array de números, encuentre todos los números que faltan entre 1 y n** (donde n es el tamaño del array o el número más alto del array).

Eso sí, ten en cuenta que:

- Los números pueden aparecer más de una vez y otros pueden faltar
- El array siempre contiene números enteros positivos
- Siempre se empieza a contar desde el 1

```js
findMissingNumbers([1, 2, 4, 6])
// [3, 5]

findMissingNumbers([4, 8, 7, 2])
// [1, 3, 5, 6]

findMissingNumbers([3, 2, 1, 1])
// []

findDisappearedNumbers([5, 5, 5, 3, 3, 2, 1])
// [4]
```

## Mi solución explicada

**NOTA** Para correr este código necesitas la versión 22 o superior de Node.js. En caso contrario, puedes crear una función `difference` que haga lo mismo que `Set.prototype.difference`.

```js
Set.prototype.difference = function (set) {
  return new Set([...this].filter((x) => !set.has(x)));
};
```

```js
function findMissingNumbers(nums) {
  const maxNumber = Math.max(...nums);
  const fullSetOfNumbers = new Set(
    Array.from({ length: maxNumber }, (_, index) => index + 1),
  );
  const uniqueNumbers = new Set(nums);
  const missingNumbers = fullSetOfNumbers.difference(uniqueNumbers);
  return [...missingNumbers];
}
```

Para resolver este reto, utilice diferencia de conjuntos. Esto consiste en crear un conjunto con todos los números del 1 al número más alto del array, luego crear un conjunto con los números únicos del array y finalmente obtener la diferencia entre ambos conjuntos.

Para esto utilice el método `Math.max` para obtener el número más alto del array, luego cree un conjunto con todos los números del 1 al número más alto del array utilizando `Array.from` y `Set`. Después cree un conjunto con los números únicos del array utilizando `Set`. Finalmente obtuve la diferencia entre ambos conjuntos y devolví un array con los números faltantes.

**Veamos un ejemplo**:

Supongamos que tenemos el siguiente array:

```js
const nums = [1, 2, 4, 6];
```

Primero obtenemos el número más alto del array, en este caso es el número 6:

```js
const maxNumber = Math.max(...nums);
// const maxNumber = Math.max(...[1, 2, 4, 6]);
// const maxNumber = Math.max(1, 2, 4, 6);
const maxNumber = 6;
```

Luego creamos un conjunto con todos los números del 1 al número más alto del array, para este caso utilizamos `Array.from` y `Set`, donde `Array.from` crea un array con los números del 1 al 6 y `Set` convierte ese array en un conjunto:

```js
const fullSetOfNumbers = new Set(
  Array.from({ length: maxNumber }, (_, index) => index + 1),
);

// Array.from({ length: 6 }, (_, index) => index + 1);
// Array.from([undefined, undefined, undefined, undefined, undefined, undefined], (_, index) => index + 1);
// [1, 2, 3, 4, 5, 6]

// new Set([1, 2, 3, 4, 5, 6]);

const fullSetOfNumbers = new Set([1, 2, 3, 4, 5, 6]);
```

Después creamos un conjunto con los números únicos del array, para este caso utilizamos `Set`:

```js
const uniqueNumbers = new Set(nums);
// const uniqueNumbers = new Set([1, 2, 4, 6]);
const uniqueNumbers = new Set([1, 2, 4, 6]);
```

Finalmente obtenemos la diferencia entre ambos conjuntos, para esto utilizamos el método `difference` que creamos previamente:

```js
const missingNumbers = fullSetOfNumbers.difference(uniqueNumbers);
// const missingNumbers = [1, 2, 3, 4, 5, 6].difference([1, 2, 4, 6]);
// const missingNumbers = [3, 5];
const missingNumbers = [3, 5];
```

`difference` lo que hace es obtener la diferencia entre ambos conjuntos, es decir, los números que están en el primer conjunto pero no en el segundo. Por ejemplo: la diferencia de elementos que esta en `fullSetOfNumbers` pero no en `uniqueNumbers`, es decir, si `fullSetOfNumbers` es `[1, 2, 3, 4, 5, 6]` y `uniqueNumbers` es `[1, 2, 4, 6]`, entonces la diferencia es `[3, 5]`, que son los números faltantes.

Y devolvemos un array con los números faltantes:

```js
return [...missingNumbers];
// return [3, 5];
return [3, 5];
```

Así es como resolví este reto utilizando diferencia de conjuntos 🎉
