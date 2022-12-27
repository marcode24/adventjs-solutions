# Reto 21: Creando la tabla de regalos

## Problema

Hay muchas cartas de niños pidiendo regalos y es muy difícil que podamos hacer inventario de todos ellos. Por eso, hemos decidido crear un programa que nos dibuje una tabla con los regalos que nos piden y sus cantidades.

Para ello nos dan un array de objetos con los nombres de los regalos y sus cantidades. Escribe una función que reciba este array y devuelva una cadena con la tabla dibujada.

```js
printTable([
  { name: "Game", quantity: 2 },
  { name: "Bike", quantity: 1 },
  { name: "Book", quantity: 3 },
]);
```

```js
+++++++++++++++++++
| Gift | Quantity |
| ---- | -------- |
| Game | 2        |
| Bike | 1        |
| Book | 3        |
*******************
```

Otro ejemplo donde se puede ver que la tabla siempre usa sólo el espacio justo dependiendo de la longitud de los nombres de los regalos y de las cantidades.

```js
printTable([
  { name: "PlayStation 5", quantity: 9234782374892 },
  { name: "Book Learn Web Dev", quantity: 23531 },
]);
```

```js
++++++++++++++++++++++++++++++++++++++
| Gift               | Quantity      |
| ------------------ | ------------- |
| PlayStation 5      | 9234782374892 |
| Book Learn Web Dev | 23531         |
**************************************
```

Como ves, el tamaño de las celdas depende de la longitud de los nombres de los regalos y de las cantidades, aunque como mínimo tendrán que ser del espacio de los títulos Gift y Quantity respectivamente.

La tabla usa los símbolos: + para el borde superior, \* para el borde inferior, - para las líneas horizontales y | para las líneas verticales.

**Ten en cuenta:**

- Usa sólo el espacio que necesitas para dibujar la tabla.
- Adapta la tabla a la longitud de los nombres de los regalos y de las cantidades o los títulos de las columnas.
- No hace falta que ordenes los resultados.
- La tabla no termina con salto de línea.

## Mi solución

```js
function printTable(gifts) {
  const gTitle = "Gift";
  const qTitle = "Quantity";
  const [maxNameLength, maxQuantityLength] = [
    Math.max(gTitle.length, ...gifts.map(({ name }) => name.length)),
    Math.max(
      qTitle.length,
      ...gifts.map(({ quantity }) => `${quantity}`.length)
    ),
  ];
  const topLine = `${"+".repeat(maxNameLength + maxQuantityLength + 7)}`;
  // eslint-disable-next-line prefer-template
  const header =
    "| " +
    gTitle +
    " ".repeat(maxNameLength - gTitle.length) +
    " | " +
    qTitle +
    " ".repeat(maxQuantityLength - qTitle.length) +
    " |";
  // eslint-disable-next-line prefer-template
  const separator =
    "| " +
    "-".repeat(maxNameLength) +
    " | " +
    "-".repeat(maxQuantityLength) +
    " |";
  const body = gifts
    .map(({ name, quantity }) => {
      const nameGift = `${name}${" ".repeat(maxNameLength - name.length)}`;
      // eslint-disable-next-line prefer-template
      const quantityGift =
        quantity + " ".repeat(maxQuantityLength - quantity.toString().length);
      return `| ${nameGift} | ${quantityGift} |`;
    })
    .join("\n");
  const bottomLine = `${"*".repeat(maxNameLength + maxQuantityLength + 7)}`;
  const table = `${topLine}\n${header}\n${separator}\n${body}\n${bottomLine}`;
  return table;
}
```
