# Reto 06: Los renos a prueba

## Problema

Los elfos están catalogando los renos de Santa 🦌 según la distancia que pueden recorrer.

Para ello tienen una cadena de texto movements donde cada caracter representa la dirección del movimiento del reno:

- **\> = Avanza a la derecha**
- **< = Avanza a la izquierda**
- **\* = Puede avanzar o retroceder**

Por ejemplo, si el movimiento es >>*<, va hacia la derecha dos veces, luego puede ir a derecha o izquierda (lo que maximice la distancia recorrida final) y luego ir a la izquierda.

Los elfos quieren saber cuál es la máxima distancia que recorre el reno **al finalizar todos los movimientos.**

**En el ejemplo anterior, la máxima distancia que recorre el reno es 2.** Va a la derecha dos veces +2, luego con el * puede ir a la derecha otra vez para maximizar la distancia +1 y luego va a la izquierda -1.

Crea una función `maxDistance` que reciba la cadena de texto `movements` y devuelva **la máxima distancia** que puede recorrer el reno **en cualquier dirección:**

```js
const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5
```

Ten en cuenta que no importa si es a la izquierda o la derecha, la distancia es **el valor absoluto de la distancia recorrida máxima al finalizar los movimientos.**

## Mi solucion

```js
const maxDistance1 = (movements) => {
  const { move, stars } = movements.split('').reduce((acc, movement) => {
    if (movement === '>') acc.move++;
    else if (movement === '<') acc.move--;
    else acc.stars++;
    return acc;
  }, { move: 0, stars: 0 });

  return Math.abs(move) + stars;
};
```

## Explicación de mi solución

1. Primero separamos los movimientos en un array de caracteres con `split('')`.
2. Luego con `reduce` vamos a ir sumando los movimientos a la derecha y a la izquierda y los asteriscos.
3. Al finalizar el `reduce` tenemos un objeto con la cantidad de movimientos a la derecha, a la izquierda y los asteriscos.
4. Para obtener la distancia máxima, sumamos los movimientos a la derecha y a la izquierda y le sumamos los asteriscos.
5. Como la distancia puede ser negativa, usamos `Math.abs` para obtener el valor absoluto de la distancia.
