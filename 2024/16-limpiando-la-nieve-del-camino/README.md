# Reto 16: Limpiando-la-nieve-del-camino

Los elfos están trabajando arduamente para limpiar los caminos llenos de nieve mágica ❄️. Esta nieve tiene una propiedad especial: si dos montículos de nieve **idénticos y adyacentes se encuentran, desaparecen automáticamente.**

Tu tarea es escribir una función que ayude a los elfos a simular este proceso. **El camino se representa por una cadena de texto y cada montículo de nieve un carácter.**

Tienes que eliminar todos los montículos de nieve adyacentes que sean iguales **hasta que no queden más movimientos posibles.**

El resultado debe ser el camino final después de haber eliminado todos los montículos duplicados:

```js
removeSnow('zxxzoz') // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

removeSnow('abcdd') // -> "abc"
// 1. Eliminamos "dd", quedando "abc"

removeSnow('zzz') // -> "z"
// 1. Eliminamos "zz", quedando "z"

removeSnow('a') // -> "a"
// No hay montículos repetidos
```

## Mi solución explicada

```js
function removeSnow(s) {
  const stack = [];

  for (const snow of s) {
    if (stack.at(-1) === snow) {
      stack.pop();
    } else {
      stack.push(snow);
    }
  }

  return stack.join('');
}
```

Para resolver este problema, hay que comprender primero lo que se pide, tenemos que eliminar todos los montículos de nieve adyacentes que sean iguales hasta que no queden más movimientos posibles. Pero,

- **¿Qué es un montículo de nieve adyacente?** Son dos montículos de nieve que están uno al lado del otro. Por ejemplo, en la cadena `'zxxzoz'`, los montículos de nieve adyacentes son `'xx'` y `'zz'`. En cambio, `'z'` y `'o'` no son adyacentes.

- **¿Qué significa que dos montículos de nieve sean iguales?** Significa que los dos montículos de nieve tienen el mismo carácter. Por ejemplo, en la cadena `'zxxzoz'`, los montículos de nieve `'xx'` y `'zz'` son iguales porque ambos tienen el carácter `'z'`. En cambio, `'z'` y `'o'` que al sobrar no son iguales.

Para resolver el problema, he utilizado una pila (stack) como estructura de datos. Esta es una elección adecuada porque nos permite almacenar temporalmente los montículos de nieve y eliminar los adyacentes de forma eficiente.

1. Inicializamos una pila vacía.
2. Recorremos cada carácter de la cadena:
    - Si el carácter actual es igual al último carácter almacenado en la pila (el tope de la pila), eliminamos ese último carácter porque representan montículos iguales y adyacentes.
    - Si no son iguales, agregamos el carácter actual a la pila.
3. Una vez procesados todos los caracteres, la pila contendrá el camino final, con todos los montículos de nieve adyacentes y duplicados eliminados.
4. Finalmente, convertimos la pila en una cadena y la devolvemos como resultado.

**Veamos como funciona:**

Supongamos que tenemos la cadena `'abbacddce'`. Para esto vamos a recorrer cada montículo de nieve de la cadena con un bucle `for...of`, utilizaremos `at(-1)` para obtener el último elemento de la pila, `pop()` para eliminar el último elemento de la pila, y `push()` para añadir un elemento a la pila. Como la cadena `'abbacddce'` tiene 9 montículos de nieve, se realizarán 9 iteraciones.

Para la primera iteración, el montículo de nieve actual es `'a'` y la pila está vacía. Como la pila está vacía, añadimos el montículo de nieve actual a la pila. La pila ahora contiene `['a']`.

```js
snow: 'a'
stack: []

// if(stack.at(-1) === snow)
// if([].at(-1) === 'a')
// if(undefined === 'a')
if(false)

// como la condición es falsa, añadimos el montículo de nieve actual a la pila
stack.push(snow)
```

Para este momento, la pila contiene `['a']`.

Para la segunda iteración, el montículo de nieve actual es `'b'` y la pila contiene `['a']`. Como el montículo de nieve actual es diferente al último montículo de nieve almacenado en la pila, añadimos el montículo de nieve actual a la pila. La pila ahora contiene `['a', 'b']`.

```js
snow: 'b'
stack: ['a']

// if(stack.at(-1) === snow)
// if(['a'].at(-1) === 'b')
// if('a' === 'b')
if(false)

// como la condición es falsa, añadimos el montículo de nieve actual a la pila
stack.push(snow)
```

Para este momento, la pila contiene `['a', 'b']`.

Para la tercera iteración, el montículo de nieve actual es `'b'` y la pila contiene `['a', 'b']`. Como el montículo de nieve actual es igual al último montículo de nieve almacenado en la pila, eliminamos el último montículo de nieve de la pila. La pila ahora contiene `['a']`.

```js
snow: 'b'
stack: ['a', 'b']

// if(stack.at(-1) === snow)
// if(['a', 'b'].at(-1) === 'b')
// if('b' === 'b')
if(true)

// como la condición es verdadera, eliminamos el último montículo de nieve de la pila
stack.pop()
```

Para este momento, la pila contiene `['a']`.

Para la cuarta iteración, el montículo de nieve actual es `'a'` y la pila contiene `['a']`. Como el montículo de nieve actual es igual al último montículo de nieve almacenado en la pila, eliminamos el último montículo de nieve de la pila. La pila ahora contiene `[]`.

```js
snow: 'a'
stack: ['a']

// if(stack.at(-1) === snow)
// if(['a'].at(-1) === 'a')
// if('a' === 'a')
if(true)

// como la condición es verdadera, eliminamos el último montículo de nieve de la pila
stack.pop()
```

Para este momento, la pila está vacía `[]`.

Para la quinta iteración, el montículo de nieve actual es `'c'` y la pila está vacía. Como la pila está vacía, añadimos el montículo de nieve actual a la pila. La pila ahora contiene `['c']`.

```js
snow: 'c'
stack: []

// if(stack.at(-1) === snow)
// if([].at(-1) === 'c')
// if(undefined === 'c')
if(false)

// como la condición es falsa, añadimos el montículo de nieve actual a la pila
stack.push(snow)
```

Para este momento, la pila contiene `['c']`.

Para la sexta iteración, el montículo de nieve actual es `'d'` y la pila contiene `['c']`. Como el montículo de nieve actual es diferente al último montículo de nieve almacenado en la pila, añadimos el montículo de nieve actual a la pila. La pila ahora contiene `['c', 'd']`.

```js
snow: 'd'
stack: ['c']

// if(stack.at(-1) === snow)
// if(['c'].at(-1) === 'd')
// if('c' === 'd')
if(false)

// como la condición es falsa, añadimos el montículo de nieve actual a la pila
stack.push(snow)
```

Para este momento, la pila contiene `['c', 'd']`.

Para la séptima iteración, el montículo de nieve actual es `'d'` y la pila contiene `['c', 'd']`. Como el montículo de nieve actual es igual al último montículo de nieve almacenado en la pila, eliminamos el último montículo de nieve de la pila. La pila ahora contiene `['c']`.

```js
snow: 'd'
stack: ['c', 'd']

// if(stack.at(-1) === snow)
// if(['c', 'd'].at(-1) === 'd')
// if('d' === 'd')
if(true)

// como la condición es verdadera, eliminamos el último montículo de nieve de la pila
stack.pop()
```

Para este momento, la pila contiene `['c']`.

Para la octava iteración, el montículo de nieve actual es `'c'` y la pila contiene `['c']`. Como el montículo de nieve actual es igual al último montículo de nieve almacenado en la pila, eliminamos el último montículo de nieve de la pila. La pila ahora contiene `[]`.

```js
snow: 'c'
stack: ['c']

// if(stack.at(-1) === snow)
// if(['c'].at(-1) === 'c')
// if('c' === 'c')
if(true)

// como la condición es verdadera, eliminamos el último montículo de nieve de la pila
stack.pop()
```

Para este momento, la pila está vacía `[]`.

Para la novena iteración, el montículo de nieve actual es `'e'` y la pila está vacía. Como la pila está vacía, añadimos el montículo de nieve actual a la pila. La pila ahora contiene `['e']`.

```js
snow: 'e'
stack: []

// if(stack.at(-1) === snow)
// if([].at(-1) === 'e')
// if(undefined === 'e')
if(false)

// como la condición es falsa, añadimos el montículo de nieve actual a la pila
stack.push(snow)
```

Para este momento, la pila contiene `['e']`.

Como hemos recorrido todos los montículos de nieve de la cadena `'abbacddce'`, la pila contiene el resultado final `['e']`. Finalmente, devolvemos la pila como una cadena `'e'`.

```js
// return stack.join('')
// return ['e'].join('')
return 'e'
```

La cadena final después de haber eliminado todos los montículos duplicados es `'e'`.

Y así es como se resuelve este problema 🎉
