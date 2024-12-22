# Reto 21: Calcula-la-altura-del-arbol-de-navidad

Santa Claus 🎅 está decorando un árbol de Navidad mágico 🪄, que este año tiene una estructura especial en forma de **árbol binario.** Cada nodo del árbol representa un regalo, y Santa quiere saber la **altura del árbol** para colocar la estrella mágica en la punta.

Tu tarea es escribir una función que calcule la altura de un árbol binario. La altura de un árbol binario se define como el número máximo de niveles desde la raíz hasta una hoja. Un árbol vacío tiene una altura de 0.

```js
// Definición del árbol
const tree = {
  value: '🎁',
  left: {
    value: '🎄',
    left: {
      value: '⭐',
      left: null,
      right: null
    },
    right: {
      value: '🎅',
      left: null,
      right: null
    }
  },
  right: {
    value: '❄️',
    left: null,
    right: {
      value: '🦌',
      left: null,
      right: null
    }
  }
}

// Representación gráfica del árbol:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

// Llamada a la función
treeHeight(tree)
// Devuelve: 3
```

## Mi solución explicada

```js
function treeHeight(tree) {
  if (!tree) return 0;

  const leftHeight = treeHeight(tree.left);
  const rightHeight = treeHeight(tree.right);

  return Math.max(leftHeight, rightHeight) + 1;
}
```

Para resolver este reto, existen diferentes formas de recorrer un árbol binario. En este caso, he optado por utilizar una función recursiva que recorra el árbol en **preorden**. La función `treeHeight` recibe un nodo del árbol y devuelve la altura del árbol.

Como vamos a trabajar con recursividad, la primera condición que debemos comprobar es si el nodo es `null`. En este caso, devolvemos 0, ya que un árbol vacío tiene una altura de 0.

Si el nodo no es `null`, calculamos la altura de los subárboles izquierdo y derecho. La altura de un árbol es el máximo entre la altura del subárbol izquierdo y la altura del subárbol derecho, más 1 (por el nodo actual). Para esto utilizamos la función `Math.max` para obtener el máximo entre `leftHeight` y `rightHeight`, y sumamos 1.

Implicitamente, la función `treeHeight` se va llamando a sí misma con los nodos izquierdo y derecho, hasta llegar a un nodo `null`. En ese momento, se empiezan a devolver los valores de la altura de los subárboles, y se van sumando hasta llegar a la raíz del árbol.

**Veamos cómo se resuelve con un ejemplo:**

Supongamos que tenemos el siguiente árbol:

```js
const tree = {
  value: '🎁',
  left: {
    value: '🎄',
    left: {
      value: '⭐',
      left: {
        value: '🎅',
        left: null,
        right: null,
      },
      right: null,
    },
    right: null,
  },
  right: null,
}
```

Visualmente, el árbol se vería así:

```txt
        🎁
       /
     🎄
    /
   ⭐
  /
 🎅
```

Para la primera llamada, el nodo actual es la raíz del árbol `🎁`

```js
tree = {
  value: '🎁',
  left: {
    value: '🎄',
    left: {
      value: '⭐',
      left: {
        value: '🎅',
        left: null,
        right: null,
      },
      right: null,
    },
    right: null,
  },
  right: null,
}
```

Como `tree` no es `null`, calculamos la altura de los subárboles izquierdo y derecho:

```js
if (!tree) return 0;
(false) --> No se cumple la condición

const leftHeight = treeHeight(tree.left);
const rightHeight = treeHeight(tree.right);
```

**Primero nos enfocaremos en el `rightHeight`** ya que es el más sencillo. En este caso, el subárbol derecho es `null`, por lo que la altura del subárbol derecho es `0`.

La entrada para el subárbol derecho es:

```js
tree.right = null

//treeHeight(tree.right)
treeHeight(null)
```

Como `tree` es `null`, se cumple la condición y devolvemos `0`.

```js
// tree = null

// if (!tree) return 0;
// if (!null) return 0;
if (true) return 0 -> Se cumple la condición

return 0;
```

**Ahora nos enfocaremos en el `leftHeight`.** En este caso, el subárbol izquierdo `🎁` tiene un nodo `🎄` un subárbol izquierdo y un subárbol derecho. La entrada para el subárbol izquierdo es:

```js
tree = {
  value: '🎄',
  left: {
    value: '⭐',
    left: {
      value: '🎅',
      left: null,
      right: null,
    },
    right: null,
  },
  right: null,
}
```

Como `tree` no es `null`, calculamos la altura de los subárboles izquierdo y derecho:

```js
if (!tree) return 0;
(false) --> No se cumple la condición

const leftHeight = treeHeight(tree.left);
const rightHeight = treeHeight(tree.right);
```

**Primero nos enfocaremos en el `rightHeight`** ya que es el más sencillo. Como ya hemos visto, el subárbol derecho es `null`, por lo que la altura del subárbol derecho es 0.

```js
tree.right = null

//treeHeight(tree.right)
treeHeight(null) -> 0
```

**Ahora nos enfocaremos en el `leftHeight`.** En este caso, el subárbol izquierdo `🎄` tiene un nodo `⭐` y un subárbol izquierdo. La entrada para el subárbol izquierdo es:

```js
tree = {
  value: '⭐',
  left: {
    value: '🎅',
    left = null,
    right = null,
  },
  right: null,
}
```

Como `tree` no es `null`, calculamos la altura de los subárboles izquierdo y derecho:

```js
if (!tree) return 0;
(false) --> No se cumple la condición

const leftHeight = treeHeight(tree.left);
const rightHeight = treeHeight(tree.right);
```

**Primero nos enfocaremos en el `rightHeight`** ya que es el más sencillo. En este caso, el subárbol derecho es `null`, por lo que la altura del subárbol derecho es `0`.

```js
tree.right = null

//treeHeight(tree.right)
treeHeight(null) -> 0
```

**Ahora nos enfocaremos en el `leftHeight`.** En este caso, el subárbol izquierdo `⭐` tiene un nodo `🎅` que es una hoja. La entrada para el subárbol izquierdo es:

```js
tree = {
  value: '🎅',
  left: null,
  right: null,
}
```

Como `tree` no es `null`, calculamos la altura de los subárboles izquierdo y derecho:

```js
if (!tree) return 0;
(false) --> No se cumple la condición

const leftHeight = treeHeight(tree.left);
const rightHeight = treeHeight(tree.right);
```

**Primero nos enfocaremos en el `rightHeight`** ya que es el más sencillo. En este caso, el subárbol derecho es `null`, por lo que la altura del subárbol derecho es `0`.

```js
tree.right = null

//treeHeight(tree.right)
treeHeight(null) -> 0
```

**Ahora nos enfocaremos en el `leftHeight`.** En este caso, el subárbol izquierdo `🎅` es una hoja, por lo que la altura del subárbol izquierdo es `0`.

```js
tree.left = null

//treeHeight(tree.left)
treeHeight(null) -> 0
```

Como ya hemos llegado a una hoja, empezamos a devolver los valores de la altura de los subárboles, y se van sumando hasta llegar a la raíz del árbol.

Entonces tenemos que para el nodo `🎅`:

```js
//const leftHeight = treeHeight(tree.left);
const leftHeight = 0;

//const rightHeight = treeHeight(tree.right);
const rightHeight = 0;

//return Math.max(leftHeight, rightHeight) + 1;
// return Math.max(0, 0) + 1;
// return 0 + 1;
return 1;
```

Para el nodo `⭐`:

```js
//const leftHeight = treeHeight(tree.left);
const leftHeight = 1;

//const rightHeight = treeHeight(tree.right);
const rightHeight = 0;

//return Math.max(leftHeight, rightHeight) + 1;
// return Math.max(1, 0) + 1;
// return 1 + 1;
return 2;
```

Para el nodo `🎄`:

```js
//const leftHeight = treeHeight(tree.left);
const leftHeight = 2;

//const rightHeight = treeHeight(tree.right);
const rightHeight = 0;

//return Math.max(leftHeight, rightHeight) + 1;
// return Math.max(2, 0) + 1;
// return 2 + 1;
return 3;
```

Finalmente, para el nodo `🎁`:

```js
//const leftHeight = treeHeight(tree.left);
const leftHeight = 3;

//const rightHeight = treeHeight(tree.right);
const rightHeight = 0;

//return Math.max(leftHeight, rightHeight) + 1;
// return Math.max(3, 0) + 1;
// return 3 + 1;
return 4;
```

Por lo tanto, la altura del árbol es `4`.

Y así es como resolvemos este reto utilizando una función recursiva que recorre el árbol en preorden. 🎄
