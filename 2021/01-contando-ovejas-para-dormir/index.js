const contarOvejas = (ovejas) => ovejas
  .filter(
    (oveja) => oveja.color === 'rojo'
    && oveja.name.match(/[aA]/)
    && oveja.name.match(/[nN]/),
  );

module.exports = contarOvejas;
