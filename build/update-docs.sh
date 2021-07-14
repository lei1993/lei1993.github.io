# Publish to GitHub Pages
# shellcheck disable=SC2164
cd .vuepress/dist
git init
git config --global user.name "lei1993"
git add -A
git commit -m '部署'
git push --force https://${TOKEN}@github.com/lei1993/lei1993.github.io.git master