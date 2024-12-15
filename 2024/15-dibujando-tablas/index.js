/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
function drawTable(data) {
  const headers = Object.keys(data[0]);

  const columnWidths = headers.map((header) =>
    Math.max(header.length, ...data.map((row) => `${row[header]}`.length)),
  );

  const separator = `+${columnWidths
    .map((width) => '-'.repeat(width + 2))
    .join('+')}+`;

  const headerRowFormatted = `| ${headers
    .map((header, i) => {
      const headerFormatted = header.charAt(0).toUpperCase() + header.slice(1);
      return headerFormatted.padEnd(columnWidths[i]);
    })
    .join(' | ')} |`;

  const rows = data.map(
    (row) =>
      `| ${headers
        .map((key, i) => `${row[key]}`.padEnd(columnWidths[i]))
        .join(' | ')} |`,
  );

  return [separator, headerRowFormatted, separator, ...rows, separator].join(
    '\n',
  );
}

module.exports = drawTable;
