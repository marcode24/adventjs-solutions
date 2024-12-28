# Reto 25: Ejecuta-el-lenguaje-magico

¡Ya hemos repartido todos los regalos! De vuelta al taller, ya comienzan los preparativos para el año que viene.

Un elfo genio está creando un lenguaje de programación mágico 🪄, que ayudará a simplificar la entrega de regalos a los niños en 2025.

Los programas siempre empiezan con el valor 0 y el lenguaje es una cadena de texto donde cada caracter representa una instrucción:

- `>` Se mueve a la siguiente instrucción
- `+` Incrementa en 1 el valor actual
- `-` Decrementa en 1 el valor actual
- `[` y `]`: Bucle. Si el valor actual es 0, salta a la instrucción después de `]`. Si no es 0, vuelve a la instrucción después de `[`
- `{` y `}`: Condicional. Si el valor actual es 0, salta a la instrucción después de `}`. Si no es 0, sigue a la instrucción después de `{`

Tienes que devolver el valor del programa tras ejecutar todas las instrucciones.

```js
execute('+++') // 3
execute('+--') // -1
execute('>+++[-]') // 0
execute('>>>+{++}') // 3
execute('+{[-]+}+') // 2
execute('{+}{+}{+}') // 0
execute('------[+]++') // 2
execute('-[++{-}]+{++++}') // 5
```

**Nota: Un condicional puede tener un bucle dentro y también un bucle puede tener un condicional. Pero nunca se anidan dos bucles o dos condicionales.**

## Mi solución explicada

```js
function execute(code) {
  code = [...code];
  let value = 0;
  const actions = {
    '>': () => {},
    '+': () => value++,
    '-': () => value--,
    '[': () => {
      code = code.slice(code.indexOf(']') - 1);
    },
    ']': () => {
      value = 0;
    },
    '{': () => {
      if (value === 0) code = code.slice(code.indexOf('}'));
    },
    '}': () => {},
  };

  while (code.length) actions[code.shift()]();

  return value;
}
```

Que triste es llegar al último reto de la serie, no quiero que se acabe 😢. Pero bueno, vamos a lo que nos interesa.

Para poder resolver este reto, primero debemos entender cómo funciona el lenguaje mágico que nos han dado. En este lenguaje, cada caracter representa una instrucción que debemos seguir para obtener el resultado final.

Para facilitar el proceso, he creado un objeto `actions` que contiene las funciones que se ejecutarán según la instrucción que se encuentre en el código. Por ejemplo:

- Si encontramos un `+`, se ejecutará la función que incrementa el valor actual en 1.

```js
'+': () => value++,
```

- Si encontramos un `-`, se ejecutará la función que decrementa el valor actual en 1.

```js
'-': () => value--,
```

- Si encontramos un `>` o un `}`, no se ejecutará ninguna función, ya que no tienen ninguna acción asociada.

```js
'>': () => {},
'}': () => {},
```

- Si encontramos un `[`, se ejecutará la función que busca el índice de `]` y corta el código desde ese punto.

```js
'[': () => {
  code = code.slice(code.indexOf(']') - 1);
},
```

- Si encontramos un `]`, se ejecutará la función que reinicia el valor actual a 0.

```js
']': () => {
  value = 0;
},
```

- Si encontramos un `{`, se ejecutará la función que corta el código desde el índice de `}` si el valor actual es 0. Si no es 0, no se ejecutará ninguna función.

```js
'{': () => {
  if (value === 0) code = code.slice(code.indexOf('}'));
},
```

Una vez que hemos definido todas las funciones, solo nos queda recorrer el código y ejecutar las funciones correspondientes según la instrucción que encontremos. Para ello, utilizamos un bucle `while` que recorre el código hasta que no quede ninguna instrucción por ejecutar.

Para esto utilizamos el método `shift()` que elimina el primer elemento del array y lo devuelve. De esta forma, vamos ejecutando las funciones según la instrucción que se encuentre en el código. Cuando ya no quede ninguna instrucción por ejecutar, devolvemos el valor actual.

**Veamos un ejemplo sencillo:**

Supongamos que tenemos el código `'+-'`.

```js
execute('+--');
```

Primero, convertimos el código en un array de caracteres:

```js
code = ['+', '-', '-'];
```

Después, inicializamos el valor actual a 0:

```js
value = 0;
```

En cada iteración del bucle `while`, ejecutamos la función correspondiente según la instrucción que se encuentre en el código:

Como tenemos 3 instrucciones, el bucle se ejecutará 3 veces, a menos que se cumpla una condición que haga que el bucle se detenga antes.

En la primera iteración, encontramos un `+`, por lo que se ejecuta la función que incrementa el valor actual en 1:

```js
'+': () => value++,
```

El valor actual pasa a ser 1.

En la segunda iteración, encontramos un `-`, por lo que se ejecuta la función que decrementa el valor actual en 1:

```js
'-': () => value--,
```

El valor actual pasa a ser 0.

En la tercera iteración, encontramos otro `-`, por lo que se ejecuta la función que decrementa el valor actual en 1:

```js
'-': () => value--,
```

El valor actual pasa a ser -1.

Como ya no quedan más instrucciones por ejecutar, devolvemos el valor actual:

```js
// return value;
return -1;
```

Y así es como obtenemos el resultado final del programa.

**Ahora veamos un ejemplo más complejo:**

Supongamos que tenemos el código `'>>>+{++}'`.

```js
execute('>>>+{++}');
```

Primero, convertimos el código en un array de caracteres:

```js
code = ['>', '>', '>', '+', '{', '+', '+', '}'];
```

Después, inicializamos el valor actual a 0:

```js
value = 0;
```

En cada iteración del bucle `while`, ejecutamos la función correspondiente según la instrucción que se encuentre en el código:

En la primera iteración, encontramos un `>`, por lo que no se ejecuta ninguna función.

En la segunda iteración, encontramos otro `>`, por lo que no se ejecuta ninguna función.

En la tercera iteración, encontramos otro `>`, por lo que no se ejecuta ninguna función.

En la cuarta iteración, encontramos un `+`, por lo que se ejecuta la función que incrementa el valor actual en 1:

```js
'+': () => value++,
```

El valor actual pasa a ser 1.

En la quinta iteración, encontramos un `{`, por lo que se ejecuta la función que corta el código desde el índice de `}` si el valor actual es 0. Como el valor actual no es 0, no se ejecuta ninguna función.

En la sexta iteración, encontramos un `+`, por lo que se ejecuta la función que incrementa el valor actual en 1:

```js
'+': () => value++,
```

El valor actual pasa a ser 2.

En la séptima iteración, encontramos otro `+`, por lo que se ejecuta la función que incrementa el valor actual en 1:

```js
'+': () => value++,
```

El valor actual pasa a ser 3.

En la octava iteración, encontramos un `}`, por lo que no se ejecuta ninguna función.

Como ya no quedan más instrucciones por ejecutar, devolvemos el valor actual:

```js
// return value;
return 3;
```

Y así es como obtenemos el resultado final del programa 🎉

Espero que hayas disfrutado resolver este y los demás retos de la serie 2024. Ha sido un placer compartirlos contigo y espero que hayas aprendido algo nuevo en el proceso al igual que yo. 💪🎉

Agradezco este año a @midudev por la oportunidad de participar en esta serie de retos y por su dedicación y esfuerzo en la creación de los mismos. **¡Gracias por todo!** 🙏🎉

**Recuerda que la magia de la programación está en la práctica y en la constancia. ¡Sigue practicando y nunca dejes de aprender!** 🚀

**¡Nos vemos en el próximo año!** 🎅🎄🎁
