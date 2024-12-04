# Reto 04: Decorando-el-arbol-de-navidad

**¡Es hora de poner el árbol de Navidad en casa!** 🎄 Pero este año queremos que sea especial. Vamos a crear una función que recibe la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.

La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:

- El árbol está compuesto de triángulos de caracteres especiales.
- Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
- Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
- El árbol siempre debe tener la misma longitud por cada lado.
- Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.

**Ejemplos:**

```js
const tree = createXmasTree(5, '*')
console.log(tree)
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, '+')
console.log(tree2)
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, '@')
console.log(tree3)
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/
```

Asegúrate de utilizar saltos de línea \n al final de cada línea, excepto en la última.

## Mi solución explicada

```js
function createXmasTree(height, ornament) {
  const totalWidth = 2 * height - 1;
  const trunkPadding = '_'.repeat((totalWidth - 1) / 2);

  const tree = Array.from({ length: height }, (_, i) => {
    const layerWidth = 2 * i + 1;
    const spaces = '_'.repeat((totalWidth - layerWidth) / 2);
    return spaces + ornament.repeat(layerWidth) + spaces;
  });

  const trunk = `${trunkPadding}#${trunkPadding}`;
  tree.push(trunk, trunk);

  return tree.join('\n');
}
```

Primero, calculamos el ancho total del árbol. Multiplicamos la altura por 2 y le restamos 1 para obtener el ancho total.

```js
const totalWidth = 2 * height - 1;
```

¿Por qué la fórmula `(2 * height - 1)`?

Tomemos como ejemplo un árbol de altura 5. (`createXmasTree(5, '*')`) El ancho total del árbol es 9. Si multiplicamos la altura por 2, obtenemos 10, pero el ancho real del árbol es 9. Por eso restamos 1.

Luego, calculamos el relleno del tronco del árbol. El relleno del tronco es igual a la mitad del ancho total  (anteriormente calcualado) menos 1 (para que el tronco tenga la misma longitud por cada lado). Usamos el método `repeat` para crear una cadena de guiones bajos del tamaño adecuado.

```js
const trunkPadding = '_'.repeat((totalWidth - 1) / 2);
```

Después, creamos el árbol. Usamos `Array.from` para crear un array de longitud `height`. Iteramos sobre cada elemento del array y calculamos el ancho de la capa actual. El ancho de la capa actual es igual a `2 * i + 1`, donde `i` es el índice actual.

```js
const tree = Array.from({ length: height }, (_, i) => {
  const layerWidth = 2 * i + 1;
  const spaces = '_'.repeat((totalWidth - layerWidth) / 2);
  return spaces + ornament.repeat(layerWidth) + spaces;
});
```

Para cada capa, calculamos la cantidad de espacios a cada lado de la capa. La cantidad de espacios es igual a `(totalWidth - layerWidth) / 2`.

Por ejemplo, para la primera capa de un árbol de altura 5, el ancho de la capa es 1. El ancho total del árbol es 9. Por lo tanto, la cantidad de espacios a cada lado de la capa es `(9 - 1) / 2 = 4`. Para el adorno, repetimos el carácter especial de la capa `layerWidth` veces. Una vez que tenemos los espacios y el adorno, los concatenamos para formar la capa -> `spaces + ornament.repeat(layerWidth) + spaces`.

Quedando asi:

```txt
(9 - 1) / 2 = 4 --> 4 espacios a cada lado
2 * 0 + 1 = 1   --> 1 adorno (ornament)

____*____

```

Para la segunda capa, el ancho de la capa es 3. La cantidad de espacios a cada lado de la capa es `(9 - 3) / 2 = 3`.

```txt
(9 - 3) / 2 = 3 --> 3 espacios a cada lado
2 * 1 + 1 = 3   --> 3 adornos (ornament)

___***___

```

Para la tercera capa, el ancho de la capa es 5. La cantidad de espacios a cada lado de la capa es `(9 - 5) / 2 = 2`.

```txt
(9 - 5) / 2 = 2 --> 2 espacios a cada lado
2 * 2 + 1 = 5   --> 5 adornos (ornament)

__*****__

```

Para la cuarta capa, el ancho de la capa es 7. La cantidad de espacios a cada lado de la capa es `(9 - 7) / 2 = 1`.

```txt
(9 - 7) / 2 = 1 --> 1 espacio a cada lado
2 * 3 + 1 = 7   --> 7 adornos (ornament)

_*******_

```

Para la quinta capa, el ancho de la capa es 9. La cantidad de espacios a cada lado de la capa es `(9 - 9) / 2 = 0`.

```txt
(9 - 9) / 2 = 0 --> 0 espacios a cada lado
2 * 4 + 1 = 9   --> 9 adornos (ornament)

*********

```

Dando como resultado:

```txt
____*____
___***___
__*****__
_*******_
*********
```

Finalmente, creamos el tronco del árbol. El tronco del árbol es simplemente una cadena de guiones bajos seguida de dos almohadillas y otra cadena de guiones bajos.

```js
const trunk = `${trunkPadding}#${trunkPadding}`;
tree.push(trunk, trunk);
```

Nuevo árbol:

```txt
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
```

Unimos todas las capas del árbol con saltos de línea y devolvemos el árbol completo.

```js
return tree.join('\n');
```
