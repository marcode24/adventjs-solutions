# Reto 15: Decorando el árbol de Navidad

## Problema

Una pareja está poniendo el árbol de navidad. El chico es un motivado de los adornos navideños y quiere que quede perfectamente equilibrado. Tiene tres tipos de decoraciones:

- Bolas de colores : B
- Regalos pequeños : R
- Piñas de pino : P

El árbol de navidad es un triángulo que hay que generar. Ya tienen la base montada, que sería la primera fila, y a partir de ahí tienen que ir colocando las decoraciones hacía arriba siguiendo una fórmula.

```text
Arriba coloca  :     P     R     B     P
Si abajo tiene :    P P   B P   R P   B R
```

Las combinaciones también son al revés. Por ejemplo, si abajo es B P, arriba es R. Pero también será R si abajo es P B. También si abajo tienes dos veces la misma letra, arriba será la misma letra. Por ejemplo, si abajo es B B, arriba es B.

Con estas reglas, podríamos ver el árbol que generaríamos con la base B P R P:

```text
   R
  P B
 R B B
B P R P
```

Escribe un programa que reciba el string B P R P y devuelva un array con la representación del árbol.

```js
decorateTree("B P R P");
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

decorateTree("B B"); // ['B', 'B B']
```

Ten en cuenta que:

- El programa recibe siempre la cadena de texto que representa la base del árbol.
- Hay que generar el árbol completo, es decir, la base y las filas que se generan a partir de ella, hasta arriba.
- Hay que seguir la fórmula para saber qué decoración colocar en cada posición.

## Mi Solución

```js
function decorateTree(base) {
  const decorators = {
    BB: "B",
    RR: "R",
    PP: "P",
    PR: "B",
    RP: "B",
    RB: "P",
    BR: "P",
    PB: "R",
    BP: "R",
  };
  const splitedBase = base.split(" ");
  const arr = [];
  splitedBase.slice(0, -1).reduce((acc, _) => {
    acc = acc.slice(0, -1).map((_, i) => decorators[acc[i] + acc[i + 1]]);
    arr.unshift(acc.join(" "));
    return acc;
  }, splitedBase);
  return [...arr, base];
}

console.log(decorateTree("B P R P"));
// [
//    'R',
//   'P B',
//  'R B B',
// 'B P R P'
// ]
console.log(decorateTree("B B"));
// [
//  'B',
// 'B B'
// ]
console.log(decorateTree("B B P R P R R"));
// [
//       'B',
//      'R P',
//     'B P P',
//    'P R B R',
//   'P P B B P',
//  'B R B B B R',
// 'B B P R P R R'
// ]
console.log(decorateTree("R R P R R P P P"));
// [
//        'P',
//       'P P',
//      'P P P',
//     'R B R B',
//    'R R P B B',
//   'P B P P R P',
//  'R B B R B P P',
// 'R R P R R P P P'
// ]
```
