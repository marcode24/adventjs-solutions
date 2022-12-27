function checkPart(part) {
  return [...part.slice(0, part.length / 2)].every(
    (_, i) => part[i] === part[part.length - 1 - i]
      || part[i] === part[part.length - 2 - i]
      || part[i + 1] === part[part.length - 1 - i],
  );
}

module.exports = checkPart;
