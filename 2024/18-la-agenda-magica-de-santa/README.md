# Reto 18: La-agenda-magica-de-santa

Santa Claus tiene una agenda mágica 📇 donde guarda las direcciones de los niños para entregar los regalos. El problema: **la información de la agenda está mezclada y malformateada**. Las líneas contienen un número de teléfono mágico, el nombre de un niño y su dirección, pero todo está rodeado de caracteres extraños.

Santa necesita tu ayuda para encontrar información específica de la agenda. Escribe una función que, **dado el contenido de la agenda y un número de teléfono, devuelva el nombre del niño y su dirección.**

Ten en cuenta que en la agenda:

- Los números de teléfono están formateados como +X-YYY-YYY-YYY (donde X es uno o dos dígitos, e Y es un dígito).
- El nombre de cada niño está siempre entre < y >

La idea es que escribas una funcióna que, pasándole el teléfono completo o una parte, devuelva el nombre y dirección del niño. **Si no encuentra nada o hay más de un resultado**, debes devolver `null`.

```js
const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

findInAgenda(agenda, '34-600-123-456')
// { name: "Juan Perez", address: "Calle Gran Via 12" }

findInAgenda(agenda, '600-987')
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

findInAgenda(agenda, '111')
// null
// Explicación: No hay resultados

findInAgenda(agenda, '1')
// null
// Explicación: Demasiados resultados
```

## Mi solución explicada

```js
function findInAgenda(agenda, phone) {
  const kidsList = agenda.split('\n');
  const foundKids = kidsList.filter((kid) => kid.includes(phone));

  const matchingCount = foundKids?.length;

  if (matchingCount === 1) {
    const [firstKid] = foundKids;
    const name = firstKid.split('<')[1].split('>')[0];
    const address = firstKid
      .split(' ')
      .slice(1, -1)
      .join(' ')
      .split('<')[0]
      .trim();

    return { name, address };
  }

  return null;
}
```

Para resolver este reto, primero dividí la agenda en una lista de niños por cada salto de línea.

Luego, filtré la lista de niños para encontrar aquellos que contienen el número de teléfono que se busca y guardé el resultado en `foundKids`.

Después, conté cuántos niños coinciden con el número de teléfono buscado y guardé el resultado en `matchingCount`.

Em este caso si no hay resultados o hay más de uno, devuelvo `null` porque como dice el enunciado, si no hay resultados o hay más de un resultado, debes devolver `null`.

Si hay un solo resultado, extraigo el nombre y la dirección del niño y los devuelvo en un objeto.

Para obtener el nombre del niño, busco el texto que está entre los caracteres `<` y `>`.

Para obtener la dirección del niño, elimino el número de teléfono y el nombre del niño de la cadena, y luego elimino los espacios en blanco al principio y al final de la cadena.

Finalmente, devuelvo un objeto con el nombre y la dirección del niño.

**Veamos con un ejemplo cómo funciona**:

Supongamos que tenemos la siguiente agenda:

```js
const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`
```

y queremos buscar el número de teléfono `34-600-123-456`.

Primero, dividimos la agenda en una lista de niños:

```js
const kidsList = agenda.split('\n');

// kidsList = [
//   '+34-600-123-456 Calle Gran Via 12 <Juan Perez>',
//   'Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654',
//   '<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York'
// ]
```

Despues filtramos la lista de niños para encontrar aquellos que contienen el número de teléfono que buscamos:

Al utilizar el método `filter` con la condición `kid.includes('34-600-123-456')`, obtenemos un nuevo array con los niños que contienen el número de teléfono buscado. Ya que la cadena `'+34-600-123-456 Calle Gran Via 12 <Juan Perez>'` contiene el número de teléfono `34-600-123-456`.

```js
const foundKids = kidsList.filter((kid) => kid.includes('34-600-123-456'));

// foundKids = [
//   '+34-600-123-456 Calle Gran Via 12 <Juan Perez>'
// ]
```

Luego, contamos cuántos niños coinciden con el número de teléfono buscado:

```js
const matchingCount = foundKids?.length;
const matchingCount = 1;
```

Ahora validamos la condición que nos dice que si no hay resultados o hay más de uno, debemos devolver `null`. En este caso, como hay un solo resultado, extraemos el nombre y la dirección del niño y los devolvemos en un objeto:

```js
const [firstKid] = foundKids;
const name = firstKid.split('<')[1].split('>')[0];

// const name = '+34-600-123-456 Calle Gran Via 12 <Juan Perez>'.split('<')[1].split('>')[0];
// const name = ['+34-600-123-456 Calle Gran Via 12 ', 'Juan Perez>'][1].split('>')[0];
// const name = ['Juan Perez>'].split('>')[0];
// const name = ['Juan Perez', ''][0];
const name = 'Juan Perez';

const address = firstKid
  .split(' ')
  .slice(1, -1)
  .join(' ')
  .split('<')[0]
  .trim();

// const address = '+34-600-123-456 Calle Gran Via 12 <Juan Perez>'.split(' ').slice(1, -1).join(' ').split('<')[0].trim();
// const address = ['+34-600-123-456', 'Calle', 'Gran', 'Via', '12', '<Juan', 'Perez>'].slice(1, -1).join(' ').split('<')[0].trim();
// const address = ['Calle', 'Gran', 'Via', '12', '<Juan'].join(' ').split('<')[0].trim();
// const address = 'Calle Gran Via 12 <Juan'.split('<')[0].trim();
// const address = ['Calle Gran Via 12 ', 'Juan'][0].trim();
// const address = 'Calle Gran Via 12 '.trim();
const address = 'Calle Gran Via 12';

return { name, address };

// { name: "Juan Perez", address: "Calle Gran Via 12" }
```

Finalmente, devolvemos un objeto con el nombre y la dirección del niño.

**Ahora veamos un caso en el que pueden haber más de un resultado**:

Supongamos que queremos buscar el número de teléfono `1`.

Primero, dividimos la agenda en una lista de niños:

```js
const kidsList = agenda.split('\n');

// kidsList = [
//   '+34-600-123-456 Calle Gran Via 12 <Juan Perez>',
//   'Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654',
//   '<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York'
// ]
```

Despues filtramos la lista de niños para encontrar aquellos que contienen el número de teléfono que buscamos:

Al utilizar el método `filter` con la condición `kid.includes('1')`, obtenemos un nuevo array con los niños que contienen el número de teléfono buscado. Ya que las cadenas `'<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York'` y `'<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York'` contienen el número de teléfono `1`.

```js
const foundKids = kidsList.filter((kid) => kid.includes('1'));

// kidsFound: [
//   '+34-600-123-456 Calle Gran Via 12 <Juan Perez>',
//   'Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654',
//   '<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York'
// ]
```

Luego, contamos cuántos niños coinciden con el número de teléfono buscado:

```js
const matchingCount = foundKids?.length;
const matchingCount = 3;
```

Ahora validamos la condición que nos dice que si no hay resultados o hay más de uno, debemos devolver `null`. En este caso, como hay más de un resultado, devolvemos `null`.

```js
if (matchingCount === 1) {...}
if (3 === 1) {...}
if (false) {...} // No se cumple la condición

return null;
```

Finalmente, devolvemos `null` porque hay más de un resultado.

```js
return null;
```

Y eso es todo. Esa es la solución al reto 🎉
