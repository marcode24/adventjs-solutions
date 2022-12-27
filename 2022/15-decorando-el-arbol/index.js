function decorateTree(base) {
  const decorators = {
    BB: 'B',
    RR: 'R',
    PP: 'P',
    PR: 'B',
    RP: 'B',
    RB: 'P',
    BR: 'P',
    PB: 'R',
    BP: 'R',
  };
  const splitedBase = base.split(' ');
  const arr = [];
  splitedBase.slice(0, -1).reduce((acc) => {
    acc = acc.slice(0, -1).map((_, i) => decorators[acc[i] + acc[i + 1]]);
    arr.unshift(acc.join(' '));
    return acc;
  }, splitedBase);
  return [...arr, base];
}

module.exports = decorateTree;
