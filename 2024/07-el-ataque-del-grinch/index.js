/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
function fixPackages(packages) {
  const regex = /\(([^()]+)\)/;
  while (regex.test(packages)) {
    packages = packages.replace(regex, (_, inner) =>
      [...inner].reverse().join(''),
    );
  }
  return packages;
}

module.exports = fixPackages;
