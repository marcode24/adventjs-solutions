# Reto 15: Dibujando-tablas

**Al Polo Norte ha llegado ChatGPT** y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.

Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.

La tabla dibujada debe representar los datos del objeto de la siguiente manera:

- Tiene una cabecera con el nombre de la columna.
- El nombre de la columna pone la primera letra en mayúscula.
- Cada fila debe contener los valores de los objetos en el orden correspondiente.
- Cada valor debe estar alineado a la izquierda.
- Los campos dejan siempre un espacio a la izquierda.
- Los campos dejan a la derecha el espacio necesario para alinear la caja.

Mira el ejemplo para ver cómo debes dibujar la tabla:

```js
drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
])
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

drawTable([
  { gift: 'Doll', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music CD', quantity: 1 }
])
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+
```

## Mi solución explicada

```js
function drawTable(data) {
  const headers = Object.keys(data[0]);

  const columnWidths = headers.map((header) =>
    Math.max(header.length, ...data.map((row) => `${row[header]}`.length)),
  );

  const separator = `+${columnWidths
    .map((width) => '-'.repeat(width + 2))
    .join('+')}+`;

  const headerRowFormatted = `| ${headers
    .map((header, i) => {
      const headerFormatted = header.charAt(0).toUpperCase() + header.slice(1);
      return headerFormatted.padEnd(columnWidths[i]);
    })
    .join(' | ')} |`;

  const rows = data.map(
    (row) =>
      `| ${headers
        .map((key, i) => `${row[key]}`.padEnd(columnWidths[i]))
        .join(' | ')} |`,
  );

  return [separator, headerRowFormatted, separator, ...rows, separator].join(
    '\n',
  );
}
```

Para poder resolver este reto, hay que tener bien presentes los 6 puntos que se mencionan en la descripción del reto.

- Para el primer punto, nos dice que `Tiene una cabecera con el nombre de la columna`. Para esto, necesitamos obtener los nombres de las columnas, que son las claves de los objetos en el array de objetos que recibimos como argumento. Para obtener estas claves, usamos `Object.keys(data[0])`.

- Para el segundo punto, nos dice que `El nombre de la columna pone la primera letra en mayúscula`. Para esto, necesitamos convertir la primera letra de cada nombre de columna a mayúscula. Para hacer esto, usamos el método `map` para recorrer cada nombre de columna y aplicar la transformación necesaria. Usamos `header.charAt(0).toUpperCase() + header.slice(1)` para convertir la primera letra a mayúscula.

- Para el tercer punto, nos dice que `Cada fila debe contener los valores de los objetos en el orden correspondiente`. Para esto, necesitamos recorrer cada objeto en el array de objetos y obtener los valores correspondientes a cada columna. Usamos el método `map` para recorrer cada objeto y obtener los valores correspondientes a cada columna. Usamos `row[key]` para obtener el valor correspondiente a la columna.

- Para el cuarto punto, nos dice que `Cada valor debe estar alineado a la izquierda`. Para esto, necesitamos alinear cada valor a la izquierda. Usamos el método `padEnd` para alinear cada valor a la izquierda. Usamos `padEnd(columnWidths[i])` para alinear cada valor a la izquierda. El ancho de la columna lo obtenemos previamente en el array `columnWidths`.

- Para el quinto punto, nos dice que `Los campos dejan siempre un espacio a la izquierda`. Para esto, necesitamos dejar un espacio a la izquierda de cada valor. Usamos el espacio en blanco `' '` antes de cada valor. Usamos `' | '` para dejar un espacio a la izquierda de cada valor.

- Para el sexto punto, nos dice que `Los campos dejan a la derecha el espacio necesario para alinear la caja`. Para esto, necesitamos dejar el espacio necesario a la derecha de cada valor. Usamos el método `padEnd` para dejar el espacio necesario a la derecha de cada valor. Usamos `padEnd(columnWidths[i])` para dejar el espacio necesario a la derecha. El ancho de la columna lo obtenemos previamente en el array `columnWidths`.

Una vez que analizamos los 6 puntos, podemos ver que la solución propuesta cumple con todos los requisitos del reto.

**Veamos con un ejemplo cómo funciona el código:**

Supongamos que tenemos la siguiente entrada, donde tenemos un array de objetos con los nombres y ciudades de algunas personas.

```js
drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
])
```

Primero, necesitamos obtener los nombres de las columnas, que son las claves de los objetos en el array de objetos. Utilizaremos `Object.keys(data[0])` para obtener los nombres de las columnas. Lo que hace es devolver un array con las claves de los objetos. En este caso, obtendremos `['name', 'city']`.

```js
// const headers = Object.keys(data[0]);
// const headers = Object.keys({ name: 'Alice', city: 'London' });
const headers = ['name', 'city'];
```

Luego, necesitamos obtener el ancho de cada columna. Como tenemos 2 columnas posibles, utilizaremos `map` para recorrer cada columna y obtener el ancho de cada valor en cada columna. En este caso, deberíamos obtener `[7, 8]`.

Como tenemos 2 columnas, realizaremos dos iteraciones. En la primera iteración, obtenemos el ancho de la columna `name`.

Utilizaremos `Math.max()` para obtener el ancho máximo de cada valor, tanto del nombre de la columna como de los valores de los objetos.

Para el nombre de la columna, obtenemos el ancho del nombre de la columna `name`, que es `4`. Para los valores de los objetos, obtenemos el ancho de cada valor en la columna `name`.

- Para el primer objeto, obtenemos el ancho del valor `Alice`, que es `5`.
- Para el segundo objeto, obtenemos el ancho del valor `Bob`, que es `3`.
- Para el tercer objeto, obtenemos el ancho del valor `Charlie`, que es `7`.

Una vez que tenemos los anchos de los valores de los objetos, utilizamos `Math.max()` para obtener el ancho máximo de cada valor en la columna `name`, que es `7`. Este será el ancho de la columna `name`.

```js
const columnWidths = headers.map((header) =>
  Math.max(header.length, ...data.map((row) => `${row[header]}`.length)),
);

// Para esta primera iteración, el parametro header es 'name'

// Math.max('name'.length, ...data.map((row) => `${row['name']}`.length))
// Math.max(4, 'Alice'.length, 'Bob'.length, 'Charlie'.length)
// Math.max(4, 5, 3, 7)
return 7
```

En la segunda iteración, realizamos el mismo proceso que en la primera iteración para obtener el ancho de la columna `city`. En este caso, deberíamos obtener `8`.

```js
// Para esta segunda iteración, el parametro header es 'city'

// Math.max('city'.length, ...data.map((row) => `${row['city']}`.length))
// Math.max(4, 'London'.length, 'Paris'.length, 'New York'.length)
// Math.max(4, 6, 5, 8)
return 8
```

Para este momento, `columnWidths` contiene los anchos de las columnas. En este caso, contiene `[7, 8]`.

```js
// const columnWidths = headers.map((header) =>
//   Math.max(header.length, ...data.map((row) => `${row[header]}`.length)),
// );

const columnWidths = [7, 8];
```

Una vez que tenemos los anchos de las columnas, necesitamos crear el separador de la tabla, como lo ocuparemos 3 veces, lo guardaremos en una variable `separator`.

Utilizaremos `map` para recorrer cada columna y crear el separador de la tabla.

```js
const separator = `+${columnWidths
    .map((width) => '-'.repeat(width + 2))
    .join('+')}+`;

// Para la primera iteración, el parametro width es 7

// '-'.repeat(width + 2)
// '-'.repeat(7 + 2)
// '-'.repeat(9)
'---------'

// Para la segunda iteración, el parametro width es 8

// '-'.repeat(width + 2)
// '-'.repeat(8 + 2)
// '-'.repeat(10)
'----------'

// En este momento, tendriamos que unir los dos valores obtenidos
// '+ ['---------', '----------'].join('+') +'
// '+ ---------+---------- +'
return '+---------+----------+'
```

En este momento, `separator` contiene el separador de la tabla.

```js
// const separator = `+${columnWidths
//   .map((width) => '-'.repeat(width + 2))
//   .join('+')}+`;

const separator = '+---------+----------+';
```

Una vez que tenemos los anchos de las columnas, necesitamos crear el encabezado de la tabla, con la primera letra en mayúscula, dejando un espacio a la izquierda y dejando a la derecha el espacio necesario para alinear la caja.

Utilizaremos `map` para recorrer cada columna y crear el encabezado de la tabla.

Internamente, utilizaremos `padEnd` para alinear el encabezado a la izquierda y dejar a la derecha el espacio necesario para alinear la caja.

```js
const headerRowFormatted = `| ${headers
  .map((header, i) => {
    const headerFormatted = header.charAt(0).toUpperCase() + header.slice(1);
    return headerFormatted.padEnd(columnWidths[i]);
  })
  .join(' | ')} |`;

// Para la primera iteración, el parametro header es 'name' y el parametro i es 0

// header.charAt(0).toUpperCase() + header.slice(1)
// 'name'.charAt(0).toUpperCase() + 'name'.slice(1)
// 'N' + 'ame'
'Name'

// 'Name'.padEnd(columnWidths[i])
// 'Name'.padEnd(columnWidths[0])
// 'Name'.padEnd(7)
'Name    '

// Para la segunda iteración, el parametro header es 'city' y el parametro i es 1

// header.charAt(0).toUpperCase() + header.slice(1)
// 'city'.charAt(0).toUpperCase() + 'city'.slice(1)
// 'C' + 'ity'
'City'

// 'City'.padEnd(columnWidths[i])
// 'City'.padEnd(columnWidths[1])
// 'City'.padEnd(8)
'City     '

// En este momento, tendriamos que unir los dos valores obtenidos
// '| ['Name    ', 'City     '].join(' | ') |'
// '| Name    | City     |'
return '| Name    | City     |'
```

En este momento, `headerRowFormatted` contiene la fila de la cabecera de la tabla.

```js
// const headerRowFormatted = `| ${headers
//   .map((header, i) => {
//     const headerFormatted = header.charAt(0).toUpperCase() + header.slice(1);
//     return headerFormatted.padEnd(columnWidths[i]);
//   })
//   .join(' | ')} |`;

const headerRowFormatted = '| Name    | City     |';
```

Una vez que tenemos la fila de la cabecera, necesitamos crear las filas de los objetos. Es importante tener en cuenta que cada fila debe contener los valores de los objetos en el orden correspondiente, debe dejar un espacio a la izquierda y debe dejar a la derecha el espacio necesario para alinear la caja. Utilizaremos `map` para recorrer cada objeto y crear las filas de los objetos.

```js
const rows = data.map(
  (row) =>
    `| ${headers
      .map((key, i) => `${row[key]}`.padEnd(columnWidths[i]))
      .join(' | ')} |`,
);

// Para la primera iteración, el parametro row es { name: 'Alice', city: 'London' }
// Como tenemos dos columnas, realizaremos dos iteraciones para la primera fila

// Para la primera iteración, el parametro key es 'name' y el parametro i es 0

// `${row[key]}`.padEnd(columnWidths[i])
// `${row['name']}`.padEnd(columnWidths[0])
// `'Alice'.padEnd(7)`
'Alice   '

// Para la segunda iteración, el parametro key es 'city' y el parametro i es 1

// `${row[key]}`.padEnd(columnWidths[i])
// `${row['city']}`.padEnd(columnWidths[1])
// `'London'.padEnd(8)`
'London    '

// En este momento, tendriamos que unir los dos valores obtenidos
// '| ['Alice   ', 'London    '].join(' | ') |'
// '| Alice   | London    |'
return '| Alice   | London    |'

// Para la segunda iteración, el parametro row es { name: 'Bob', city: 'Paris' }
// Como tenemos dos columnas, realizaremos dos iteraciones para la segunda fila

// Para la primera iteración, el parametro key es 'name' y el parametro i es 0

// `${row[key]}`.padEnd(columnWidths[i])
// `${row['name']}`.padEnd(columnWidths[0])
// `'Bob'.padEnd(7)`
'Bob     '

// Para la segunda iteración, el parametro key es 'city' y el parametro i es 1

// `${row[key]}`.padEnd(columnWidths[i])
// `${row['city']}`.padEnd(columnWidths[1])
// `'Paris'.padEnd(8)`
'Paris     '

// En este momento, tendriamos que unir los dos valores obtenidos
// '| ['Bob     ', 'Paris     '].join(' | ') |'
// '| Bob     | Paris     |'
return '| Bob     | Paris     |'

// Para la tercera iteración, el parametro row es { name: 'Charlie', city: 'New York' }
// Como tenemos dos columnas, realizaremos dos iteraciones para la tercera fila

// Para la primera iteración, el parametro key es 'name' y el parametro i es 0

// `${row[key]}`.padEnd(columnWidths[i])
// `${row['name']}`.padEnd(columnWidths[0])
// `'Charlie'.padEnd(7)`
'Charlie '

// Para la segunda iteración, el parametro key es 'city' y el parametro i es 1

// `${row[key]}`.padEnd(columnWidths[i])
// `${row['city']}`.padEnd(columnWidths[1])
// `'New York'.padEnd(8)`
'New York  '

// En este momento, tendriamos que unir los dos valores obtenidos
// '| ['Charlie ', 'New York  '].join(' | ') |'
// '| Charlie | New York  |'
return '| Charlie | New York  |'
```

Para este momento, `rows` contiene las filas de los objetos.

```js
// const rows = data.map(
//   (row) =>
//     `| ${headers
//       .map((key, i) => `${row[key]}`.padEnd(columnWidths[i]))
//       .join(' | ')} |`,
// );

const rows = [
  '| Alice   | London    |',
  '| Bob     | Paris     |',
  '| Charlie | New York  |'
]
```

Finalmente, necesitamos unir todas las partes de la tabla. Utilizaremos `join` para unir todas las partes de la tabla

Nuestras variables contienen lo siguiente:

```js
const separator = '+---------+----------+';
const headerRowFormatted = '| Name    | City     |';
const rows = [
  '| Alice   | London    |',
  '| Bob     | Paris     |',
  '| Charlie | New York  |'
];
```

Generamos un array con todas las partes de la tabla y lo unimos con un salto de línea. Primero, unimos el separador, luego la fila de la cabecera, luego el separador, luego las filas de los objetos y finalmente el separador.

```js
// return [separator, headerRow, separator, ...rows, separator].join('\n');
return [
  '+---------+-----------+', // -> separador
  '| Name    | City      |', // -> fila de la cabecera
  '+---------+-----------+', // -> separador
  '| Alice   | London    |', //
  '| Bob     | Paris     |', // -> filas de los objetos
  '| Charlie | New York  |', //
  '+---------+-----------+'  // -> separador
].join('\n')
```

En este momento, la función `drawTable` devuelve la tabla de texto generada.

```js
+---------+-----------+
| Name    | City      |
+---------+-----------+
| Alice   | London    |
| Bob     | Paris     |
| Charlie | New York  |
+---------+-----------+
```

Y eso es todo. Hemos completado el reto con éxito 🎉
