function countTime(leds) {
  leds = leds.join('').split('1');
  leds[0] += leds.splice(-1);
  return leds.sort((a, b) => b.length - a.length)[0].length * 7;
}

module.exports = countTime;
