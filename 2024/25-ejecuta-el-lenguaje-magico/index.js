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

module.exports = execute;
