set -e
yarn build
cd build
git init
git add -A
git commit -m "deploy"
git push -f git@github.com:mzhaonanq/test-1-1.git master
cd -