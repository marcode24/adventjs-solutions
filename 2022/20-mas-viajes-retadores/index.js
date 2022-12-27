function howManyReindeers(reindeerTypes, gifts) {
  reindeerTypes.sort((a, b) => b.weightCapacity - a.weightCapacity);
  return gifts.map(({ country, weight }) => {
    let maxWeightCountry = weight;
    const reindeersUsables = reindeerTypes
      .filter((reindeer) => reindeer.weightCapacity < maxWeightCountry);
    let maxCapacity = reindeersUsables
      .reduce((acc, curr) => acc += curr.weightCapacity, 0);
    return {
      country,
      reindeers: reindeersUsables.map(({ type, weightCapacity }) => {
        const quantity = Math.floor(maxWeightCountry / maxCapacity);
        maxCapacity -= weightCapacity;
        maxWeightCountry -= quantity * weightCapacity;
        return { type, num: quantity };
      }),
    };
  });
}

module.exports = howManyReindeers;
