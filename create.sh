#!/bin/bash

# script for creating a new problem in a directory with the name of the problem
# and the files index.js, index.test.js, and README.md
echo '📁 Which directory do you want to create the solution? '
read directory

# validate if the directory exists, if not, create it
if [ ! -d "$directory" ]; then
  echo '📁 The directory does not exist, do you want to create it? (y/n)'
  read createDirectory
  if [ "$createDirectory" = "y" ]; then
    mkdir "$directory"
  else
    echo '❌ You must create the directory'
    exit 1
  fi
fi

cd "$directory"

echo '🎄 What is the name of the problem? '
read problem


directoryName=$(echo "$problem" | tr ' ' '-')
mkdir "$directoryName"

cd "$directoryName"

touch "index.js"
touch "index.test.js"
touch "README.md"

problemNumber="${problem:0:2}"

# primera letra en mayuscula
problemName="${problem:3}"
problemName="${problemName^}"

echo "# Reto $problemNumber: $problemName" >> README.md
echo "" >> README.md
echo "## Problema" >> README.md
echo "describe('$problemNumber => $problemName', () => {
  const testCases = [];

  it('should return a ', () => {});

  it.each(testCases)('', (testCase) => {});
});" >> index.test.js

echo '✅  The problem has been created'
