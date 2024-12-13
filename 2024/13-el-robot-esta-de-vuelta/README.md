# Reto 13: El-robot-esta-de-vuelta

Los elfos del Polo Norte han creado un **robot** 🤖 especial que ayuda a Papá Noel a distribuir regalos dentro de un gran almacén. **El robot se mueve en un plano 2D y partimos desde el origen (0, 0).**

Queremos saber si, tras ejecutar una serie de movimientos, el robot vuelve a estar justo donde empezó.

Las órdenes básicas del robot son:

- `L`: Mover hacia la izquierda
- `R`: Mover hacia la derecha
- `U`: Mover hacia arriba
- `D`: Mover hacia abajo

Pero también tiene ciertos modificadores para los movimientos:

- `*:` El movimiento se realiza con el doble de intensidad (ej: *R significa `RR`)
- `!:` El siguiente movimiento se invierte (ej: `R!L` se considera como `RR`)
- `?:` El siguiente movimiento se hace sólo si no se ha hecho antes (ej: R?R significa R)

**Nota:** Cuando el movimiento se invierte con `!` **se contabiliza el movimiento invertido y no el original.** Por ejemplo, !U?U invierte el movimiento de U, por lo que contabiliza que se hizo el movimiento D pero no el U. Así !U?U se traduce como D?U y, por lo tanto, se haría el movimiento U final.

Debes devolver:

- `true`: si el robot vuelve a estar justo donde empezó
- `[x, y]`: si el robot no vuelve a estar justo donde empezó, devolver la posición donde se detuvo

```js
isRobotBack('R')     // [1, 0]
isRobotBack('RL')    // true
isRobotBack('RLUD')  // true
isRobotBack('*RU')   // [2, 1]
isRobotBack('R*U')   // [1, 2]
isRobotBack('LLL!R') // [-4, 0]
isRobotBack('R?R')   // [1, 0]
isRobotBack('U?D')   // true
isRobotBack('R!L')   // [2,0]
isRobotBack('U!D')   // [0,2]
isRobotBack('R?L')   // true
isRobotBack('U?U')   // [0,1]
isRobotBack('*U?U')  // [0,2]
isRobotBack('U?D?U') // true

// Ejemplos paso a paso:
isRobotBack('R!U?U') // [1,0]
// 'R'  -> se mueve a la derecha
// '!U' -> se invierte y se convierte en 'D'
// '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

isRobotBack('UU!U?D') // [0,1]
// 'U'  -> se mueve arriba
// 'U'  -> se mueve arriba
// '!U' -> se invierte y se convierte en 'D'
// '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'
```

## Mi solución explicada

```js
function isRobotBack(moves) {
  let x = 0;
  let y = 0;

  const moveCount = {
    L: 0,
    R: 0,
    U: 0,
    D: 0,
  };
  const inverted = {
    L: 'R',
    R: 'L',
    U: 'D',
    D: 'U',
  };
  const directions = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  const applyMove = (move, factor = 1) => {
    moveCount[move] += factor;
    x += directions[move][0] * factor;
    y += directions[move][1] * factor;
  };

  moves.replace(/([*!?])?([LRUD])/g, (_, operator, move) => {
    if (operator === '*') applyMove(move, 2);
    else if (operator === '!') applyMove(inverted[move]);
    else if (!operator || (operator === '?' && !moveCount[move]))
      applyMove(move);
  });

  return x || y ? [x, y] : true;
}
```

Para poder resolver este reto, hay que tener en cuenta que el robot se mueve en un plano 2D y que partimos desde el origen (0, 0). Por lo tanto, si el robot vuelve a estar en el origen, devolvemos `true`, de lo contrario, devolvemos la posición donde se detuvo.

De primera instancia, inicializamos las variables `x` y `y` en 0, que representan la posición del robot en el plano 2D.

Despues, vamos a generar 3 objetos que nos ayudarán a realizar los movimientos del robot:

- `moveCount`: Un objeto que nos ayudará a contar cuántas veces se ha realizado cada movimiento. Inicializamos cada movimiento con un valor de 0.

- `inverted`: Un objeto que nos ayudará a invertir los movimientos. Por ejemplo, si el robot se mueve a la izquierda, al invertir el movimiento, se moverá a la derecha. Inicializamos cada movimiento con su movimiento inverso.

- `directions`: Un objeto que nos ayudará a saber en qué dirección se moverá el robot. Por ejemplo, si el robot se mueve hacia arriba, se moverá en el eje `y` con un valor de 1. Inicializamos cada movimiento con su dirección en el plano 2D.

Después, creamos una función llamada `applyMove` que recibe un movimiento y un factor. Esta función se encargará de aplicar el movimiento al robot y actualizar la posición del robot en el plano 2D. Si el factor es 2, el movimiento se realizará con el doble de intensidad. Por ejemplo, si el movimiento es `R` y el factor es 2, el robot se moverá dos veces hacia la derecha.

Después, utilizamos el método `replace` para recorrer cada movimiento, aquí aplicaremos la siguiente expresión regular `/([*!?])?([LRUD])/g`. Desmenuzamos la expresión regular y tenemos lo siguiente:

- `([*!?])?`: Agrupa los modificadores `*`, `!` y `?` y el signo de interrogación es opcional. Esto nos ayudará a saber si el movimiento tiene un modificador.

- `([LRUD])`: Agrupa los movimientos `L`, `R`, `U` y `D`. Esto nos ayudará a saber qué movimiento se realizará.

Dentro de la función de reemplazo, tenemos los siguientes parámetros:

- `_`: Representa la cadena completa que coincide con la expresión regular. En este caso, no lo utilizamos.

- `operator`: Representa el modificador del movimiento. Puede ser `*`, `!` o `?`. Si no hay modificador, el valor será `undefined`.

- `move`: Representa el movimiento que se realizará. Puede ser `L`, `R`, `U` o `D`. Si no hay movimiento, el valor será `undefined`.

Dentro de la función de reemplazo, aplicaremos la siguiente lógica:

- Si el operador es `*`, aplicamos el movimiento con un factor de 2. Por ejemplo, si el movimiento es `R` y el operador es `*`, el robot se moverá dos veces hacia la derecha. Para ello, llamamos a la función `applyMove` con el movimiento y el factor de 2.

- Si el operador es `!`, aplicamos el movimiento invertido. Por ejemplo, si el movimiento es `L` y el operador es `!`, el robot se moverá hacia la derecha. Para ello, llamamos a la función `applyMove` con el movimiento invertido. Para obtener el movimiento invertido, accedemos al objeto `inverted` con el movimiento. Por ejemplo, `inverted['L']` nos devolverá `R`. Luego, llamamos a la función `applyMove` con el movimiento invertido.

- Si no hay operador o si el operador es `?` y el movimiento no se ha realizado antes, aplicamos el movimiento. Para ello, llamamos a la función `applyMove` con el movimiento. Si el operador es `?`, verificamos si el movimiento no se ha realizado antes. Para ello, accedemos al objeto `moveCount` con el movimiento. Si el movimiento no se ha realizado, el valor será 0 y, por lo tanto, aplicamos el movimiento. Si el movimiento se ha realizado, el valor será mayor a 0 y, por lo tanto, no aplicamos el movimiento.

Finalmente, verificamos si la posición del robot en el plano 2D es diferente de 0. Si la posición es 0, significa que el robot vuelve a estar en el origen. Por lo tanto, devolvemos `true`. Si la posición es diferente de 0, significa que el robot no vuelve a estar en el origen. Por lo tanto, devolvemos la posición donde se detuvo.

**Veamo un ejemplo paso a paso:**

Si tenemos el siguiente movimiento `'R!U?U'`, el robot se moverá de la siguiente manera:

Recordemos que el robot parte desde el origen (0, 0).

- `'R'`: El robot se mueve hacia la derecha. La posición del robot es `(1, 0)`.
- `'!U'`: Como el movimiento es invertido, el robot se moverá hacia abajo. La posición del robot es `(1, -1)`.
- `'?U'`: Como el movimiento no se ha realizado antes, el robot se moverá hacia arriba. La posición del robot es `(1, 0)`.

Por lo tanto, el robot se detiene en la posición `(1, 0)`, entonces devolvemos `[1, 0]`.

La secuencia de movimientos se vería de la siguiente manera:

```txt
R => →
!U => ↓
?U => ↑

R!U?U => → ↓ ↑
```

**Veamos si nuestra función pasa las pruebas:**

En este momento nuestro robot esta aquí `(0, 0)`:

```txt
  x
5 |
4 |
3 |
2 |
1 |
0 R---+---+---+---+---+ y
  0   1   2   3   4   5

(0, 0) => El robot se encuentra en el origen
```

Dado que el robot se encuentra en el origen, ejecutaremos `moves.replace(/([*!?])?([LRUD])/g, (_, operator, move) => { ... })` para recorrer cada movimiento y aplicar la lógica correspondiente.

Para la primera iteración, tenemos que nuestra función recibe los siguientes parámetros:

```js
operator === undefined
move === 'R'
```

Dentro de la función de reemplazo, tenemos 3 condiciones:

Al evaluar la primera condición, no se cumple

```js
// if (operator === '*') applyMove(move, 2);
if(undefined === '*') // false
```

Al evaluar la segunda condición, no se cumple

```js
// else if (operator === '!') applyMove(inverted[move]);
if(undefined === '!') // false
```

Pero al evaluar la tercera condición, se cumple

```js
// else if (!operator || (operator === '?' && !moveCount[move]))
if(!undefined || (undefined === '?' && !moveCount['R']))
if(true || (false && 0))
if(true || false)
if(true)
```

Por lo tanto, llamamos a la función `applyMove` con el movimiento `R`.

```js
// applyMove(move);
applyMove('R');
```

Al ejecutar la función `applyMove('R')`, actualizamos la posición del robot en el plano 2D.

```js
// moveCount[move] += factor;
moveCount['R'] += 1;

// x += directions[move][0] * factor;
x += directions['R'][0] * 1;
x += 1 * 1;
x += 1;
x = x + 1;
x = 0 + 1;
x = 1;

// y += directions[move][1] * factor;
y += directions['R'][1] * 1;
y += 0 * 1;
y += 0;
y = y + 0;
y = 0 + 0;
y = 0;
```

Por lo tanto, para la primera iteración, la posición del robot es `(1, 0)`. Ya que `x` en este momento es 1 y `y` es 0.

```js
x = 1
y = 0
```

```txt
  x
5 |
4 |
3 |
2 |
1 |
0 +---R---+---+---+---+ y
  0   1   2   3   4   5

El robot estaba en el origen (0, 0) y se movió 1 vez a la derecha.
(1, 0) => El robot se encuentra en la posición (1, 0)
```

Continuamos con la siguiente iteración, donde nuestra función recibe los siguientes parámetros:

```js
operator === '!'
move === 'U'
```

Dentro de la función de reemplazo, tenemos 3 condiciones:

Al evaluar la primera condición, no se cumple

```js
// if (operator === '*') applyMove(move, 2);
if('!' === '*') // false
```

Al evaluar la segunda condición, se cumple

```js
// else if (operator === '!') applyMove(inverted[move]);
if('!' === '!') // true
```

Por lo tanto, llamamos a la función `applyMove` con el movimiento invertido.

```js
// applyMove(inverted[move]);
applyMove(inverted['U']);
applyMove('D');
```

Al ejecutar la función `applyMove('D')`, actualizamos la posición del robot en el plano 2D.

Recordemos que `x` es 1 y `y` es 0 hasta este momento por el movimiento anterior.

```js
// moveCount[move] += factor;
moveCount['D'] += 1;

// x += directions[move][0] * factor;
x += directions['D'][0] * 1;
x += 0 * 1;
x += 0;
x = x + 0;
x = 1 + 0;
x = 1;

// y += directions[move][1] * factor;
y += directions['D'][1] * 1;
y += -1 * 1;
y += -1;
y = y + -1;
y = 0 + -1;
y = -1;
```

Por lo tanto, para la segunda iteración, la posición del robot es `(1, -1)`. Ya que `x` en este momento es 0 y `y` es -1.

```js
x = 1
y = -1
```

```txt
   x
 5 |
 4 |
 3 |
 2 |
 1 |   1   2   3   4   5
 0 +---+---+---+---+---+ y
-1 |   R
-2 |
-3 |

El robot estaba en la posición (1, 0) y se movió 1 vez hacia abajo.
(1, -1) => El robot se encuentra en la posición (1, -1)
```

Continuamos con la siguiente iteración, donde nuestra función recibe los siguientes parámetros:

```js
operator === '?'
move === 'U'
```

Dentro de la función de reemplazo, tenemos 3 condiciones:

Al evaluar la primera condición, no se cumple

```js
// if (operator === '*') applyMove(move, 2);
if('?' === '*') // false
```

Al evaluar la segunda condición, no se cumple

```js
// else if (operator === '!') applyMove(inverted[move]);
if('?' === '!') // false
```

Pero al evaluar la tercera condición, se cumple

```js
// else if (!operator || (operator === '?' && !moveCount[move]))
if(!'?' || ('?' === '?' && !moveCount['U']))
if(false || (true && true))
if(false || true)
if(true)
```

Por lo tanto, llamamos a la función `applyMove` con el movimiento `U`.

```js
applyMove('U');
```

Al ejecutar la función `applyMove('U')`, actualizamos la posición del robot en el plano 2D.

Recordemos que `x` es 1 y `y` es -1 hasta este momento por el movimiento anterior.

```js
// moveCount[move] += factor;
moveCount['U'] += 1;

// x += directions[move][0] * factor;
x += directions['U'][0] * 1;
x += 0 * 1;
x += 0;
x = x + 0;
x = 1 + 0;
x = 1;

// y += directions[move][1] * factor;
y += directions['U'][1] * 1;
y += 1 * 1;
y += 1;
y = y + 1;
y = -1 + 1;
y = 0;
```

Por lo tanto, para la tercera iteración, la posición del robot es `(1, 0)`. Ya que `x` en este momento es 1 y `y` es 0.

```js
x = 1
y = 0
```

```txt
   x
 5 |
 4 |
 3 |
 2 |
 1 |
 0 +---R---+---+---+---+ y
-1 |   1   2   3   4   5
-2 |

El robot estaba en la posición (1, -1) y se movió 1 vez hacia arriba.
(1, 0) => El robot se encuentra en la posición (1, 0)
```

Como solo teniamos 3 movimientos, continuamos con el flujo normal de la función y verificamos si la posición del robot es diferente de 0. En este caso, la posición del robot es `(1, 0)`.

```js
// return x || y ? [x, y] : true;
// return 1 || 0 ? [1, 0] : true;
// return true || false ? [1, 0] : true;
// return true ? [1, 0] : true;
return [1, 0];
```

Por lo tanto, la función `isRobotBack('R!U?U')` devuelve `[1, 0]`.

```txt
   x
 5 |
 4 |
 3 |
 2 |
 1 |
 0 +---R---+---+---+---+ y
-1 |   1   2   3   4   5
-2 |
```

**Ahora veamos un caso donde el robot vuelve al origen:**

Si tenemos el siguiente movimiento `'RLUD'`, el robot se moverá de la siguiente manera:

Recordemos que el robot parte desde el origen (0, 0).

- `'R'`: El robot se mueve hacia la derecha. La posición del robot es `(1, 0)`.
- `'L'`: El robot se mueve hacia la izquierda. La posición del robot es `(0, 0)`.
- `'U'`: El robot se mueve hacia arriba. La posición del robot es `(0, 1)`.
- `'D'`: El robot se mueve hacia abajo. La posición del robot es `(0, 0)`.

Por lo tanto, el robot vuelve a estar en el origen, entonces devolvemos `true`.

La secuencia de movimientos se vería de la siguiente manera:

```txt
R => →
L => ←
U => ↑
D => ↓

RLUD => → ← ↑ ↓
```

**Veamos si nuestra función pasa las pruebas:**

```txt
  x
5 |
4 |
3 |
2 |
1 |
0 +---+---+---+---+---+ y
  0   1   2   3   4   5

(0, 0) => El robot se encuentra en el origen
```

Dado que el robot se encuentra en el origen, ejecutaremos `moves.replace(/([*!?])?([LRUD])/g, (_, operator, move) => { ... })` para recorrer cada movimiento y aplicar la lógica correspondiente.

Para la primera iteración, tenemos que nuestra función recibe los siguientes parámetros:

```js
operator === undefined
move === 'R'
```

Dentro de la función de reemplazo, tenemos 3 condiciones:

Al evaluar la primera condición, no se cumple

```js
// if (operator === '*') applyMove(move, 2);
if(undefined === '*') // false
```

Al evaluar la segunda condición, no se cumple

```js
// else if (operator === '!') applyMove(inverted[move]);
if(undefined === '!') // false
```

Pero al evaluar la tercera condición, se cumple

```js
// else if (!operator || (operator === '?' && !moveCount[move]))
if(!undefined || (undefined === '?' && !moveCount['R']))
if(true || (false && 0))
if(true || false)
if(true)
```

Por lo tanto, llamamos a la función `applyMove` con el movimiento `R`.

```js
applyMove('R');
```

Al ejecutar la función `applyMove('R')`, actualizamos la posición del robot en el plano 2D.

```js
// moveCount[move] += factor;
moveCount['R'] += 1;

// x += directions[move][0] * factor;
x += directions['R'][0] * 1;
x += 1 * 1;
x += 1;
x = x + 1;
x = 0 + 1;
x = 1;

// y += directions[move][1] * factor;
y += directions['R'][1] * 1;
y += 0 * 1;
y += 0;
y = y + 0;
y = 0 + 0;
y = 0;
```

Por lo tanto, para la primera iteración, la posición del robot es `(1, 0)`. Ya que `x` en este momento es 1 y `y` es 0.

```js
x = 1
y = 0
```

```txt
  x
5 |
4 |
3 |
2 |
1 |
0 +---R---+---+---+---+ y
  0   1   2   3   4   5

El robot estaba en el origen (0, 0) y se movió 1 vez a la derecha.
(1, 0) => El robot se encuentra en la posición (1, 0)
```

Continuamos con la siguiente iteración, donde nuestra función recibe los siguientes parámetros:

```js
operator === undefined
move === 'L'
```

Dentro de la función de reemplazo, tenemos 3 condiciones:

Al evaluar la primera condición, no se cumple

```js
// if (operator === '*') applyMove(move, 2);
if(undefined === '*') // false
```

Al evaluar la segunda condición, no se cumple

```js
// else if (operator === '!') applyMove(inverted[move]);
if(undefined === '!') // false
```

Pero al evaluar la tercera condición, se cumple

```js
// else if (!operator || (operator === '?' && !moveCount[move]))
if(!undefined || (undefined === '?' && !moveCount['L']))
if(true || (false && 0))
if(true || false)
if(true)
```

Por lo tanto, llamamos a la función `applyMove` con el movimiento `L`.

```js
// applyMove(move);
applyMove('L');
```

Al ejecutar la función `applyMove('L')`, actualizamos la posición del robot en el plano 2D.

Recordemos que `x` es 1 y `y` es 0 hasta este momento por el movimiento anterior.

```js
// moveCount[move] += factor;
moveCount['L'] += 1;

// x += directions[move][0] * factor;
x += directions['L'][0] * 1;
x += -1 * 1;
x += -1;
x = x + -1;
x = 1 + -1;
x = 0;

// y += directions[move][1] * factor;
y += directions['L'][1] * 1;
y += 0 * 1;
y += 0;
y = y + 0;
y = 0 + 0;
y = 0;
```

Por lo tanto, para la segunda iteración, la posición del robot es `(0, 0)`. Ya que `x` en este momento es 0 y `y` es 0.

```js
x = 0
y = 0
```

```txt
  x
5 |
4 |
3 |
2 |
1 |
0 R---+---+---+---+---+ y
  0   1   2   3   4   5

El robot estaba en la posición (1, 0) y se movió 1 vez a la izquierda.
(0, 0) => El robot se encuentra en el origen
```

Continuamos con la siguiente iteración, donde nuestra función recibe los siguientes parámetros:

```js
operator === undefined
move === 'U'
```

Dentro de la función de reemplazo, tenemos 3 condiciones:

Al evaluar la primera condición, no se cumple

```js
// if (operator === '*') applyMove(move, 2);
if(undefined === '*') // false
```

Al evaluar la segunda condición, no se cumple

```js
// else if (operator === '!') applyMove(inverted[move]);
if(undefined === '!') // false
```

Pero al evaluar la tercera condición, se cumple

```js
// else if (!operator || (operator === '?' && !moveCount[move]))
if(!undefined || (undefined === '?' && !moveCount['U']))
if(true || (false && 0))
if(true || false)
if(true)
```

Por lo tanto, llamamos a la función `applyMove` con el movimiento `U`.

```js
// applyMove(move);
applyMove('U');
```

Al ejecutar la función `applyMove('U')`, actualizamos la posición del robot en el plano 2D.

Recordemos que `x` es 0 y `y` es 0 hasta este momento por el movimiento anterior.

```js
// moveCount[move] += factor;
moveCount['U'] += 1;

// x += directions[move][0] * factor;
x += directions['U'][0] * 1;
x += 0 * 1;
x += 0;
x = x + 0;
x = 0 + 0;
x = 0;

// y += directions[move][1] * factor;
y += directions['U'][1] * 1;
y += 1 * 1;
y += 1;
y = y + 1;
y = 0 + 1;
y = 1;
```

Por lo tanto, para la tercera iteración, la posición del robot es `(0, 1)`. Ya que `x` en este momento es 0 y `y` es 1.

```js
x = 0
y = 1
```

```txt
  x
5 |
4 |
3 |
2 |
1 R
0 +---+---+---+---+---+ y
  0   1   2   3   4   5

El robot estaba en la posición (0, 0) y se movió 1 vez hacia arriba.
(0, 1) => El robot se encuentra en la posición (0, 1)
```

Continuamos con la siguiente iteración, donde nuestra función recibe los siguientes parámetros:

```js
operator === undefined
move === 'D'
```

Dentro de la función de reemplazo, tenemos 3 condiciones:

Al evaluar la primera condición, no se cumple

```js
// if (operator === '*') applyMove(move, 2);
if(undefined === '*') // false
```

Al evaluar la segunda condición, no se cumple

```js
// else if (operator === '!') applyMove(inverted[move]);
if(undefined === '!') // false
```

Pero al evaluar la tercera condición, se cumple

```js
// else if (!operator || (operator === '?' && !moveCount[move]))
if(!undefined || (undefined === '?' && !moveCount['D']))
if(true || (false && 0))
if(true || false)
if(true)
```

Por lo tanto, llamamos a la función `applyMove` con el movimiento `D`.

```js
// applyMove(move);
applyMove('D');
```

Al ejecutar la función `applyMove('D')`, actualizamos la posición del robot en el plano 2D.

Recordemos que `x` es 0 y `y` es 1 hasta este momento por el movimiento anterior.

```js
// moveCount[move] += factor;
moveCount['D'] += 1;

// x += directions[move][0] * factor;
x += directions['D'][0] * 1;
x += 0 * 1;
x += 0;
x = x + 0;
x = 0 + 0;
x = 0;

// y += directions[move][1] * factor;
y += directions['D'][1] * 1;
y += -1 * 1;
y += -1;
y = y + -1;
y = 1 + -1;
y = 0;
```

Por lo tanto, para la cuarta iteración, la posición del robot es `(0, 0)`. Ya que `x` en este momento es 0 y `y` es 0.

```js
x = 0
y = 0
```

```txt
  x
5 |
4 |
3 |
2 |
1 |
0 R---+---+---+---+---+ y
  0   1   2   3   4   5

El robot estaba en la posición (0, 1) y se movió 1 vez hacia abajo.
(0, 0) => El robot se encuentra en el origen
```

Como solo teniamos 4 movimientos, continuamos con el flujo normal de la función y verificamos si la posición del robot es diferente de 0. En este caso, la posición del robot es `(0, 0)`.

```js
// return x || y ? [x, y] : true;
// return 0 || 0 ? [0, 0] : true;
// return false || false ? [0, 0] : true;
// return false ? [0, 0] : true;
// return true;
return true;
```

Por lo tanto, la función `isRobotBack('RLUD')` devuelve `true`.

```txt
5 |
4 |
3 |
2 |
1 |
0 R---+---+---+---+---+
  0   1   2   3   4   5

```

Y así es como resolvemos el reto de hoy 🎉
