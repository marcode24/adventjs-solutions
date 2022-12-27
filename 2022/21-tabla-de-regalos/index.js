function printTable(gifts) {
  const gTitle = 'Gift';
  const qTitle = 'Quantity';
  const [maxNameLength, maxQuantityLength] = [
    Math.max(gTitle.length, ...gifts
      .map(({ name }) => name.length)),
    Math.max(qTitle.length, ...gifts
      .map(({ quantity }) => `${quantity}`.length)),
  ];
  const topLine = `${'+'.repeat(maxNameLength + maxQuantityLength + 7)}`;
  // eslint-disable-next-line prefer-template
  const header = '| ' + gTitle + ' '.repeat(maxNameLength - gTitle.length)
    + ' | ' + qTitle
    + ' '.repeat(maxQuantityLength - qTitle.length) + ' |';
  // eslint-disable-next-line prefer-template
  const separator = '| ' + '-'.repeat(maxNameLength) + ' | '
  + '-'.repeat(maxQuantityLength) + ' |';
  const body = gifts
    .map(({ name, quantity }) => {
      const nameGift = `${name}${' '.repeat(maxNameLength - name.length)}`;
      // eslint-disable-next-line prefer-template
      const quantityGift = quantity
    + ' '.repeat(maxQuantityLength - quantity.toString().length);
      return `| ${nameGift} | ${quantityGift} |`;
    })
    .join('\n');
  const bottomLine = `${'*'.repeat(maxNameLength + maxQuantityLength + 7)}`;
  const table = `${topLine}\n${header}\n${separator}\n${body}\n${bottomLine}`;
  return table;
}

module.exports = printTable;
