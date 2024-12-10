# Reto 11: Nombres-de-archivos-codificados

**El Grinch ha hackeado 🏴‍☠️ los sistemas del taller de Santa Claus** y ha codificado los nombres de todos los archivos importantes. Ahora los elfos no pueden encontrar los archivos originales y necesitan tu ayuda para descifrar los nombres.

Cada archivo sigue este formato:

- Comienza con un número (puede contener cualquier cantidad de dígitos).
- Luego tiene un guion bajo `_`.
- Continúa con un **nombre de archivo y su extensión.**
- Finaliza con una extensión extra al final (que no necesitamos).

Ten en cuenta que el nombre de los archivos pueden contener letras (a-z, A-Z), números (0-9), **otros guiones bajos** (_) y guiones (-).

Tu tarea es implementar una función que reciba un string con el nombre de un archivo codificado y devuelva solo la parte importante: **el nombre del archivo y su extensión.**

Ejemplos:

```js
decodeFilename('2023122512345678_sleighDesign.png.grinchwa')
// ➞ "sleighDesign.png"

decodeFilename('42_chimney_dimensions.pdf.hack2023')
// ➞ "chimney_dimensions.pdf"

decodeFilename('987654321_elf-roster.csv.tempfile')
// ➞ "elf-roster.csv"
```

## Mi solución explicada

```js
function decodeFilename(filename) {
  const underscoreIndex = filename.indexOf('_');
  const lastDotIndex = filename.lastIndexOf('.');
  return filename.slice(underscoreIndex + 1, lastDotIndex);
}
```

Para resolver este reto, de manera sencilla, he utilizado el método `slice()` para extraer la parte del string que necesitamos. ¿Como es que funciona `slice()`? Lo que hace es devolver una copia de una parte del string, desde el índice inicial hasta el índice final (sin incluirlo). Ejemplo:

```js
const str = 'Hello, World!';
console.log(str.slice(7, 12)); // "World"
```

En este caso, `slice(7, 12)` extrae la parte del string desde el índice 7 hasta el índice 12 (sin incluirlo), devolviendo `"World"`.

Ahora, para resolver este reto, he utilizado `slice()` de la siguiente manera:

Primero, obtengo el índice del guion bajo `_` con el método `indexOf()`. ¿Por qué el primer guion bajo? Porque el número que está al principio del string es lo que no necesitamos.

Luego, obtengo el índice del último punto `.` con el método `lastIndexOf()`. ¿Por qué el último punto? Porque el punto que está al final del string es lo que no necesitamos.

Finalmente, utilizo el método `slice()` para extraer la parte del string que necesitamos.

Veamos con un ejemplo:

Supongamos que tengo la siguiente cadena:

```js
const filename = '2023122512345678_sleighDesign.png.grinchwa';
```

Primero, obtengo el índice del primer guion bajo `_` con el método `indexOf()`:

```js
// const underscoreIndex = '2023122512345678_sleighDesign.png.grinchwa'.indexOf('_');
const underscoreIndex = filename.indexOf('_'); // 16
```

Luego, obtengo el índice del último punto `.` con el método `lastIndexOf()`:

```js
// const lastDotIndex = '2023122512345678_sleighDesign.png.grinchwa'.lastIndexOf('.');
const lastDotIndex = filename.lastIndexOf('.'); // 33
```

Finalmente, utilizo el método `slice()` para extraer la parte del string que necesitamos:

```js
// return '2023122512345678_sleighDesign.png.grinchwa'.slice(underscoreIndex + 1, lastDotIndex);
// return '2023122512345678_sleighDesign.png.grinchwa'.slice(16 + 1, 33);
// return '2023122512345678_sleighDesign.png.grinchwa'.slice(17, 33);
return filename.slice(underscoreIndex + 1, lastDotIndex); // "sleighDesign.png"
```

Y eso es todo lo que necesitamos para resolver este reto. 🎉

**Igual podemos hacerlo con expresiones regulares, pero esta solución es más sencilla y fácil de entender.**
