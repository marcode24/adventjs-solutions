# Reto 18: El reloj digital

## Problema

En la fábrica de juguetes, los elfos están programando un reloj digital para mantenerse en horario con la producción de regalos. Sin embargo, se han encontrado con un desafío de programación interesante. Necesitan una función que, dada una hora en formato 'HH:MM', cree una representación visual de esta hora en un reloj digital devolviendo un array de arrays de caracteres.

La pantalla del reloj tiene 7 filas y 17 columnas, y cada dígito de la hora ocupa 7 filas y 3 columnas. Los dígitos están compuestos por asteriscos (*) y espacios en blanco (). Entre cada dígito hay una columna vacía.

Los dos puntos para separar horas y minutos se dibujan usando dos asteríscos (*) y siempre se colocan en la misma posición, en las filas 2 y 4, en la columna 9, respectivamente (nota: la indexación de filas y columnas comienza en 0).

Por ejemplo, si la función recibe 01:30 debe devolver:

drawClock('01:30') // ⬇️

[
  ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
  ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*']
]
Para saber cómo dibujar cada dígito, nos han pasado la siguiente imagen. Como ves, cada dígito está compuesto por 7 filas y 3 columnas. Los píxeles en rojo, nosotros lo representaremos con un asterisco (*), y los píxeles en blanco, con un espacio ():

Representación de los dígitos para el reloj digital del 1 al 9, donde puedes ver lo que ocupa en píxeles cada número

## Mi solución

```js
function drawClock(time) {
  const digitPatterns = {
    0: ['***', '* *', '* *', '* *', '* *', '* *', '***'],
    1: ['  *', '  *', '  *', '  *', '  *', '  *', '  *'],
    2: ['***', '  *', '  *', '***', '*  ', '*  ', '***'],
    3: ['***', '  *', '  *', '***', '  *', '  *', '***'],
    4: ['* *', '* *', '* *', '***', '  *', '  *', '  *'],
    5: ['***', '*  ', '*  ', '***', '  *', '  *', '***'],
    6: ['***', '*  ', '*  ', '***', '* *', '* *', '***'],
    7: ['***', '  *', '  *', '  *', '  *', '  *', '  *'],
    8: ['***', '* *', '* *', '***', '* *', '* *', '***'],
    9: ['***', '* *', '* *', '***', '  *', '  *', '***'],
    ':': [' ', ' ', '*', ' ', '*', ' ', ' '],
  };

  const firstDigitPattern = digitPatterns[time[0]];
  const secondDigitPattern = digitPatterns[time[1]];
  const colonPattern = digitPatterns[':'];
  const thirdDigitPattern = digitPatterns[time[3]];
  const fourthDigitPattern = digitPatterns[time[4]];

  const result = [...firstDigitPattern];
  let position = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const row of result) {
    const rowString = `${row} ${secondDigitPattern[position]} `
      + `${colonPattern[position]} ${thirdDigitPattern[position]} `
      + `${fourthDigitPattern[position]}`;
    result[position] = [...rowString];
    position++;
  }

  return result;
}
```
