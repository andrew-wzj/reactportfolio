#!/bin/sh
# Publish the built site in dist/ to the gh-pages branch.
set -e
cd dist
touch .nojekyll
git init -q -b gh-pages
git add -A
git commit -q -m "Deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)"
git push -f -q "$(git -C .. remote get-url origin)" gh-pages
rm -rf .git
echo "Deployed to gh-pages"
