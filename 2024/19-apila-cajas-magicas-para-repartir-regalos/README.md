# Reto 19: Apila-cajas-magicas-para-repartir-regalos

¡Se acerca el día para repartir regalos! Necesitamos apilar los regalos que transportaremos en el trineo 🛷 y para eso **los vamos a meter en cajas 📦.**

**Los regalos se pueden meter en 4 cajas distintas**, donde cada caja soporta 1, 2, 5, 10 de peso y se representan así:

```txt
    _
1: |_|
    _____
2: |_____|
    _____
5: |     |
   |_____|
     _________
10: |         |
    |_________|

// Representación en JavaScript:
const boxRepresentations = {
  1: [" _ ", "|_|"] ,
  2: [" ___ ", "|___|"],
  5: [" _____ ", "|     |", "|_____|"],
  10: [" _________ ", "|         |", "|_________|"]
}
```

Tu misión es que al recibir el peso de los regalos, **uses las mínimas cajas posibles** y que, además, las apiles de menos peso (arriba) a más peso (abajo). **Siempre alineadas a la izquierda.**

Además, ten en cuenta que **al apilarlas, se reusa el borde inferior de la caja.**

```js
distributeWeight(1)
// Devuelve:
//  _
// |_|

distributeWeight(2)
// Devuelve:
//  ___
// |___|

distributeWeight(3)
// Devuelve:
//  _
// |_|_
// |___|

distributeWeight(4)
// Devuelve:
//  ___
// |___|
// |___|

distributeWeight(5)
// Devuelve:
//  _____
// |     |
// |_____|

distributeWeight(6)
// Devuelve:
//  _
// |_|___
// |     |
// |_____|
```

**Nota: ¡Ten cuidado con los espacios en blanco! No añadas espacios en blanco a la derecha de una caja si no son necesarios.**

## Mi solución explicada

```js
function distributeWeight(weight) {
  const boxLayouts = {
    1: [' _ ', '|_|'],
    2: [' ___ ', '|___|'],
    5: [' _____ ', '|     |', '|_____|'],
    10: [' _________ ', '|         |', '|_________|'],
  };

  const stackedBoxes = [];
  const numbers = Object.keys(boxLayouts).map(Number).reverse();

  function findTheBiggestBox(boxWeight) {
    return numbers.find((number) => number <= boxWeight);
  }

  while (weight > 0) {
    const boxWeight = findTheBiggestBox(weight);
    const [bottom, ...rest] = boxLayouts[boxWeight].slice().reverse();
    const last = stackedBoxes.shift();
    const newBottom = `${bottom}${last?.slice(bottom.length, -1) ?? ''}`;
    stackedBoxes.unshift(...[newBottom, ...rest].reverse());

    weight -= boxWeight;
  }

  return stackedBoxes.join('\n');
}
```

Para poder resolver este reto, primero definí un objeto llamado `boxLayouts` que contiene los diseños de las cajas con su respectivo peso. Luego, inicialicé un array llamado `stackedBoxes` que almacenará las cajas apiladas. También, creé un array llamado `numbers` que contiene los pesos de las cajas en orden descendente para poder encontrar la caja más grande que pueda soportar el peso de los regalos.

Para encontrar la caja más grande que pueda soportar el peso de los regalos, definí una función llamada `findTheBiggestBox` que recibe el peso de los regalos y devuelve el peso de la caja más grande que pueda soportar ese peso. Para ello, utilicé el método `find` para encontrar el primer número en el array `numbers` que sea menor o igual al peso de los regalos.

Una vez que tengo la función `findTheBiggestBox`, utilicé un bucle `while` para apilar las cajas. En cada iteración, busco la caja más grande que pueda soportar el peso de los regalos y obtengo su diseño. Luego, obtengo la parte inferior de la caja anterior y la parte superior de la caja actual. Después, concateno ambas partes para formar la nueva parte inferior de la caja actual. Finalmente, actualizo el peso de los regalos restando el peso de la caja actual. Mientras el peso de los regalos sea mayor que 0, el bucle continuará.

Finalmente, devuelvo las cajas apiladas como una cadena de texto separada por saltos de línea. Para ello, utilicé el método `join` con el argumento `'\n'`. Así, las cajas apiladas se mostrarán una debajo de la otra.

**Veamos con un ejemplo cómo funciona la función:**

Supongamos que tenemos un `weight` igual a `3`.

```js
distributeWeight(3)
```

Primero, inicializamos el objeto `boxLayouts` y el array `stackedBoxes`.

```js
const boxLayouts = {
    1: [' _ ', '|_|'],
    2: [' ___ ', '|___|'],
    5: [' _____ ', '|     |', '|_____|'],
    10: [' _________ ', '|         |', '|_________|'],
};

const stackedBoxes = [];
```

Ahora inicializamos el array `numbers` con los pesos de las cajas en orden descendente. Estos los sacaremos del objeto `boxLayouts`.

```js
const numbers = Object.keys(boxLayouts).map(Number).reverse();

// Object.keys(boxLayouts) => ['1', '2', '5', '10']
// ['1', '2', '5', '10'].map(Number) => [1, 2, 5, 10]
// [1, 2, 5, 10].reverse() => [10, 5, 2, 1]

const numbers = [10, 5, 2, 1];
```

Ahora viene lo interesante. Iniciamos un bucle `while` que se ejecutará mientras el peso de los regalos sea mayor que 0.

```js
while (weight > 0) {
```

Para esta primera iteración, el peso de los regalos es `3`. Llamamos a la función `findTheBiggestBox` con el peso de los regalos y obtenemos el peso de la caja más grande que pueda soportar ese peso.

```js
while (3 > 0)  // true
```

```js
// const boxWeight = findTheBiggestBox(3);
const boxWeight = 2;

// const [bottom, ...rest] = boxLayouts[boxWeight].slice().reverse();
// const [bottom, ...rest] = boxLayouts[2].slice().reverse();
// const [bottom, ...rest] = [' ___ ', '|___|'].slice().reverse();
// const [bottom, ...rest] = ['|___|', ' ___ '].reverse();
// const [bottom, ...rest] = ['|___|', ' ___ '];
const bottom = '|___|';
const rest = [' ___ '];

// const last = stackedBoxes.shift();
// shift() elimina el primer elemento del array y lo devuelve
// const last = [].shift();
const last = undefined;

// const newBottom = `${bottom}${last?.slice(bottom.length, -1) ?? ''}`;
// const newBottom = `|___|${undefined?.slice(4, -1) ?? ''}`;
// const newBottom = `|___|${undefined ??''}`;
// const newBottom = `|___|${''}`;
const newBottom = '|___|';

// stackedBoxes.unshift(...[newBottom, ...rest].reverse());
// unshift() agrega uno o más elementos al inicio del array y devuelve la nueva longitud del array

// stackedBoxes.unshift(...['|___|', ' ___ '].reverse());
// stackedBoxes.unshift(...[' ___ ', '|___|']);
// stackedBoxes.unshift(' ___ ', '|___|');

// ahora stackedBoxes es [' ___ ', '|___|']

// weight -= boxWeight;
// weight = weight - boxWeight;
// weight = 3 - 2;
weight = 1;
```

Como el peso de los regalos es mayor que 0, continuamos con la siguiente iteración.

```js
while (1 > 0)  // true
```

```js
// const boxWeight = findTheBiggestBox(1);
const boxWeight = 1;

// const [bottom, ...rest] = boxLayouts[boxWeight].slice().reverse();
// const [bottom, ...rest] = boxLayouts[1].slice().reverse();
// const [bottom, ...rest] = [' _ ', '|_|'].slice().reverse();
// const [bottom, ...rest] = ['|_|', ' _ '].reverse();
// const [bottom, ...rest] = ['|_|', ' _ '];
const bottom = '|_|';
const rest = [' _ '];

// const last = stackedBoxes.shift();
// shift() elimina el primer elemento del array y lo devuelve
// const last = [' ___ ', '|___|'].shift();
const last = ' ___ ';

// ahora stackedBoxes es ['|___|']

// const newBottom = `${bottom}${last?.slice(bottom.length, -1) ?? ''}`;
// const newBottom = `|_|${' ___ '.slice(3, -1) ?? ''}`;
// const newBottom = `|_|${' ___ '.slice(3, -1) ?? ''}`;
// const newBottom = `|_|${'_'}`;
const newBottom = '|_|_';

// stackedBoxes.unshift(...[newBottom, ...rest].reverse());
// stackedBoxes.unshift(...['|_|_', ' _ '].reverse());
// stackedBoxes.unshift(...[' _ ', '|_|_']);
// stackedBoxes.unshift(' _ ', '|_|_');

// ahora stackedBoxes es [' _ ', '|_|_', '|___|']

// weight -= boxWeight;
// weight = weight - boxWeight;
// weight = 1 - 1;
weight = 0;
```

Como el peso de los regalos es igual a 0, el bucle `while` termina. Ahora devolvemos las cajas apiladas como una cadena de texto separada por saltos de línea.

```js
while (0 > 0)  // false
```

```js
// return stackedBoxes.join('\n');
// return [ ' _ ', '|_|_', '|___|' ].join('\n');
// return ' _ \n|_|_\n|___|';
return ' _ \n|_|_\n|___|';
```

En este caso, el resultado es `' _ \n|_|_\n|___|'`.

Transformado en cajas, se vería así:

```txt
 _
|_|_
|___|
```
