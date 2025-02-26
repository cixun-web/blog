# 文档仓库

## 仓库的搭建

### 初始化仓库

```bash
pnpm add -D vitepress
pnpm vitepress init
```

### 配置 github 的 action

```yaml
# 构建 VitePress 站点并将其部署到 GitHub Pages 的示例工作流程
# .github/workflows/deploy.yml
name: Deploy VitePress site to Pages

on:
  # 在针对 `main` 分支的推送上运行。如果你
  # 使用 `master` 分支作为默认分支，请将其更改为 `master`
  push:
    branches: [main]

  # 允许你从 Actions 选项卡手动运行此工作流程
  workflow_dispatch:

# 设置 GITHUB_TOKEN 的权限，以允许部署到 GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列
# 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # 构建工作
  build:
    runs-on: ubuntu-latest
    steps:
      - name: 检验文件
        uses: actions/checkout@v4
        with:
          fetch-depth: 0 # 如果未启用 lastUpdated，则不需要
      - name: 下载pnpm
        uses: pnpm/action-setup@v3 # 如果使用 pnpm，请取消此区域注释
        with:
          version: 9
      # - uses: oven-sh/setup-bun@v1 # 如果使用 Bun，请取消注释
#      - name: Setup Node
#        uses: actions/setup-node@v4
#        with:
#          node-version: 20
#          cache: npm # 或 pnpm / yarn
      - name: 下载Pages
        uses: actions/configure-pages@v4
      - name: 下载依赖
        run: pnpm install # 或 pnpm install / yarn install / bun install
      - name: 构建文件
        run: pnpm docs:build # 或 pnpm docs:build / yarn docs:build / bun run docs:build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./.vitepress/dist

  # 部署工作
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

注意：
1. 在config.mts中的base需要配置和github仓库名一致
2. 构建流程的dist目录确定是否和build生成的目录地址一致

### 使用 gitee 将代码同步给 github的仓库

使用gitee的镜像功能
