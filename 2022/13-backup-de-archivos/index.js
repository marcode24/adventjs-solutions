function getFilesToBackup(lastBackup, changes) {
  return [...new Set(changes
    .filter((backup) => backup.at(1) > lastBackup)
    .map((backup) => backup.at(0))
    .sort((a, b) => a - b)),
  ];
}

module.exports = getFilesToBackup;
