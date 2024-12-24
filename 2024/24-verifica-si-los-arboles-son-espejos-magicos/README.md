# Reto 24: Verifica-si-los-arboles-son-espejos-magicos

En el Polo Norte, los elfos tienen **dos árboles binarios mágicos que generan energía** 🌲🌲 para mantener encendida la estrella navideña ⭐️. Sin embargo, para que funcionen correctamente, los árboles deben estar en perfecta sincronía como espejos 🪞.

**Dos árboles binarios son espejos si:**

- Las raíces de ambos árboles tienen el mismo valor.
- Cada nodo del primer árbol debe tener su correspondiente nodo en la posición opuesta en el segundo árbol.

Y el árbol se representa con tres propiedades `value`, `left` y `right`. Dentro de estas dos últimas va mostrando el resto de ramas (si es que tiene):

```js
const tree = {
  value: '⭐️',
  left: {
    value: '🎅'
    // left: {...}
    // right: { ... }
  },
  right: {
    value: '🎁'
    // left: { ... }
    // right: { ...&nbsp;}
  }
}
```

Santa necesita tu ayuda para verificar si los árboles están sincronizados para que la estrella pueda seguir brillando. **Debes devolver un array** donde la **primera posición indica si los árboles están sincronizados** y **la segunda posición devuelve el valor de la raíz del primer árbol**.

```js
const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

const tree2 = {
  value: '🎄',
  left: { value: '🎅' }
  right: { value: '⭐' },
}

isTreesSynchronized(tree1, tree2) // [true, '🎄']

/*
  tree1          tree2
   🎄              🎄
  / \             / \
⭐   🎅         🎅   ⭐
*/

const tree3 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '🎁' }
}

isTreesSynchronized(tree1, tree3) // [false, '🎄']

const tree4 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

isTreesSynchronized(tree1, tree4) // [false, '🎄']

isTreesSynchronized(
  { value: '🎅' },
  { value: '🧑‍🎄' }
) // [false, '🎅']
```

## Mi solución explicada

```js
function isTreesSynchronized(tree1, tree2) {
  function areMirrors(node1, node2) {
    if (!node1 && !node2) return true;
    if (!node1 || !node2 || node1.value !== node2.value) return false;

    const leftAndRightAreMirrors = areMirrors(node1.left, node2.right);
    const rightAndLeftAreMirrors = areMirrors(node1.right, node2.left);

    return leftAndRightAreMirrors && rightAndLeftAreMirrors;
  }

  const synchronized = tree1.value === tree2.value && areMirrors(tree1, tree2);

  return [synchronized, tree1.value];
}
```

Para resolver este reto, nuevamente utilizaremos la técnica de recursión.

Creamos una función `areMirrors` que recibe dos nodos y verifica si son espejos. Dentro tendremos las siguientes condiciones:

- Si ambos nodos son `null`, devolvemos `true`, ya que no hay nada que comparar.
- Si uno de los dos nodos es `null`, o si los valores de los nodos son diferentes, devolvemos `false`. Ya que no cumplen con las condiciones para ser espejos.

Luego, comparamos los nodos izquierdos y derechos de ambos árboles. Para esto, llamamos a la función `areMirrors` con los nodos `node1.left` y `node2.right`, y con `node1.right` y `node2.left`. Si ambos son espejos, devolvemos `true`. De lo contrario, devolvemos `false`.

Seguidamente, comparamos si los árboles son sincronizados. Para esto, verificamos si los valores de las raíces son iguales y si los árboles son espejos.

Aquí utilizaremos un concepto de JavaScript llamado **short-circuit evaluation**. Si la primera condición es `false`, no se evaluará la segunda condición. Por lo tanto, si los valores de las raíces son diferentes, no se evaluará la función `areMirrors`.

Finalmente, devolvemos un array con la variable `synchronized` y el valor de la raíz del primer árbol.

**Veamos con un ejemplo donde opera el short-circuit evaluation:**

Supongamos que tenemos la siguiente entrada:

```js
const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

const tree2 = {
  value: '🎁',
  left: { value: '🎅' }
  right: { value: '⭐' },
}
```

En este caso, los valores de las raíces son diferentes (`🎄` y `🎁`). Por lo tanto, no se evaluará la función `areMirrors`.

```js
const synchronized = tree1.value === tree2.value && areMirrors(tree1, tree2);

// const synchronized = '🎄' === '🎁' && areMirrors(tree1, tree2);
// const synchronized = false && areMirrors(tree1, tree2);
const synchronized = false;
```

Como la primera condición es `false`, no se evaluará la segunda condición. Por lo tanto, la función `areMirrors` no se ejecutará. Procemos a devolver `[false, '🎄']`.

```js
// return [synchronized, tree1.value];
return [false, '🎄'];
```

**Veamos un ejemplo mas complejo**:

Supongamos que tenemos la siguiente entrada:

```js
const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

const tree2 = {
  value: '🎄',
  left: { value: '🎅' }
  right: { value: '⭐' },
}
```

En este caso, los valores de las raíces son iguales (`🎄`). Por lo tanto, se evaluará la función `areMirrors`.

```js
const synchronized = tree1.value === tree2.value && areMirrors(tree1, tree2);

// const synchronized = '🎄' === '🎄' && areMirrors(tree1, tree2
// const synchronized = true && areMirrors(tree1, tree2);
```

Como la primera condición es `true`, se evaluará la segunda condición. En este caso, la función `areMirrors` se ejecutará.

```js
areMirrors(tree1, tree2);
```

Dentro de la función `areMirrors`, se evaluarán los nodos izquierdos y derechos de ambos árboles.

Primero evaluamos la condición donde si ambos nodos son `null`, devolvemos `true`.

```js
if (!node1 && !node2) return true;
```

Como los nodos no son `null`, pasamos a la siguiente condición.

```js
// en este momento tenemos los siguientes valores
node1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

node2 = {
  value: '🎄',
  left: { value: '🎅' }
  right: { value: '⭐' },
}
```

```js
if (!node1 || !node2 || node1.value !== node2.value) return false;
// if (!node1 || !node2 || '🎄' !== '🎄') return false;
// if (false || false || false) return false;
// if (false) return false;

// como no se cumple la condición, pasamos a lo siguiente
```

Como los nodos no son `null` y los valores son iguales, pasamos a evaluar los nodos izquierdos y derechos de ambos árboles.

```js
const leftAndRightAreMirrors = areMirrors(node1.left, node2.right);
const rightAndLeftAreMirrors = areMirrors(node1.right, node2.left);
```

Enfoquémonos en el primer caso, donde evaluamos los nodos izquierdos.

```js
const leftAndRightAreMirrors = areMirrors(node1.left, node2.right);

// const leftAndRightAreMirrors = areMirrors({ value: '⭐' }, { value: '⭐' });
```

Volvemos a entrar a la función `areMirrors` y evaluamos los nodos.

```js
if (!node1 && !node2) return true;
// if (!{ value: '⭐' } && !{ value: '⭐' }) return true;
// if (false && false) return true;
// if (false) return true;

// como se cumple la condición pasamos a la siguiente
```

Pasamos a la siguiente condición.

```js
if (!node1 || !node2 || node1.value !== node2.value) return false;
// if (false || false || '⭐' !== '⭐') return false;
// if (false || false || false) return false;
// if (false) return false;

// como no se cumple la condición, pasamos a lo siguiente
```

Como los nodos no son `null` y los valores son iguales, pasamos a evaluar los nodos izquierdos y derechos.

```js
const leftAndRightAreMirrors = areMirrors(node1.left, node2.right);
const rightAndLeftAreMirrors = areMirrors(node1.right, node2.left);

// const leftAndRightAreMirrors = areMirrors(null, null);
// const rightAndLeftAreMirrors = areMirrors(null, null);
```

Aqui en ambos casos, los nodos son `null`, por lo que devolvemos `true`.

```js
// llamado de leftAndRightAreMirrors

if (!node1 && !node2) return true;
// if (!null && !null) return true;
// if (true && true) return true;
return true;
```

```js
// llamado de rightAndLeftAreMirrors

if (!node1 && !node2) return true;
// if (!null && !null) return true;
// if (true && true) return true;
return true;
```

Como ambos valores son `true`, devolvemos `true`.

```js
return leftAndRightAreMirrors && rightAndLeftAreMirrors;
// return true && true;
return true;
```

Ahora regresamos al primer llamado donde primero nos enfocamos en el `leftAndRightAreMirrors`. Ya evaluamos este llamado y nos devolvio `true`.

```js
const leftAndRightAreMirrors = areMirrors({ value: '⭐' }, { value: '⭐' });
const rightAndLeftAreMirrors = areMirrors({ value: '🎅' }, { value: '🎅' });
```

Ahora evaluamos el segundo llamado.

```js
const leftAndRightAreMirrors = true;
const rightAndLeftAreMirrors = areMirrors({ value: '🎅' }, { value: '🎅' });
```

Volvemos a entrar a la función `areMirrors` y evaluamos los nodos.

```js
if (!node1 && !node2) return true;
// if (!{ value: '🎅' } && !{ value: '🎅' }) return true;
// if (false && false) return true;
// if (false) return true;

// como se cumple la condición, devolvemos true
```

Pasamos a la siguiente condición.

```js
if (!node1 || !node2 || node1.value !== node2.value) return false;
// if (false || false || '🎅' !== '🎅') return false;
// if (false) return false;

// como no se cumple la condición, pasamos a lo siguiente
```

Como los nodos no son `null` y los valos son iguales, pasamos a evaluar los nodos izquierdos y derechos.

```js
const leftAndRightAreMirrors = areMirrors(node1.left, node2.right);
const rightAndLeftAreMirrors = areMirrors(node1.right, node2.left);

// const leftAndRightAreMirrors = areMirrors(null, null);
// const rightAndLeftAreMirrors = areMirrors(null, null);
```

Aqui en ambos casos, los nodos son `null`, por lo que devolvemos `true`.

```js
// llamado de leftAndRightAreMirrors

if (!node1 && !node2) return true;
// if (!null && !null) return true;
// if (true && true) return true;
return true;
```

```js
// llamado de rightAndLeftAreMirrors

if (!node1 && !node2) return true;
// if (!null && !null) return true;
// if (true && true) return true;
return true;
```

Como ambos valores son `true`, devolvemos `true`.

```js
return leftAndRightAreMirrors && rightAndLeftAreMirrors;
// return true && true;
return true;
```

Ahora regresamos al primer llamado donde primero nos enfocamos en el `rightAndLeftAreMirrors`. Ya evaluamos este llamado y nos devolvio `true`.

```js
// const leftAndRightAreMirrors = areMirrors({ value: '⭐' }, { value: '⭐' });
// const rightAndLeftAreMirrors = areMirrors({ value: '🎅' }, { value: '🎅' });

const leftAndRightAreMirrors = true;
const rightAndLeftAreMirrors = true;
```

Evaluamos si ambos valores son `true`.

```js
return leftAndRightAreMirrors && rightAndLeftAreMirrors;
// return true && true;
return true;
```

Como ambos valores son `true`, devolvemos `true`. Entonces el resultado de la función `areMirrors` es `true`.

```js
const synchronized = tree1.value === tree2.value && areMirrors(tree1, tree2);
// const synchronized = '🎄' === '🎄' && true;
// const synchronized = true && true;
const synchronized = true;
```

Finalmente, devolvemos `[true, '🎄']`.

```js
return [synchronized, tree1.value];
// return [true, '🎄'];
```

Y con esto hemos terminado de resolver el reto 🎉.
