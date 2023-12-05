// complejidad: 3
const decode = (message) => {
  let result = '';
  const stack = [];

  [...message].forEach((char) => {
    if (char === '(') {
      stack.push(result);
      result = '';
    } else if (char === ')') {
      result = `${stack.pop()}${result.split('').reverse().join('')}`;
    } else {
      result += char;
    }
  });

  return result;
};

// complejidad: 2
const decode2 = (message) => {
  const regex = /\(([^()]+)\)/;
  let match = message.match(regex);
  while (match) {
    const reversed = match[1].split('').reverse().join('');
    message = message.replace(match[0], reversed);
    match = message.match(regex);
  }
  return message;
};

module.exports = {
  decode,
  decode2,
};
