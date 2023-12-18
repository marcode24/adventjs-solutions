const maxGifts = (houses) => {
  let incl = 0;
  let excl = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const current of houses) {
    [incl, excl] = [excl + current, Math.max(incl, excl)];
  }

  return Math.max(incl, excl);
};

module.exports = maxGifts;
