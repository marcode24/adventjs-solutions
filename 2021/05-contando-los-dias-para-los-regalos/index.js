const daysToXmas = (date) => {
  const xmas = new Date(2021, 11, 25);
  const diff = xmas.getTime() - date.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

module.exports = daysToXmas;
