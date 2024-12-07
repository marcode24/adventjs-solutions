# Reto 07: El-ataque-del-grinch

¡El **grinch** 👹 ha pasado por el taller de Santa Claus! Y menudo desastre ha montado. Ha cambiado el orden de algunos paquetes, por lo que los envíos no se pueden realizar.

Por suerte, el elfo Pheralb ha detectado el patrón que ha seguido el grinch para desordenarlos. **Nos ha escrito las reglas que debemos seguir para reordenar los paquetes. Las instrucciones que siguen son:**

Recibirás un string que contiene letras y paréntesis.
Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.
Si hay paréntesis anidados, resuelve primero los más internos.
Devuelve el string resultante con los paréntesis eliminados, pero con el contenido volteado correctamente.
Nos ha dejado algunos ejemplos:

```js
fixPackages('a(cb)de')
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

fixPackages('abc(def(gh)i)jk')
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

fixPackages('a(b(c))e')
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"
```

## Mi solución explicada

```js
function fixPackages(packages) {
  const regex = /\(([^()]+)\)/;
  while (regex.test(packages)) {
    packages = packages.replace(regex, (_, inner) =>
      [...inner].reverse().join(''),
    );
  }
  return packages;
}
```

Para resolver este problema partimos de que que debemos buscar los paréntesis y voltear el contenido que se encuentra dentro de ellos. Para ello, comenzaremos buscando desde el interior hacia el exterior.

Utilizaremos una expresion regular que nos permita encontrar el contenido que se encuentra dentro de los paréntesis. La expresión regular que utilizaremos es `/\(([^()]+)\)/`.

Antes de continuar, es importante entender cómo funciona la expresión regular que hemos definido. La expresión regular se divide en tres partes:

1. `\(`: El carácter de apertura del paréntesis `(` está precedido por una barra invertida `\`. Esto es necesario porque los paréntesis en las expresiones regulares tienen un significado especial (indican un grupo de captura). Por lo tanto, `\(` se usa para escapar el paréntesis de apertura literal `(` y hacer que se busque realmente ese carácter.
2. `([^()]+)`
    - `[]`: Los corchetes definen una clase de caracteres, que indica un conjunto de caracteres permitidos.
    - `^` dentro de los corchetes: Cuando se coloca al principio de una clase de caracteres, actúa como un negador. Esto significa que buscamos cualquier carácter que no sea uno de los que se incluyen en la clase.
    - `()` dentro de los corchetes: Aquí estamos especificando que los caracteres que no queremos dentro del grupo son los paréntesis de apertura ( y de cierre ).
    - `+` después de los corchetes: El signo `+` indica que debe haber al menos un carácter que cumpla con la condición especificada (es decir, cualquier cosa que no sea un paréntesis). Esto garantiza que el contenido dentro de los paréntesis tenga al menos un carácter y no esté vacío.

    Entonces, `([^()]+)` captura uno o más caracteres que no sean paréntesis dentro de los paréntesis.

3. `\)`: Al igual que el carácter de apertura, el carácter de cierre del paréntesis `)` está precedido por una barra invertida `\`. Esto es necesario para escapar el paréntesis de cierre literal `)` y hacer que se busque ese carácter específico.

Por lo tanto, la expresión regular `/\(([^()]+)\)/` buscará cualquier contenido que se encuentre dentro de los paréntesis.

Una vez que hemos encontrado el contenido que se encuentra dentro de los paréntesis, utilizaremos el método `replace` para reemplazar el contenido encontrado por el contenido volteado.

El método `replace` recibe dos argumentos:

1. El primer argumento es la expresión regular que hemos definido.
2. El segundo argumento es una función que se ejecutará cada vez que se encuentre una coincidencia con la expresión regular.

La función que hemos definido recibe dos argumentos:

1. El primer argumento es la coincidencia encontrada.
2. El segundo argumento es el contenido que se encuentra dentro de los paréntesis.

Dentro de la función, convertimos el contenido en un array, lo invertimos y lo unimos nuevamente en un string.

Finalmente, retornamos el string resultante.

**Para comprendender mejor cómo funciona el código,** veamos un ejemplo:

Nuestro string de entrada será `'a(bc(def)g)h'`.

En la primera iteración, encontramos que al ejecutar `regex.test(packages)` dentro del `while` nos devolverá `true`.

```js
const regex = /\(([^()]+)\);
while (regex.test(packages)) {
  ...
} // true
```

Como el resultado es `true`, ejecutamos el método `replace`.

```js
packages = packages.replace(regex, (_, inner) =>
  [...inner].reverse().join(''),
);
```

`packages` en este momento equivale a `'a(bc(def)g)h'`. Por lo tanto ejecutamos el método `replace`, que reemplazará el contenido encontrado por el contenido volteado.

Internamente, el método `replace` ejecutará la función que hemos definido.

```js
(_, inner) => [...inner].reverse().join('')
```

El primer argumento es la coincidencia encontrada, que en este caso es `(def)`. El segundo argumento es el contenido que se encuentra dentro de los paréntesis, que es `def`.

Dentro de la función, convertimos el contenido en un array, lo invertimos y lo unimos nuevamente en un string.

```js
[...inner].reverse().join('') // 'fed'
```

Una vez que hemos invertido el contenido, el método `replace` reemplazará el contenido encontrado por el contenido invertido. Por lo tanto, `packages` ahora será `'a(bcfedg)h'`.

En la segunda iteración, encontramos que al ejecutar `regex.test(packages)` nos devolverá `true`. Ya que `packages` ahora es `'a(bcfedg)h'` y la expresión encuentra que aún hay contenido dentro de los paréntesis.

```js
const regex = /\(([^()]+)\)/;
while (regex.test(packages)) {
  ...
} // true
```

Como el resultado es `true`, volvemos a ejecutar el método `replace`.

```js
packages = packages.replace(regex, (_, inner) =>
  [...inner].reverse().join(''),
);
```

`packages` en este momento equivale a `'a(bcfedg)h'`. Por lo tanto ejecutamos el método `replace`, que reemplazará el contenido encontrado por el contenido volteado.

En la ejecución del método `replace`, la función que hemos definido se ejecutará nuevamente.

```js
(_, inner) => [...inner].reverse().join('')
```

El primer argumento es la coincidencia encontrada, que en este caso es `(bcfedg)`. El segundo argumento es el contenido que se encuentra dentro de los paréntesis, que es `bcfedg`.

Dentro de la función, convertimos el contenido en un array, lo invertimos y lo unimos nuevamente en un string.

```js
[...inner].reverse().join('') // 'gdefcb'
```

Una vez que hemos invertido el contenido, el método `replace` reemplazará el contenido encontrado por el contenido invertido. Por lo tanto, `packages` ahora será `'agdefcbh'`.

En la tercera iteración, encontramos que al ejecutar `regex.test(packages)` nos devolverá `false`. Ya que `packages` ahora es `'agdefcbh'` y la expresión no encuentra contenido dentro de los paréntesis.

```js
const regex = /\(([^()]+)\)/;
while (regex.test(packages)) {
  ...
} // false
```

Como el resultado es `false`, el `while` finalizará y retornaremos el string resultante.

```js
return packages; // 'agdefcbh'
```

Por lo tanto, el resultado final será `'agdefcbh'`.
