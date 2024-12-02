# Reto 03: Organizando-el-inventario

Santa Claus 🎅 está revisando el inventario de su taller para preparar la entrega de regalos. Los elfos han registrado los juguetes en un array de objetos, pero la información está un poco desordenada. **Necesitas ayudar a Santa a organizar el inventario.**

Recibirás un array de objetos, donde **cada objeto representa un juguete y tiene las propiedades:**

- name: el nombre del juguete (string).
- quantity: la cantidad disponible de ese juguete (entero).
- category: la categoría a la que pertenece el juguete (string).

Escribe una función que procese este array y devuelva un objeto que organice los juguetes de la siguiente manera:

- Las claves del objeto serán las categorías de juguetes.
- Los valores serán objetos que tienen como claves los nombres de los juguetes y como valores las cantidades totales de cada juguete en esa categoría.
- Si hay juguetes con el mismo nombre en la misma categoría, debes sumar sus cantidades.
- Si el array está vacío, la función debe devolver un objeto vacío {}.

```js
const inventary = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]

organizeInventory(inventary)

// Resultado esperado:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }

const inventary2 = [
  { name: 'book', quantity: 10, category: 'education' },
  { name: 'book', quantity: 5, category: 'education' },
  { name: 'paint', quantity: 3, category: 'art' }
]

organizeInventory(inventary2)

// Resultado esperado:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }
```

## Mi solución explicada

```js
function organizeInventory(inventory) {
  return inventory.reduce(
    (result, { category, name, quantity }) => (
      (result[category] ??= {}),
      (result[category][name] = ~~result[category][name] + quantity),
      result
    ),
    {},
  );
}
```

Primero utilizamos el método `reduce` para recorrer el array de objetos y obtener un objeto final. El objeto final será el resultado de organizar el inventario.

```js
inventory.reduce(
  (result, { category, name, quantity }) => (
    (result[category] ??= {}),
    (result[category][name] = ~~result[category][name] + quantity),
    result
  ),
  {},
);
```

Dentro de la función de reducción, desestructuramos cada objeto en sus propiedades `category`, `name` y `quantity`. Luego, actualizamos el objeto `result` con la información del juguete actual.

```js
(result[category] ??= {}),
(result[category][name] = ~~result[category][name] + quantity),
result
```

Para organizar el inventario, primero verificamos si la categoría ya existe en el objeto `result`. Si no existe, la inicializamos como un objeto vacío.

```js
(result[category] ??= {})
```

Luego, actualizamos la cantidad del juguete en la categoría correspondiente. Para ello, sumamos la cantidad actual del juguete con la cantidad del juguete actual.

Para evitar problemas con valores `undefined`, utilizamos el operador de doble negación `~~` para convertir `undefined` en `0` y sumar la cantidad actual.

Para saber más sobre el operador de doble negación, puedes consultar la siguiente [documentación](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT).

```js
(result[category][name] = ~~result[category][name] + quantity)
```

Finalmente, devolvemos el objeto `result` actualizado en cada iteración.

```js
result
```
