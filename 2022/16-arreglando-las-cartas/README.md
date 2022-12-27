# Reto 16: Arreglando las cartas de Papá Noel

## Problema

Papá Noel está empezando a recibir un montón de cartas pero tienen un montón de problemas de formato. Para mejorar la lectura, va a escribir un programa que, dado un texto, lo formatea de acuerdo a las siguientes reglas:

Eliminar espacios al inicio y al final
Eliminar múltiples espacios en blanco y dejar sólo uno
Dejar un espacio después de cada coma
Quitar espacios antes de coma o punto
Las preguntas sólo deben terminar con un signo de interrogación
La primera letra de cada oración debe estar en mayúscula
Poner en mayúscula la palabra "Santa Claus" si aparece en la carta
Poner un punto al final de la frase si no tiene puntuación
Las cartas las escriben inglés y aquí tenemos un ejemplo:

```js
fixLetter(
  ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `
);
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

fixLetter(
  "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"
);
// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?
```

A tener en cuenta:

- No te tienes que preocupar por los signos de puntuación que no sean coma, punto o interrogación.
- Asegúrate de respetar los saltos de línea y espacios originales.

## Mi Solución

```js
function fixLetter(letter) {
  return letter
    .trim()
    .replace(/([.,?!\s])(?=\1)/g, "")
    .replace(/\s+([.,?!])/g, "$1")
    .replace(/\b([.?!] \w)|(^\w)/g, (match) => match.toUpperCase())
    .replace(/^.*\w$/, (match) => `${match}.`)
    .replace(/santa claus/gi, "Santa Claus");
}

console.log(
  fixLetter(
    ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `
  )
);
// -> Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

console.log(
  fixLetter(
    "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"
  )
);
// -> Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?

console.log(fixLetter("  hi    santa    claus ??"));
// -> Hi Santa Claus?

console.log(
  fixLetter("Hey santa Claus .  I want a bike.   I want a videogame! ")
);
// -> Hey Santa Claus. I want a bike. I want a videogame!

console.log(fixLetter("  hi    santa    claus . santa claus is the best  "));
// -> Hi Santa Claus. Santa Claus is the best.
```
