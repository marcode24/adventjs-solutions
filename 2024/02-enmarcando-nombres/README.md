# Reto 02: Enmarcando-nombres

**Santa Claus** 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

**Reglas:**

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.

Ejemplo de funcionamiento:

```js
createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************

createFrame(['midu'])

// Resultado esperado:
********
* midu *
********

createFrame(['a', 'bb', 'ccc'])

// Resultado esperado:
*******
* a   *
* bb  *
* ccc *
*******

createFrame(['a', 'bb', 'ccc', 'dddd'])
```

## Mi solución explicada

```js
function createFrame(names) {
  const maxLength = Math.max(...names.map((name) => name.length));
  const border = '*'.repeat(maxLength + 4);
  const framedNames = names.map((name) => `* ${name.padEnd(maxLength, ' ')} *`);

  return [border, ...framedNames, border].join('\n');
}
```

Primero obtenemos la longitud del nombre más largo de la lista. Para ello, usamos el método `map` para obtener un array con las longitudes de cada nombre, y luego usamos el método `Math.max` para obtener el valor máximo de ese array.

```js
const maxLength = Math.max(...names.map((name) => name.length));
```

Despues, creamos el borde del marco con una línea de asteriscos. La longitud de este borde será igual a la longitud del nombre más largo más 4 espacios (2 a cada lado).

```js
const border = '*'.repeat(maxLength + 4);
```

A continuación, generamos un array con los nombres enmarcados. Para ello, usamos el método `map` para recorrer cada nombre y añadirle un asterisco al principio y al final, y rellenamos con espacios hasta la longitud del nombre más largo.

El método `padEnd` añade espacios al final de la cadena hasta que esta tenga la longitud especificada.

```js
const framedNames = names.map((name) => `* ${name.padEnd(maxLength, ' ')} *`);
```

Finalmente, unimos el borde, los nombres enmarcados y el borde nuevamente, separados por saltos de línea.

```js
return [border, ...framedNames, border].join('\n');
```

**Para este reto me base en mi solucion propuesta para el ADVENTJS del 2021, el cual puedes encontrar [aqui](https://github.com/marcode24/adventjs-solutions/blob/main/2021/13-envuelve-regalos-con-asteriscos/index.js).**
