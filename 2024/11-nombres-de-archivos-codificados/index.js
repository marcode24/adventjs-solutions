function decodeFilename(filename) {
  const underscoreIndex = filename.indexOf('_');
  const lastDotIndex = filename.lastIndexOf('.');
  return filename.slice(underscoreIndex + 1, lastDotIndex);
}

module.exports = decodeFilename;
