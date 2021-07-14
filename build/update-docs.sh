# Publish to GitHub Pages
# shellcheck disable=SC2164
cd docs/.vuepress/dist
git init
git config  user.name "lei1993"
git config  user.email "1052356414@qq.com"
git add -A
git commit -m '部署'
git push --force "https://${TOKEN}github.com/lei1993/lei1993.github.io.git" "master:master"