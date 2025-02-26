# 起步

快速搭建一个 VitePress 站点。

1. 安装vitepress
   ```bash
   pnpm add vitepress -D
   ```
2. 创建docs
   > 创建docs目录,再创建index.md文件,在文件中写入
   ```md
   # hello world！
   ```
3. 配置package.json
   ```json
   {
     "scripts": {
       "dev": "vitepress dev docs",
       "build": "vitepress build docs",
       "serve": "vitepress serve docs"
     }
   }
   ```
4. 启动项目则可以访问页面
   ```bash
   pnpm run dev
   ```
