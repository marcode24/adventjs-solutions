const adjustLights = (lights) => {
  const patron = ['🟢', '🔴'];
  let changes = 0;
  const lightsLength = lights.length;
  for (let i = 0; i < lightsLength; i++) {
    changes += lights[i] === patron[i % 2];
  }
  return Math.min(changes, lights.length - changes);
};

module.exports = adjustLights;
