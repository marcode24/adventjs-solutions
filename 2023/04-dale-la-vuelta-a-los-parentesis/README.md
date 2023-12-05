# Reto 04: Dale la vuelta a los parentesis

## Problema

En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: **las letras dentro de los paréntesis deben ser leídas al revés**

**Santa necesita que estos mensajes estén correctamente formateados.** Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

Eso sí, ten en cuenta que **pueden existir paréntesis anidados**, por lo que debes invertir los caracteres en el orden correcto.

```js
const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
```

Notas:

- Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.
- En el mensaje final no deben quedar paréntesis.
- El nivel máximo de anidamiento es 2.

## Mi solución

**Solucion 1:**

```js
const decode = (message) => {
  let result = '';
  const stack = [];

  [...message].forEach((char) => {
    if (char === '(') {
      stack.push(result);
      result = '';
    } else if (char === ')') {
      result = `${stack.pop()}${result.split('').reverse().join('')}`;
    } else {
      result += char;
    }
  });

  return result;
};
```

**Solucion 2:**

```js
const decode2 = (message) => {
  const regex = /\(([^()]+)\)/;
  let match = message.match(regex);
  while (match) {
    const reversed = match[1].split('').reverse().join('');
    message = message.replace(match[0], reversed);
    match = message.match(regex);
  }
  return message;
};
```

## Explicación de mi solución

**Solucion 1:**

1. Inicializo la variable `result` a una cadena vacía y la variable `stack` a un array vacío.
2. Convierto la cadena de entrada en un array de caracteres utilizando el operador de propagación `...` y recorro el array utilizando el método `forEach`.
3. Si el caracter es un paréntesis de apertura, añado el valor de `result` al array `stack` y reinicio `result` a una cadena vacía.
4. Si el caracter es un paréntesis de cierre, invierto el valor de `result` y lo concateno con el último valor del array `stack`.
5. Si el caracter no es un paréntesis, lo añado a `result`.
6. Devuelvo `result`.

**Solucion 2:**

1. Utilizo una expresión regular para buscar el primer paréntesis de apertura y cierre con cualquier caracter entre ellos.
2. Mientras exista un paréntesis de apertura y cierre, invierto los caracteres entre los paréntesis y los reemplazo en la cadena de entrada.
3. Devuelvo la cadena de entrada.
