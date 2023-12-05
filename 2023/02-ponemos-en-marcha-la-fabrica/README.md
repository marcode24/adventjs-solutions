# Reto 02: Ponemos en marcha la fabrica

## Problema

En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

```js
const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // []
```

## Mi solución

```js
const manufacture = (gifts, materials) => gifts.filter((gift) => (
  [...gift].every((letter) => materials.includes(letter))));
```

## Explicación de mi solución

1. Utilizo el método `filter` para filtrar los regalos que se pueden fabricar. Para ello, utilizo el método `every` para comprobar que todas las letras del regalo están en los materiales disponibles. Para ello, convierto el regalo en un array de letras utilizando el operador de propagación `...` y compruebo que todas las letras están en los materiales utilizando el método `includes`.
