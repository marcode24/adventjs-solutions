const compile = (code) => {
  let counter = 0;
  let i = 0;
  let stack = -1;

  const instructions = {
    '+': () => counter++,
    '-': () => counter--,
    '*': () => counter *= 2,
    '%': () => stack = i,
    '<': () => {
      if (stack !== -1) {
        i = stack;
        stack = -1;
      }
    },
    '¿': () => {
      if (counter <= 0) i = code.indexOf('?', i);
    },
    '?': () => {},
  };

  while (i < code.length) {
    const instruction = code[i];
    instructions[instruction]();
    i++;
  }

  return counter;
};

module.exports = compile;
