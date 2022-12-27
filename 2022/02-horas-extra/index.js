function countHours(year, holidays) {
  return holidays
    .map((day) => new Date(`${day}/${year}`).getDay())
    .filter((date) => ![0, 6].includes(date)).length * 2;
}

module.exports = countHours;
