function findInAgenda(agenda, phone) {
  const kidsList = agenda.split('\n');
  const foundKids = kidsList.filter((kid) => kid.includes(phone));

  const matchingCount = foundKids?.length;

  if (matchingCount === 1) {
    const [firstKid] = foundKids;
    const name = firstKid.split('<')[1].split('>')[0];
    const address = firstKid
      .split(' ')
      .slice(1, -1)
      .join(' ')
      .split('<')[0]
      .trim();

    return { name, address };
  }

  return null;
}

module.exports = findInAgenda;
