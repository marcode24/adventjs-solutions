function executeCommands(commands) {
  const memory = [0, 0, 0, 0, 0, 0, 0, 0];
  let pointer = 0;

  const cpuCommands = {
    MOV: (value, prompter) => {
      const to = +prompter.replace('V', '');
      const from = +value.replace('V', '');
      memory[to] = Number.isNaN(+value) ? memory[from] : memory[to] = +value;
      ++pointer;
    },
    ADD: (to, valuePrompter) => {
      to = +to.replace('V', '');
      valuePrompter = +valuePrompter.replace('V', '');
      memory[to] = (memory[to] + memory[valuePrompter]) % 256;
      ++pointer;
    },
    DEC: (prompter) => {
      prompter = +prompter.replace('V', '');
      memory[prompter] = (((memory[prompter] - 1) % 256) + 256) % 256;
      ++pointer;
    },
    INC: (prompter) => {
      prompter = +prompter.replace('V', '');
      memory[prompter] = (memory[prompter] + 1) % 256;
      ++pointer;
    },
    JMP: (index) => {
      pointer = memory[0] ? +index : pointer + 1;
    },
  };

  while (pointer < commands.length) {
    // eslint-disable-next-line prefer-const
    let [command, ...args] = commands[pointer].split(' ');
    args = args[0].split(',');
    cpuCommands[command](...args);
  }
  return memory;
}

module.exports = executeCommands;
