#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

export FORCE_COLOR=1

echo '🎨 Formating and checking staged files before committing!'

npx lint-staged ||
(
  echo '❌ Ooops! Formating and checking process has failed!';
  false;
)

echo '✅ Formating and checking process has been successfully completed!';
