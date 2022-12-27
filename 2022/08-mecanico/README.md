# Reto 8: ¡Necesitamos un mecánico!

## Problema

Se han estropeado algunos trineos eléctricos y los elfos están buscando piezas de respuesto para arreglarlos, pero no tienen claro si las piezas que tienen sirven.

Las piezas de repuesto son cadenas de texto y el mecánico Elfon Masc ha dicho que una pieza de repuesto es válida **si la pieza puede ser un palíndromo después de eliminar, como máximo, un carácter.**

_Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda._

Nuestra función debe devolver un booleano que indique si la pieza de repuesto es válida o no con esa regla:

```js
checkPart("uwu"); // true
// "uwu" es un palíndromo sin eliminar ningún carácter

checkPart("miidim"); // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

checkPart("midu"); // false
// "midu" no puede ser un palíndromo después de eliminar un carácter
```

## Mi Solución

```js
function checkPart(part) {
  return [...part.slice(0, part.length / 2)].every(
    (_, i) =>
      part[i] === part[part.length - 1 - i] ||
      part[i] === part[part.length - 2 - i] ||
      part[i + 1] === part[part.length - 1 - i]
  );
}

console.log(checkPart("zzzoonzzz")); // -> true
console.log(checkPart("uwu")); // -> true
console.log(checkPart("midu")); // -> false
console.log(checkPart("lolol")); // -> true
console.log(checkPart("yolooloy")); // -> true
```
