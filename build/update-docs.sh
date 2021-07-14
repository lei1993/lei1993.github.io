# Prepare
# shellcheck disable=SC2164
cd docs
rm -rf .vuepress/dist

# Build
vuepress build

# Publish to GitHub Pages
cd .vuepress/dist
git init
git config --global user.name "lei1993"
git config --global user.email "1052356414@qq.com"
git add -A
git commit -m '部署'
git push -f ${TOKEN}git@github.com:lei1993/lei1993.github.io.git master