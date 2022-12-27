function fixLetter(letter) {
  return letter
    .trim()
    .replace(/([.,?!\s])(?=\1)/g, '')
    .replace(/\s+([.,?!])/g, '$1')
    .replace(/\b([.?!] \w)|(^\w)/g, (match) => match.toUpperCase())
    .replace(/^.*\w$/, (match) => `${match}.`)
    .replace(/santa claus/ig, 'Santa Claus');
}

module.exports = fixLetter;
