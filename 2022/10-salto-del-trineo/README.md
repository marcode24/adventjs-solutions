# Reto 10: El salto del trineo de Papá Noel

## Problema

Crea un programa que compruebe que el trineo de Santa Claus hace una parabola al saltar entre ciudades. Recibes un array de números que representan la altura en la que se encuentra el trineo en cada momento.

Para que la parabola sea correcta, el viaje del trineo debe ser ascendente al principio, llegar al punto más alto y descender hasta el final. No puede volver a subir una vez que ha bajado, ni puede iniciar el viaje bajando. Veamos unos ejemplos:

```js
const heights = [1, 3, 8, 5, 2]
checkJump(heights) // true

/*
Es `true`.
El salto va de abajo a arriba y luego de arriba a abajo:

    8 (punto más alto)
   ↗ ↘
  3   5
 ↗     ↘
1       2
*/

const heights = [1, 7, 3, 5]
checkJump(heights) // false

/*
Es `false`.
Va de abajo a arriba, de arriba a abajo y luego sube otra vez.

  7   5
 ↗ ↘ ↗
1   3
```

Necesitamos que el programa devuelva un boolean que indique si el trineo hace una parabola o no.

**A tener en cuenta**

- Para que el salto sea válido tiene que subir una vez y bajar una vez. Si durante el salto se queda en la misma altura entre dos posiciones, la parabola continua.
- No hace falta que el punto de inicio y final sean el mismo (las ciudades pueden estar a diferentes alturas).

## Mi Solución

```js
function checkJump(heights) {
  const dictionary = { 0: "", "-1": "d", 1: "u" }; // -1: down, 0: same, 1: up
  const str = heights
    .slice(1)
    .reduce(
      (acc, curr, i) => acc + dictionary[Math.sign(curr - heights[i])],
      ""
    );
  return !!str.match(/^[u]+[d]+$/g);
}

console.log(checkJump([1, 3, 8, 5, 2])); // -> true
console.log(checkJump([1, 7, 3, 5])); // -> false
console.log(checkJump([1, 2, 1])); // -> true
console.log(checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])); // -> true
console.log(checkJump([1, 2, 3, 1, 3, 1])); // -> false
console.log(checkJump([1, 3, 2, 5, 4, 3, 2, 1])); // -> true
```
