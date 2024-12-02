function createFrame(names) {
  const maxLength = Math.max(...names.map((name) => name.length));
  const border = '*'.repeat(maxLength + 4);
  const framedNames = names.map((name) => `* ${name.padEnd(maxLength, ' ')} *`);

  return [border, ...framedNames, border].join('\n');
}

module.exports = createFrame;
