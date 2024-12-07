# Reto 06: Regalo-dentro-de-la-caja

Ya hemos empaquetado cientos de regalos 🎁… pero **a un elfo se le ha olvidado revisar si el regalo**, representado por un asterisco `*`, está dentro de la caja.

La caja tiene un regalo `(*)` y cuenta como dentro de la caja si:

- Está rodeada por # en los bordes de la caja.
- El `*` no está en los bordes de la caja.

Ten en cuenta entonces que el `*` puede estar dentro, fuera o incluso no estar. Y debemos devolver `true` si el `*` está dentro de la caja y false en caso contrario.

Ejemplos:

```js
inBox([
  "###",
  "#*#",
  "###"
]) // ➞ true

inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) // ➞ true

inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
]) // ➞ false

inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) // ➞ false
```

## Mi solución explicada

```js
function inBox(box) {
  return box
    .slice(1, -1)
    .some(
      (line) =>
        line.includes('*') &&
        line.indexOf('*') > 0 &&
        line.indexOf('*') < line.length - 1,
    );
}
```

Para resolver este problema, tomaremos de ejemplo la siguiente entrada (caja):

```js
const box = [
  '####',
  '#* #',
  '#  #',
  '####'
];
```

Analizando la caja podemos partir diciendo que la busqueda del asterisco `*` se hará en las lineas interiores de la caja, es decir, no se buscará en los bordes superiores e inferiores de la caja, ya que si el asterisco está en los bordes de la caja, no se considerará como dentro de la caja.

Para esto, eliminamos el primer y último elemento de la caja, ya que no necesitamos verificar los bordes de la caja:

```js
box.slice(1, -1);
```

`slice(1, -1)` nos permite obtener un nuevo arreglo que comienza desde el índice 1 y termina en el penúltimo elemento. Esto nos dará:

```js
[
  '#* #',
  '#  #'
]
```

Luego, verificamos si alguna de las líneas interiores contiene un asterisco `*` y si el asterisco no está tanto en el borde izquierdo como en el borde derecho de la caja. Para esto, utilizamos las siguientes condiciones:

```js
line.includes('*') &&
line.indexOf('*') > 0 &&
line.indexOf('*') < line.length - 1
```

Para este ejemplo utilizamos el método `some` para verificar si alguna de las líneas cumple con las condiciones mencionadas. Si es así, devolvemos `true`, de lo contrario, devolvemos `false`. Hay que tener en cuenta que el método `some` se detiene en cuanto encuentra un valor verdadero.

Para este caso el arreglo se recorreria 2 veces, entonces tenemos que para la primera linea `#* #` se cumple la condición de que el asterisco no está en los bordes de la caja, pero si dentro de ella, por lo que devolvemos `true`. ¿Por qué?

Validamos la primera iteracion donde tenemos la linea `#* #`:

Tenemos que para la primera condición `line.includes('*')` es verdadera, ya que la linea contiene un asterisco `*`.

Para la segunda condición `line.indexOf('*') > 0` es verdadera, ya que el asterisco no está en el borde izquierdo de la caja.

```js
// Reemplazamos los valores de la linea por sus indices
// #* #
// 0123

line.indexOf('*') = 1;

// 1 > 0
line.indexOf('*') > 0; // true
```

Para la tercera condición `line.indexOf('*') < line.length - 1` es verdadera, ya que el asterisco no está en el borde derecho de la caja.

```js
// Reemplazamos los valores de la linea por sus indices
// #* #
// 0123

line.indexOf('*') = 1;
line.length - 1 = 3;

// 1 < 3
line.indexOf('*') < line.length - 1; // true
```

Tenemos que para la primera iteración nos devolvería `true`, ya que tenemos lo siguiente:

```js
// Line: #* #

line.includes('*') = true;
line.indexOf('*') > 0 = true;
line.indexOf('*') < line.length - 1 = true;

// true && true && true = true
```

Como la primera iteración nos devolvió `true`, el método `some` se detiene y no sigue iterando sobre las demás lineas.

Por lo que el resultado final sería `true`.

**Probemos ahora con una entrada que nos devuelva `false`**:

```js
const box = [
  '#####',
  '#   #',
  '#   #',
  '#   #',
  '#####'
];
```

Primero, eliminamos el primer y último elemento de la caja:

```js
box.slice(1, -1);
```

Esto nos dará:

```js
[
  '#   #',
  '#   #',
  '#   #'
]
```

Luego, verificamos si alguna de las líneas contiene un asterisco `*` y si el asterisco no está en los bordes de la caja:

```js
line.includes('*') &&
line.indexOf('*') > 0 &&
line.indexOf('*') < line.length - 1
```

Para este caso el arreglo se recorreria 3 veces.

Validamos la primera iteracion donde tenemos la linea `#   #`:

Tenemos que para la primera condición `line.includes('*')` es falsa, ya que la linea no contiene un asterisco `*`.

Para la segunda condición `line.indexOf('*') > 0` es falsa, ya que el asterisco no está en el borde izquierdo de la caja.

```js
// Reemplazamos los valores de la linea por sus indices
// #   #
// 01234

line.indexOf('*') = -1;

// -1 > 0
line.indexOf('*') > 0; // false
```

Para la tercera condición `line.indexOf('*') < line.length - 1` es verdadera, Aunque la linea no contiene un asterisco, la condición se cumple, ya que el asterisco no está en el borde derecho de la caja.

```js
// Reemplazamos los valores de la linea por sus indices
// #   #
// 01234

line.indexOf('*') = -1;
line.length - 1 = 4;

// -1 < 4
line.indexOf('*') < line.length - 1; // true
```

Para esta primera iteración nos devolvería `false`, ya que tenemos lo siguiente:

```js
// Line: #   #

line.includes('*') = false;
line.indexOf('*') > 0 = false;
line.indexOf('*') < line.length - 1 = true;

// false && false && true = false
```

Es curioso como es que la tercera condición se cumple, aunque la linea no contiene un asterisco `*`. Sin embargo, como la primera condición es falsa, el resultado final sería `false`.

Como las demás lineas son iguales, el resultado para las tres iteraciones restantes sería `false`, ya que no se cumple la condición de que el asterisco no está en los bordes de la caja. Por lo que el resultado final sería `false`.

**Veamos este caso curioso**:

```js
const box = [
  "#####",
  "#   #",
  "#  #*",
  "#####"
]
```

Primero, eliminamos el primer y último elemento de la caja:

```js
box.slice(1, -1);
```

Esto nos dará:

```js
[
  '#   #',
  '#  #*'
]
```

Tomamos la primera iteración donde tenemos la linea `#   #`:

Como este caso ya lo hemos analizado anteriormente, sabemos que el resultado sería `false`.

Para la segunda iteración donde tenemos la linea `#  #*`:

Tenemos que para la primera condición `line.includes('*')` es verdadera, ya que la linea contiene un asterisco `*`.

Para la segunda condición `line.indexOf('*') > 0` es verdadera, ya que el asterisco no está en el borde izquierdo de la caja, pero al parecer está dentro de la caja.

```js
// Reemplazamos los valores de la linea por sus indices
// #  #*
// 012345

line.indexOf('*') = 4;

// 4 > 0
line.indexOf('*') > 0; // true
```

Para la tercera condición `line.indexOf('*') < line.length - 1` es falso, ya que el asterisco está en el borde derecho de la caja.

```js
// Reemplazamos los valores de la linea por sus indices
// #  #*
// 012345

line.indexOf('*') = 4;
line.length - 1 = 4;

// 4 < 4
line.indexOf('*') < line.length - 1; // false
```

Para esta segunda iteración nos devolvería `false`, ya que tenemos lo siguiente:

```js
// Line: #  #*

line.includes('*') = true;
line.indexOf('*') > 0 = true;
line.indexOf('*') < line.length - 1 = false;

// true && true && false = false
```

Como la primera iteración nos devolvió `false`, el método `some` se detiene y no sigue iterando sobre las demás lineas. Pero como solo tenemos dos lineas, el resultado final sería `false`.
