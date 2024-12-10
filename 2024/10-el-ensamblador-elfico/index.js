/* eslint-disable no-bitwise */
function compile(instructions) {
  const registers = {};
  let pointer = 0;

  const operations = {
    MOV: (arg1, arg2) => {
      registers[arg2] = registers[arg1] ?? arg1;
    },
    INC: (arg1) => {
      registers[arg1] = ~~registers[arg1] + 1;
    },
    DEC: (arg1) => {
      registers[arg1] = ~~registers[arg1] - 1;
    },
    JMP: (arg1, arg2) => !registers[arg1] && (pointer = arg2 - 1),
  };

  while (pointer < instructions.length) {
    const [command, arg1, arg2] = instructions[pointer].split(' ');
    operations[command]?.(arg1, arg2);

    pointer++;
  }

  return registers.A;
}

module.exports = compile;
