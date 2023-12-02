# Reto 1: !Primer regalo repetido!

## Problema

En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.

¡Encuentra el primer número de identificación que se ha repetido, **donde la segunda ocurrencia tenga el índice más pequeño!**

En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.

```js
const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5
```

**¡Ojo!** Los elfos dicen que esto es una prueba técnica de Google.

## Mi solución

```js
const findFirstRepeated = (gifts) => gifts.find((gift, index) => gifts.indexOf(gift) !== index) ?? -1;
```

## Explicación de mi solución

1. Utilizo el método `find` para encontrar el primer elemento que cumpla la condición de que el índice del elemento en el array sea diferente al índice del elemento en el array si se utiliza el método `indexOf` para encontrar el índice del elemento en el array. Si no se encuentra ningún elemento que cumpla la condición, se devuelve `undefined`.

2. Si el resultado de la expresión anterior es `undefined`, se devuelve `-1` utilizando el operador de encadenamiento opcional `??`.
