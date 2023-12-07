# Reto 07: Las cajas en 3d

## Problema

Santa está experimentando con nuevos diseños de regalos y **necesita tu ayuda para visualizarlos en 3D.**

Tu tarea es escribir una función que, dado un tamaño n (entero), **genere un dibujo de un regalo en 3D** utilizando caracteres ASCII.

Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:

```js
drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

drawGift(5, '*')
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

drawGift(1, '^')
/*
#
*/
```

Importante: Nos han dicho que **siempre hay que dejar un salto de línea al final del dibujo.**

**Nota:** Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter `"`.

## Mi solución

```js
const drawGift = (size, symbol) => {
  const WRAPPER = '#';
  const SPACE = ' ';

  if (size <= 1) return `${WRAPPER}\n`;

  const top = [SPACE.repeat(size - 1) + WRAPPER.repeat(size)];
  const bottom = [`${WRAPPER.repeat(size)}`];
  const middle = `${WRAPPER.repeat(size)}${symbol.repeat(Math.abs(size - 2))}`
    + `${WRAPPER}\n`;
  for (let i = 1; i < size; i++) {
    const line = `${WRAPPER}${symbol.repeat(size - 2)}${WRAPPER}`
      + `${symbol.repeat(i - 1)}${WRAPPER}`;
    top.push(SPACE.repeat(size - i - 1) + line);
    bottom.push(line);
  }

  top.pop();
  bottom.pop();
  top.push(middle);
  bottom.reverse();
  return `${top.join('\n')}${bottom.join('\n')}\n`;
};
```

## Expliación de mi solución

En primer lugar, defino las constantes `WRAPPER` y `SPACE` para poder cambiarlas fácilmente en caso de que se necesite.

```js
const WRAPPER = '#';
const SPACE = ' ';
```

A continuación, compruebo si el tamaño es menor o igual a 1, en cuyo caso devuelvo el dibujo del regalo más pequeño posible.

```js
if (size <= 1) return `${WRAPPER}\n`;
```

Después, creo los arrays `top` y `bottom` que contendrán las líneas superiores e inferiores del regalo respectivamente. En el caso de `top`, la primera línea es la que contiene el lazo superior del regalo, por lo que la añado directamente al array. En el caso de `bottom`, la primera línea es la que contiene el lazo inferior del regalo, por lo que la añado al array al revés.

```js
const top = [SPACE.repeat(size - 1) + WRAPPER.repeat(size)];
const bottom = [`${WRAPPER.repeat(size)}`];
```

A continuación, creo la línea del medio del regalo, que es la que contiene el lazo central. Para ello, concateno el símbolo que se pasa como parámetro al tamaño del regalo menos 2, que es el número de caracteres que hay entre los dos lazos, y a continuación concateno el lazo central. Por último, añado un salto de línea.

```js
const middle = `${WRAPPER.repeat(size)}${symbol.repeat(Math.abs(size - 2))}`
  + `${WRAPPER}\n`;
```

A continuación, creo un bucle que itera desde 1 hasta el tamaño del regalo. En cada iteración, creo la línea correspondiente al lazo superior del regalo. Para ello, concateno el lazo superior, el símbolo que se pasa como parámetro repetido tantas veces como el tamaño del regalo menos 2, que es el número de caracteres que hay entre los dos lazos, y el lazo superior repetido tantas veces como el número de la iteración menos 1. Por último, añado la línea al array `top`.

```js
for (let i = 1; i < size; i++) {
  const line = `${WRAPPER}${symbol.repeat(size - 2)}${WRAPPER}`
    + `${symbol.repeat(i - 1)}${WRAPPER}`;
  top.push(SPACE.repeat(size - i - 1) + line);
}
```

A continuación, elimino la última línea del array `top` y la añado al array `bottom`.

```js
top.pop();
bottom.push(line);
```

A continuación, añado la línea del medio del regalo al array `top`.

```js
top.push(middle);
```

A continuación, invierto el orden de los elementos del array `bottom` y los añado al array `top`.

```js
bottom.reverse();
top.push(...bottom);
```

Por último, devuelvo el array `top` convertido en un string, añadiendo un salto de línea al final.

```js
return `${top.join('\n')}\n`;
```
