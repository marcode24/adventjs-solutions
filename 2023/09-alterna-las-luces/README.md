# Reto 09: Alterna las luces

## Problema

Están encendiendo las **luces de Navidad** 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, **siempre deben estar alternadas.** Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), devuelva el **número mínimo** de luces que hay que cambiar para que estén los colores alternos.

```js
adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// -> 1 (cambias la cuarta luz a 🔴)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// -> 0 (ya están alternadas)

adjustLights(['🔴', '🔴', '🔴'])
// -> 1 (cambias la segunda luz a 🟢)
```

## Mi solución

```js
const adjustLights = (lights) => {
  const patron = ['🟢', '🔴'];
  let changes = 0;
  const lightsLength = lights.length;
  for (let i = 0; i < lightsLength; i++) {
    changes += lights[i] === patron[i % 2];
  }
  return Math.min(changes, lights.length - changes);
};
```

## Explicación de mi solución

1. Se crea un array con el patrón de luces alternadas.
2. Se crea una variable para contar los cambios de luces.
3. Se recorre el array de luces y se compara cada luz con el patrón de luces alternadas.
4. Si la luz es igual al patrón, se suma 1 a la variable de cambios.
5. Se retorna el mínimo entre los cambios y la longitud del array menos los cambios.
