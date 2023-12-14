function calculateTime(deliveries) {
  const deliveryLimit = 7 * 3600; // Límite de tiempo en segundos (7 horas)
  let totalSeconds = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const time of deliveries) {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    totalSeconds += hours * 3600 + minutes * 60 + seconds;
  }

  const remainingSeconds = deliveryLimit - totalSeconds;
  const pad = (value) => (value < 10 ? `0${value}` : `${value}`);
  const sign = remainingSeconds <= 0 ? '' : '-';
  const absRemainingSeconds = Math.abs(remainingSeconds);
  const resultHours = pad(Math.floor(absRemainingSeconds / 3600));
  const resultMinutes = pad(Math.floor((absRemainingSeconds % 3600) / 60));
  const resultSeconds = pad(absRemainingSeconds % 60);
  return `${sign}${resultHours}:${resultMinutes}`
    + `:${resultSeconds}`;
}

module.exports = calculateTime;
