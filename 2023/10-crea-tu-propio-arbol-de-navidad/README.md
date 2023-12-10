# Reto 10: Crea tu propio arbol de navidad

## Problema

¡Vaya idea ha tenido Sam Elfman! Quiere ofrecer un servicio que te crea un **árbol de Navidad 🎄 personalizado** en cuestión de segundos.

Para crearlo nos pasan una **cadena de caracteres para formar el árbol** y un **número que indica la altura del mismo.**

Cada carácter de la cadena representa un adorno del árbol, y vamos utilizándolos **de forma cíclica** hasta llegar a la altura indicada. **Como mínimo siempre nos pasarán uno.**

Debemos devolver un **string** multilínea con el árbol de Navidad formado con los adornos, la altura indicada **más una última línea con el tronco formado por el carácter |** en el centro y, finalmente, un salto de línea `\n.`

Por ejemplo si recibimos la cadena "123" y el número 4 como altura, tendríamos que construir este árbol:

```txt
   1
  2 3
 1 2 3
1 2 3 1
   |
```

Si recibimos la cadena *@o y el número 3, el árbol que debemos devolver es:

```txt
  *
 @ o
* @ o
  |
```

Nota:

- **El árbol siempre debe estar centrado, para ello añade espacios en blanco a la izquierda de cada línea.**
- **Crea espacios sólo a la izquierda de cada línea del árbol. No dejes espacios en blanco a la derecha.**
- **Los adornos tienen un espacio en blanco entre ellos de separación.**

## Mi solución

```js
const createChristmasTree = (ornaments, height) => {
  const heightSucessive = (height / 2) * (height + 1);
  const repeatOrnaments = [
    ...ornaments.repeat((heightSucessive / ornaments.length) + 1),
  ].join(' ');
  const spaces = ' '.repeat(height - 1);

  let tree = '';
  let i = 0;
  let counter = 0;
  while (counter < height) {
    const ornamentsLine = repeatOrnaments.substring(i, i + 2 * counter + 1);
    const level = `${spaces.substring(counter)}${ornamentsLine}\n`;
    tree += level;
    i += 2 * (counter + 1);
    counter++;
  }

  return `${tree}${' '.repeat(height - 1)}|\n`;
};
```

## Explicación de mi solución

1. Calculo la cantidad de adornos que necesito para la altura indicada, teniendo en cuenta que cada nivel tiene un adorno más que el anterior.
2. Repito la cadena de adornos la cantidad de veces necesaria para tener la cantidad de adornos necesarios.
3. Creo una variable para guardar el árbol.
4. Creo un bucle que se repita tantas veces como niveles tenga el árbol.
5. En cada iteración, creo una variable para guardar los adornos de ese nivel.
6. Creo una variable para guardar los espacios en blanco que necesito para centrar los adornos.
7. Creo una variable para guardar el nivel del árbol.
8. Concateno el nivel del árbol a la variable del árbol.
9. Incremento el contador de niveles.
10. Devuelvo el árbol.
