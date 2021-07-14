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
git push --force "https://${TOKEN}@github.com/wuxianqiang/vuepress-starter.git" "master:gh-pages"