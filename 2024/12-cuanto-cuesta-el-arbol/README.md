# Reto 12: Cuanto-cuesta-el-arbol

Estás en un mercado muy especial en el que se venden árboles de Navidad 🎄. Cada uno viene decorado con una serie de adornos muy peculiares, y el precio del árbol se determina en función de los adornos que tiene.

- `*`: Copo de nieve - Valor: 1
- `o`: Bola de Navidad - Valor: 5
- `^`: Arbolito decorativo - Valor: 10
- `#`: Guirnalda brillante - Valor: 50
- `@`: Estrella polar - Valor: 100
Normalmente se sumarían todos los valores de los adornos y ya está…

Pero, ¡ojo! **Si un adorno se encuentra inmediatamente a la izquierda de otro de mayor valor, en lugar de sumar, se resta su valor.**

```js
calculatePrice('***')  // 3   (1 + 1 + 1)
calculatePrice('*o')   // 4   (5 - 1)
calculatePrice('o*')   // 6   (5 + 1)
calculatePrice('*o*')  // 5  (-1 + 5 + 1)
calculatePrice('**o*') // 6  (1 - 1 + 5 + 1)
calculatePrice('o***') // 8   (5 + 3)
calculatePrice('*o@')  // 94  (-5 - 1 + 100)
calculatePrice('*#')   // 49  (-1 + 50)
calculatePrice('@@@')  // 300 (100 + 100 + 100)
calculatePrice('#@')   // 50  (-50 + 100)
calculatePrice('#@Z')  // undefined (Z es desconocido)
```

## Mi solución explicada

```js
function calculatePrice(ornaments) {
  const ornamentValues = {
    '*': 1,
    'o': 5,
    '^': 10,
    '#': 50,
    '@': 100,
  };

  if (!/^[*o^#@]*$/.test(ornaments)) return undefined;

  return [...ornaments].reduce((totalPrice, current, index) => {
    const currentValue = ornamentValues[current];
    const nextValue = ornamentValues[ornaments[index + 1]];

    const isNextGreater = nextValue > currentValue;
    const valueToAdd = isNextGreater ? -currentValue : currentValue;

    return totalPrice + valueToAdd;
  }, 0);
}

```

Para resolver este reto, primero definimos un objeto `ornamentValues` que contiene los valores de cada adorno.

```js
const ornamentValues = {
  '*': 1,
  'o': 5,
  '^': 10,
  '#': 50,
  '@': 100,
};
```

Este objeto nos permitirá obtener el valor de cada adorno de forma más sencilla. Por ejemplo, `ornamentValues['*']` nos devolverá `1`.

Luego, verificamos si la cadena de adornos contiene solo los caracteres válidos. Si no es así, devolvemos `undefined`. Esto lo realizamos primero para no realizar cálculos innecesarios si la cadena no es válida.

La expresión regular `/^[*o^#@]*$/` verifica que la cadena contenga solo los caracteres `*`, `o`, `^`, `#` y `@`.

Desmenuzando la expresión regular:

- `^`: Indica que la cadena debe comenzar con uno de los caracteres dentro de los corchetes.
- `[*o^#@]`: Indica que la cadena debe contener uno de los caracteres dentro de los corchetes.
- `*`: Indica que el carácter anterior puede aparecer 0 o más veces.
- `$`: Indica que la cadena debe terminar con uno de los caracteres dentro de los corchetes.

```js
if (!/^[*o^#@]*$/.test(ornaments)) return undefined;
```

Después, usamos el método `reduce` para iterar sobre cada adorno. En cada iteración, obtenemos el valor del adorno actual y el siguiente. Luego, comparamos si el valor del siguiente adorno es mayor que el actual. Si es así, restamos el valor actual, de lo contrario, sumamos el valor actual.

Finalmente, devolvemos el precio total de los adornos.

**Veamos con un ejemplo cómo funciona:**

Supongamos que tenemos la siguiente entrada: `'*o*'`, que nos tendría que devolver `5`.

```js
calculatePrice('*o*') // 5
```

Primero validamos que la cadena sea válida

```js
if (!/^[*o^#@]*$/.test('*o*')) // true
```

Como la cadena es válida, continuamos con el cálculo.

En la primera iteración, tenemos lo siguiente:

Tengamos presente que ornaments es `'*o*'`.

```js
// const currentValue = ornamentValues[current];
// const currentValue = ornamentValues['*'];
const currentValue = 1;

// const nextValue = ornamentValues[ornaments[index + 1]];
// const nextValue = ornamentValues[ornaments[0 + 1]];
// const nextValue = ornamentValues[ornaments[1]];
const nextValue = ornamentValues['o'];

// const isNextGreater = nextValue > currentValue;
// const isNextGreater = 5 > 1;
const isNextGreater = true;

// const valueToAdd = isNextGreater ? -currentValue : currentValue;
// const valueToAdd = true ? -1 : 1;
const valueToAdd = -1;

// return totalPrice + valueToAdd;
// return 0 + -1;
return -1;
```

En la segunda iteración, tenemos lo siguiente:

```js
// const currentValue = ornamentValues[current];
// const currentValue = ornamentValues['o'];
const currentValue = 5;

// const nextValue = ornamentValues[ornaments[index + 1]];
// const nextValue = ornamentValues[ornaments[1 + 1]];
// const nextValue = ornamentValues[ornaments[2]];
const nextValue = ornamentValues['*'];

// const isNextGreater = nextValue > currentValue;
// const isNextGreater = 1 > 5;
const isNextGreater = false;

// const valueToAdd = isNextGreater ? -currentValue : currentValue;
// const valueToAdd = false ? -5 : 5;
const valueToAdd = 5;

// return totalPrice + valueToAdd;
// return -1 + 5;
return 4;
```

Para la tercera iteración, tenemos lo siguiente:

```js
// const currentValue = ornamentValues[current];
// const currentValue = ornamentValues['*'];
const currentValue = 1;

// const nextValue = ornamentValues[ornaments[index + 1]];
// const nextValue = ornamentValues[ornaments[2 + 1]];
// const nextValue = ornamentValues[ornaments[3]];
const nextValue = ornamentValues[undefined];

// como ornaments[undefined] es undefined, nextValue es undefined

// const isNextGreater = nextValue > currentValue;
// const isNextGreater = undefined > 1;
const isNextGreater = false; // undefined se convierte en 0

// const valueToAdd = isNextGreater ? -currentValue : currentValue;
// const valueToAdd = false ? -1 : 1;
const valueToAdd = 1;

// return totalPrice + valueToAdd;
// return 4 + 1;
return 5;
```

Como no hay más adornos, la función termina.

Finalmente, obtenemos el resultado esperado.

```js
calculatePrice('*o*') // 5
```

**Veamos un caso donde la cadena no es válida:**

```js
calculatePrice('#@Z') // undefined
```

Primero validamos que la cadena sea válida

```js
if (!/^[*o^#@]*$/.test('#@Z')) // false
```

Al tener un carácter no válido (`Z`), la expresión regular devuelve `false`.

Como la cadena no es válida, devolvemos `undefined`.

```js
return undefined;
```

Y eso es todo. Hemos resuelto el reto 🎉.
