# Reto 10: El-ensamblador-elfico

Los elfos programadores están creando un **pequeño ensamblador mágico** para controlar las máquinas del taller de Santa Claus.

Para ayudarles, vamos a implementar un intérprete sencillo que soporte las siguientes instrucciones mágicas:

- `MOV x y`: Copia el valor `x` (puede ser un número o el contenido de un registro) en el registro y
- `INC x`: Incrementa en 1 el contenido del registro `x`
- `DEC x`: Decrementa en 1 el contenido del registro `x`
- `JMP x y`: Si el valor del registro x es 0 entonces salta a la instrucción en el índice y y sigue ejecutándose el programa desde ahí.

Comportamiento esperado:

- Si se intenta acceder, incrementar o decrementar a un registro que no ha sido inicializado, se tomará el valor 0 por defecto.
- El salto con `JMP` es absoluto y lleva al índice exacto indicado por `y`.
- Al finalizar, el programa debe devolver el contenido del registro A. Si A no tenía un valor definido, retorna `undefined`.

```javascript
const instructions = [
  'MOV -1 C', // copia -1 al registro 'C',
  'INC C', // incrementa el valor del registro 'C'
  'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
  'MOV C A', // copia el registro 'C' al registro 'a',
  'INC A' // incrementa el valor del registro 'a'
]

compile(instructions) // -> 2

/**
 Ejecución paso a paso:
 0: MOV -1 C -> El registro C recibe el valor -1
 1: INC C    -> El registro C pasa a ser 0
 2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
 1: INC C    -> El registro C pasa a ser 1
 2: JMP C 1  -> C es 1, ignoramos la instrucción
 3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
 4: INC A    -> El registro A pasa a ser 2
 */
```

**Nota: Los registros que no han sido inicializados previamente se inicializan a 0.**

## Mi solución explicada

```js
function compile(instructions) {
  const registers = {};
  let pointer = 0;

  const operations = {
    MOV: (arg1, arg2) => {
      registers[arg2] = registers[arg1] ?? arg1;
    },
    INC: (arg1) => {
      registers[arg1] = ~~registers[arg1] + 1;
    },
    DEC: (arg1) => {
      registers[arg1] = ~~registers[arg1] - 1;
    },
    JMP: (arg1, arg2) => !registers[arg1] && (pointer = arg2 - 1),
  };

  while (pointer < instructions.length) {
    const [command, arg1, arg2] = instructions[pointer].split(' ');
    operations[command]?.(arg1, arg2);

    pointer++;
  }

  return registers.A;
}
```

Para poder resolver este problema debemos de tener en cuenta que necesitaremos llevar un registro de las instrucciones que se van ejecutando, para ello utilizamos un puntero que nos ayudará a recorrer el array de instrucciones.

También necesitaremos de un objeto `registers` que nos ayudará a llevar un control de los registros y sus valores.

Por último, necesitaremos un objeto `operations` que contendrá las operaciones que se pueden realizar. Para este caso son `MOV`, `INC`, `DEC` y `JMP`. Cada operación recibirá los argumentos necesarios y realizará la operación correspondiente.

Como recibiremos un array de instrucciones, lo recorreremos con un ciclo `while` y en cada iteración obtenemos la instrucción correspondiente y la ejecutamos con el método `operations[command]?.(arg1, arg2);`. Al final retornamos el valor del registro `A`, pero si este no tiene un valor definido retornamos `undefined`.

Una vez que tenemos esto bien claro, procedemos a generar el objeto `operations` con las operaciones que se pueden realizar.

```js
const operations = {
  MOV: (arg1, arg2) => {
    registers[arg2] = registers[arg1] ?? arg1;
  },
  INC: (arg1) => {
    registers[arg1] = ~~registers[arg1] + 1;
  },
  DEC: (arg1) => {
    registers[arg1] = ~~registers[arg1] - 1;
  },
  JMP: (arg1, arg2) => !registers[arg1] && (pointer = arg2 - 1),
};
```

- Para la operación `MOV`, el enunciado nos dice que **copia el valor x (puede ser un número o el contenido de un registro) en el registro y**. Por lo que si `arg1` es un registro, copiamos el valor de ese registro en el registro `arg2`, de lo contrario copiamos el valor de `arg1` en el registro `arg2`.

- Para la operación `INC`, el enunciado nos dice que **incrementa en 1 el contenido del registro x**. Por lo que simplemente incrementamos en 1 el valor del registro `arg1`. Para ello utilizamos el doble operador de negación `~~` para convertir el valor a un número entero. Si el registro no ha sido inicializado, se tomará el valor 0 por defecto y se incrementará en 1.

- Para la operación `DEC`, el enunciado nos dice que **decrementa en 1 el contenido del registro x**. Por lo que simplemente decrementamos en 1 el valor del registro `arg1`. Para ello utilizamos el doble operador de negación `~~` para convertir el valor a un número entero. Si el registro no ha sido inicializado, se tomará el valor 0 por defecto y se decrementará en 1.

- Para la operación `JMP`, el enunciado nos dice que **si el valor del registro x es 0 entonces salta a la instrucción en el índice y y sigue ejecutándose el programa desde ahí**. Por lo que si el valor del registro `arg1` es 0, entonces el puntero se moverá al índice `arg2 - 1`. Restamos 1 porque al final del ciclo `while` se incrementará el puntero en 1.

Una vez que tenemos las operaciones definidas, procedemos a recorrer el array de instrucciones y ejecutar cada una de ellas. Para esto realizaremos un ejemplo con la siguiente entrada:

```js
const instructions = [
  'MOV 3 C',
  'DEC C',
  'DEC C',
  'DEC C',
  'JMP C 3',
  'MOV C A'
];
```

Para poder evaluar nuestras instrucciones, necesitamos llevar un registro de los valores de los registros y el puntero que nos ayudará a recorrer las instrucciones.

```js
const registers = {};
let pointer = 0;
```

Ahora procedemos a recorrer las instrucciones con un ciclo `while`, este ciclo se ejecutará mientras el puntero sea menor a la longitud del array de instrucciones.

```js
while (pointer < instructions.length) {
  const [command, arg1, arg2] = instructions[pointer].split(' ');
  operations[command]?.(arg1, arg2);

  pointer++;
}
```

En cada iteración obtenemos la instrucción correspondiente y la ejecutamos con el método `operations[command]?.(arg1, arg2);`. Después de ejecutar la instrucción, incrementamos el puntero en 1, y volvemos a evaluar si el puntero es menor a la longitud del array de instrucciones.

En la primera iteración, `pointer` es igual a 0, por lo que la instrucción que se ejecutará es `MOV 3 C`. Al desestructurar la instrucción obtenemos los valores `command = 'MOV'`, `arg1 = '3'` y `arg2 = 'C'`.

```js
const instructions = [
  'MOV 3 C', // <-- instructions[0]
  'DEC C',
  'DEC C',
  'DEC C',
  'JMP C 3',
  'MOV C A'
];

// const [...] = instructions[0].split(' ');
// const [...] = 'MOV 3 C'.split(' ');
// const [command, arg1, arg2] = ['MOV', '3', 'C'];

const command = 'MOV';
const arg1 = '3';
const arg2 = 'C';
```

Aquí nos damos cuenta que el comando a ejecutar es `MOV`, por lo que se ejecutará la función `MOV` del objeto `operations`. Al ejecutar esta función, el registro `C` recibirá el valor `3`.

```js
// operations[command]?.(arg1, arg2);
operations['MOV']?.('3', 'C');
```

```js
// registers[arg2] = registers[arg1] ?? arg1;
// registers['C'] = registers['3'] ?? '3';
// registers['C'] = undefined ?? '3';
registers['C'] = '3';
```

Despues de ejecutar la instrucción, el objeto `registers` tendrá la siguiente forma:

```js
{
  C: 3
}
```

Y el puntero se incrementará en `1`

```js
pointer = 1;
```

Como la validación del puntero es menor a la longitud del array de instrucciones, procedemos a obtener la siguiente instrucción. En este caso, la instrucción que se ejecutará es `DEC C`.

```js
pointer < instructions.length; // 1 < 6 => true
```

```js
const instructions = [
  'MOV 3 C',
  'DEC C', // <-- instructions[1]
  'DEC C',
  'DEC C',
  'JMP C 3',
  'MOV C A'
];

// const [...] = instructions[1].split(' ');
// const [...] = 'DEC C'.split(' ');
// const [command, arg1] = ['DEC', 'C'];

const command = 'DEC';
const arg1 = 'C';
```

Algo particular de esta instrucción es que no tiene un segundo argumento, por lo que `arg2` será `undefined`. Sin embargo, esto no afectará la ejecución de la instrucción.

Nuestro comando a ejecutar es `DEC`, por lo que se ejecutará la función `DEC` del objeto `operations`. Al ejecutar esta función, el registro `C` decrementará en 1.

```js
// operations[command]?.(arg1, arg2);
operations['DEC']?.('C');
```

```js
// registers[arg1] = ~~registers[arg1] - 1;
// registers['C'] = ~~registers['C'] - 1;
// registers['C'] = ~~3 - 1;
// registers['C'] = 3 - 1;
registers['C'] = 2;
```

Despues de ejecutar la instrucción, el objeto `registers` tendrá la siguiente forma:

```js
{
  C: 2
}
```

Y el puntero se incrementará en `1`

```js
pointer = 2;
```

Como la validación del puntero es menor a la longitud del array de instrucciones, procedemos a obtener la siguiente instrucción. En este caso, la instrucción que se ejecutará es `DEC C`.

```js
pointer < instructions.length; // 2 < 6 => true
```

```js
const instructions = [
  'MOV 3 C',
  'DEC C',
  'DEC C', // <-- instructions[2]
  'DEC C',
  'JMP C 3',
  'MOV C A'
];

// const [...] = instructions[2].split(' ');
// const [...] = 'DEC C'.split(' ');
// const [command, arg1] = ['DEC', 'C'];

const command = 'DEC';
const arg1 = 'C';
```

Al igual que la instrucción anterior, esta instrucción no tiene un segundo argumento, por lo que `arg2` será `undefined`.

Nuestro comando a ejecutar es `DEC`, por lo que se ejecutará la función `DEC` del objeto `operations`. Al ejecutar esta función, el registro `C` decrementará en 1.

```js
// operations[command]?.(arg1, arg2);
operations['DEC']?.('C');
```

```js
// registers[arg1] = ~~registers[arg1] - 1;
// registers['C'] = ~~registers['C'] - 1;
// registers['C'] = ~~2 - 1;
// registers['C'] = 2 - 1;
registers['C'] = 1;
```

Despues de ejecutar la instrucción, el objeto `registers` tendrá la siguiente forma:

```js
{
  C: 1
}
```

Y el puntero se incrementará en `1`

```js
pointer = 3;
```

Como la validación del puntero es menor a la longitud del array de instrucciones, procedemos a obtener la siguiente instrucción. En este caso, la instrucción que se ejecutará es `DEC C`.

```js
pointer < instructions.length; // 3 < 6 => true
```

```js
const instructions = [
  'MOV 3 C',
  'DEC C',
  'DEC C',
  'DEC C', // <-- instructions[3]
  'JMP C 3',
  'MOV C A'
];

// const [...] = instructions[3].split(' ');
// const [...] = 'DEC C'.split(' ');
// const [command, arg1] = ['DEC', 'C'];

const command = 'DEC';
const arg1 = 'C';
```

Al igual que las instrucciones anteriores, esta instrucción no tiene un segundo argumento, por lo que `arg2` será `undefined`.

Nuestro comando a ejecutar es `DEC`, por lo que se ejecutará la función `DEC` del objeto `operations`. Al ejecutar esta función, el registro `C` decrementará en 1.

```js
// operations[command]?.(arg1, arg2);
operations['DEC']?.('C');
```

```js
// registers[arg1] = ~~registers[arg1] - 1;
// registers['C'] = ~~registers['C'] - 1;
// registers['C'] = ~~1 - 1;
// registers['C'] = 1 - 1;
registers['C'] = 0;
```

Despues de ejecutar la instrucción, el objeto `registers` tendrá la siguiente forma:

```js
{
  C: 0
}
```

Y el puntero se incrementará en `1`

```js
pointer = 4;
```

Como la validación del puntero es menor a la longitud del array de instrucciones, procedemos a obtener la siguiente instrucción. En este caso, la instrucción que se ejecutará es `JMP C 3`.

```js
pointer < instructions.length; // 4 < 6 => true
```

```js
const instructions = [
  'MOV 3 C',
  'DEC C',
  'DEC C',
  'DEC C',
  'JMP C 3', // <-- instructions[4]
  'MOV C A'
];

// const [...] = instructions[4].split(' ');
// const [...] = 'JMP C 3'.split(' ');
// const [command, arg1, arg2] = ['JMP', 'C', '3'];

const command = 'JMP';
const arg1 = 'C';
const arg2 = '3';
```

Nuestro comando a ejecutar es `JMP`, por lo que se ejecutará la función `JMP` del objeto `operations`. Al ejecutar esta función, si el valor del registro `C` es 0, entonces el puntero se moverá al índice `3 - 1`.

```js
// operations[command]?.(arg1, arg2);
operations['JMP']?.('C', 3);
```

```js
// !registers[arg1] && (pointer = arg2 - 1);
// !registers['C'] && (pointer = 3 - 1);
// !0 && (pointer = 2);
// true && (pointer = 2);
// pointer = 2;
pointer = 2;
```

Despues de ejecutar la instrucción, el objeto `registers` no cambia su forma, pero el puntero ahora es igual a `2`. Sin embargo, como ya se ejecutó la instrucción, el puntero se incrementará en `1`, por lo que el puntero ahora es igual a `3`.

```js
pointer = 3;
```

Como la validación del puntero es menor a la longitud del array de instrucciones, procedemos a obtener la siguiente instrucción. En este caso, la instrucción que se ejecutará es `DEC C`.

```js
pointer < instructions.length; // 3 < 6 => true
```

```js
const instructions = [
  'MOV 3 C',
  'DEC C',
  'DEC C',
  'DEC C', // <-- instructions[3]
  'JMP C 3',
  'MOV C A'
];

// const [...] = instructions[2].split(' ');
// const [...] = 'DEC C'.split(' ');
// const [command, arg1] = ['DEC', 'C'];

const command = 'DEC';
const arg1 = 'C';
```

Al igual que las instrucciones anteriores, esta instrucción no tiene un segundo argumento, por lo que `arg2` será `undefined`.

Nuestro comando a ejecutar es `DEC`, por lo que se ejecutará la función `DEC` del objeto `operations`. Al ejecutar esta función, el registro `C` decrementará en 1.

```js
// operations[command]?.(arg1, arg2);
operations['DEC']?.('C');
```

```js
// registers[arg1] = ~~registers[arg1] - 1;
// registers['C'] = ~~registers['C'] - 1;
// registers['C'] = ~~0 - 1;
// registers['C'] = 0 - 1;
registers['C'] = -1;
```

Despues de ejecutar la instrucción, el objeto `registers` tendrá la siguiente forma:

```js
{
  C: -1
}
```

Y el puntero se incrementará en `1`

```js
pointer = 4;
```

Como la validación del puntero es menor a la longitud del array de instrucciones, procedemos a obtener la siguiente instrucción. En este caso, la instrucción que se ejecutará es `JMP C 3`.

```js
pointer < instructions.length; // 4 < 6 => true
```

```js
const instructions = [
  'MOV 3 C',
  'DEC C',
  'DEC C',
  'DEC C',
  'JMP C 3',  // <-- instructions[4]
  'MOV C A'
];

// const [...] = instructions[4].split(' ');
// const [...] = 'JMP C 3'.split(' ');
// const [command, arg1, arg2] = ['JMP', 'C', '3'];

const command = 'JMP';
const arg1 = 'C';
const arg2 = '3';
```

Nuestro comando a ejecutar es `JMP`, por lo que se ejecutará la función `JMP` del objeto `operations`. Al ejecutar esta función, si el valor del registro `C` es 0, entonces el puntero se moverá al índice `3 - 1`.

```js
// operations[command]?.(arg1, arg2);
operations['JMP']?.('C', 3);
```

```js
// !registers[arg1] && (pointer = arg2 - 1);
// !registers['C'] && (pointer = 3 - 1);
// !-1 && (pointer = 2);
// false && (pointer = 2);
// pointer = 4; // Como la condición es falsa, el puntero no se modifica manteniendo su valor actual

pointer = 4;
```

Despues de ejecutar la instrucción, el objeto `registers` no cambia su forma, pero el puntero ahora es igual a `4`. Sin embargo, como ya se ejecutó la instrucción, el puntero se incrementará en `1`, por lo que el puntero ahora es igual a `5`.

```js
pointer = 5;
```

Como la validación del puntero es menor a la longitud del array de instrucciones, procedemos a obtener la siguiente instrucción. En este caso, la instrucción que se ejecutará es `MOV C A`.

```js
pointer < instructions.length; // 5 < 6 => true
```

```js
const instructions = [
  'MOV 3 C',
  'DEC C',
  'DEC C',
  'DEC C',
  'JMP C 3',
  'MOV C A' // <-- instructions[5]
];

// const [...] = instructions[5].split(' ');
// const [...] = 'MOV C A'.split(' ');
// const [command, arg1, arg2] = ['MOV', 'C', 'A'];

const command = 'MOV';
const arg1 = 'C';
const arg2 = 'A';
```

Aquí nos damos cuenta que el comando a ejecutar es `MOV`, por lo que se ejecutará la función `MOV` del objeto `operations`. Al ejecutar esta función, el registro `A` recibirá el valor del registro `C`.

```js
// operations[command]?.(arg1, arg2);
operations['MOV']?.('C', 'A');
```

```js
// registers[arg2] = registers[arg1] ?? arg1;
// registers['A'] = registers['C'] ?? 'C';
// registers['A'] = -1 ?? 'C';
registers['A'] = -1;
```

Despues de ejecutar la instrucción, el objeto `registers` tendrá la siguiente forma:

```js
{
  C: -1,
  A: -1
}
```

Y el puntero se incrementará en 1. Para la siguiente iteración, el puntero será igual a 6, por lo que la validación del puntero será falsa y se saldrá del ciclo `while`.

```js
pointer = 6;
```

```js
pointer < instructions.length; // 6 < 6 => false
```

```js
return registers.A;
```

```js
return registers['A'];
return -1;
```

Por lo que el resultado de ejecutar las instrucciones es `-1`.

```js
compile([
  'MOV 3 C',
  'DEC C',
  'DEC C',
  'DEC C',
  'JMP C 3',
  'MOV C A'
]); // -1
```

Con esto hemos terminado de explicar el funcionamiento de nuestro algoritmo y cómo se ejecutan las instrucciones. Ahora probemos un caso donde el registro `A` no tenga un valor definido.

```js
const instructions = [
  'INC C',
  'DEC B',
  'MOV C Y',
  'INC Y'
];
```

Para poder evaluar nuestras instrucciones, necesitamos llevar un registro de los valores de los registros y el puntero que nos ayudará a recorrer las instrucciones.

```js
const registers = {};
let pointer = 0;
```

Ahora procedemos a recorrer las instrucciones con un ciclo `while`, este ciclo se ejecutará mientras el puntero sea menor a la longitud del array de instrucciones.

```js
while (pointer < instructions.length) {
  const [command, arg1, arg2] = instructions[pointer].split(' ');
  operations[command]?.(arg1, arg2);

  pointer++;
}
```

En la primera iteración, `pointer` es igual a 0, por lo que la instrucción que se ejecutará es `INC C`. Al desestructurar la instrucción obtenemos los valores `command = 'INC'`, `arg1 = 'C'` y `arg2 = undefined`.

```js
// const [...] = instructions[0].split(' ');
// const [...] = 'INC C'.split(' ');
// const [command, arg1] = ['INC', 'C'];

const command = 'INC';
const arg1 = 'C';
```

Aquí nos damos cuenta que el comando a ejecutar es `INC`, por lo que se ejecutará la función `INC` del objeto `operations`. Al ejecutar esta función, el registro `C` incrementará en 1.

```js
// operations[command]?.(arg1, arg2);
operations['INC']?.('C');
```

```js
// registers[arg1] = ~~registers[arg1] + 1;
// registers['C'] = ~~registers['C'] + 1;
// registers['C'] = ~~undefined + 1;
// registers['C'] = 0 + 1;
registers['C'] = 1;
```

Despues de ejecutar la instrucción, el objeto `registers` tendrá la siguiente forma:

```js
{
  C: 1
}
```

Y el puntero se incrementará en `1`

```js
pointer = 1;
```

Como la validación del puntero es menor a la longitud del array de instrucciones, procedemos a obtener la siguiente instrucción. En este caso, la instrucción que se ejecutará es `DEC B`.

```js
pointer < instructions.length; // 1 < 4 => true
```

```js
const instructions = [
  'INC C',
  'DEC B', // <-- instructions[1]
  'MOV C Y',
  'INC Y'
];

// const [...] = instructions[1].split(' ');
// const [...] = 'DEC B'.split(' ');
// const [command, arg1] = ['DEC', 'B'];

const command = 'DEC';
const arg1 = 'B';
```

Al igual que la instrucción anterior, esta instrucción no tiene un segundo argumento, por lo que `arg2` será `undefined`. Sin embargo, esto no afectará la ejecución de la instrucción.

Nuestro comando a ejecutar es `DEC`, por lo que se ejecutará la función `DEC` del objeto `operations`. Al ejecutar esta función, el registro `B` decrementará en 1.

```js
// operations[command]?.(arg1, arg2);
operations['DEC']?.('B');
```

```js
// registers[arg1] = ~~registers[arg1] - 1;
// registers['B'] = ~~registers['B'] - 1;
// registers['B'] = ~~undefined - 1;
// registers['B'] = 0 - 1;
registers['B'] = -1;
```

Despues de ejecutar la instrucción, el objeto `registers` tendrá la siguiente forma:

```js
{
  C: 1,
  B: -1
}
```

Y el puntero se incrementará en `1`

```js
pointer = 2;
```

Como la validación del puntero es menor a la longitud del array de instrucciones, procedemos a obtener la siguiente instrucción. En este caso, la instrucción que se ejecutará es `MOV C Y`.

```js
pointer < instructions.length; // 2 < 4 => true
```

```js
const instructions = [
  'INC C',
  'DEC B',
  'MOV C Y', // <-- instructions[2]
  'INC Y'
];

// const [...] = instructions[2].split(' ');
// const [...] = 'MOV C Y'.split(' ');
// const [command, arg1, arg2] = ['MOV', 'C', 'Y'];

const command = 'MOV';
const arg1 = 'C';
const arg2 = 'Y';
```

Aquí nos damos cuenta que el comando a ejecutar es `MOV`, por lo que se ejecutará la función `MOV` del objeto `operations`. Al ejecutar esta función, el registro `Y` recibirá el valor del registro `C`.

```js
// operations[command]?.(arg1, arg2);
operations['MOV']?.('C', 'Y');
```

```js
// registers[arg2] = registers[arg1] ?? arg1;
// registers['Y'] = registers['C'] ?? 'C';
// registers['Y'] = 1 ?? 'C';
registers['Y'] = 1;
```

Despues de ejecutar la instrucción, el objeto `registers` tendrá la siguiente forma:

```js
{
  C: 1,
  B: -1,
  Y: 1
}
```

Y el puntero se incrementará en `1`

```js
pointer = 3;
```

Como la validación del puntero es menor a la longitud del array de instrucciones, procedemos a obtener la siguiente instrucción. En este caso, la instrucción que se ejecutará es `INC Y`.

```js
pointer < instructions.length; // 3 < 4 => true
```

```js
const instructions = [
  'INC C',
  'DEC B',
  'MOV C Y',
  'INC Y' // <-- instructions[3]
];

// const [...] = instructions[3].split(' ');
// const [...] = 'INC Y'.split(' ');
// const [command, arg1] = ['INC', 'Y'];

const command = 'INC';
const arg1 = 'Y';
```

Aquí nos damos cuenta que el comando a ejecutar es `INC`, por lo que se ejecutará la función `INC` del objeto `operations`. Al ejecutar esta función, el registro `Y` incrementará en 1.

```js
// operations[command]?.(arg1, arg2);
operations['INC']?.('Y');
```

```js
// registers[arg1] = ~~registers[arg1] + 1;
// registers['Y'] = ~~registers['Y'] + 1;
// registers['Y'] = ~~1 + 1;
// registers['Y'] = 1 + 1;
registers['Y'] = 2;
```

Despues de ejecutar la instrucción, el objeto `registers` tendrá la siguiente forma:

```js
{
  C: 1,
  B: -1,
  Y: 2
}
```

Y el puntero se incrementará en `1`

```js
pointer = 4;
```

Como la validación del puntero es menor a la longitud del array de instrucciones, procedemos a obtener la siguiente instrucción. En este caso, la instrucción que se ejecutará es `INC Y`.

```js
pointer < instructions.length; // 4 < 4 => false
```

```js
return registers.A;
```

```js
return registers['A'];
return undefined;
```

Por lo que el resultado de ejecutar las instrucciones es `undefined`.

```js
compile([
  'INC C',
  'DEC B',
  'MOV C Y',
  'INC Y'
]); // undefined
```
