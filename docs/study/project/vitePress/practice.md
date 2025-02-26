# vitepress

如何使用vitepress搭建一个自己的博客, 开发时，库的版本为 1.0.0-rc.12

## 初始化项目

[起步](./start.md)

## 扩展配置

1. 全局搜索

   ```bash
   # 安装扩展依赖
   pnpm add vitepress-plugin-pagefind
   ```

   ```js
   // .vitepress/config.js
   import { pagefindPlugin } from 'vitepress-plugin-pagefind'

   module.exports = {
     vite: {
       plugins: [pagefindPlugin()],
     },
   }
   ```

2. TS支持

   > 就是安装TS的依赖，然后配置tsconfig.json
   > 测试有没有配置成功，可以将上面的config.js改为config.ts看看有没有生效
   > 不使用上面的插件，vitepress现在也已经支持了全局搜索

   ```ts
   // .vitepress/config.mts
   import { pagefindPlugin } from 'vitepress-plugin-pagefind'

   export default defineConfig({
     themeConfig: {
       search: {
         provider: 'local',
       },
     },
   })
   ```

3. 最终配置

   ```ts
   import { defineConfig } from 'vitepress'
   import sidebar from './sidebar'
   import nav from './nav'

   export default defineConfig({
     // seo
     title: '教猫吃鱼',
     description: '授人以鱼不如授人以渔',
     head: [['link', { rel: 'icon', href: '/logo.png' }]],
     base: '/cx-blog/',
     themeConfig: {
       logo: '/logo.png',
       nav,
       sidebar,
       footer: {
         message: `备案号： <a target="_blank" href="https://beian.miit.gov.cn/"> 皖ICP备2023011112号-1</a>`,
         copyright: 'MIT License | Copyright © 刺勋',
       },
       search: {
         provider: 'local',
       },
       lastUpdated: {
         text: '最新更新',
         formatOptions: {
           dateStyle: 'full',
           timeStyle: 'medium',
         },
       },
       docFooter: {
         prev: '上一页',
         next: '下一页',
       },
     },
   })
   ```

## 主题配置

给的默认配置已经够用了，所以我并没有再自定义自己的主题。

## 开发页面

具体的开发页面的流程，可以参考写作部分的文档。

## 部署

将项目部署到gitee上，然后在gitee上配置pages服务，就可以访问了。

补充：vitepress已经支持搜索了所以不需要再下载插件了，具体的配置如下。

```ts
import { defineConfig } from 'vitepress'
import sidebar from './sidebar'
import nav from './nav'

export default defineConfig({
  // seo
  title: '教猫吃鱼',
  description: '授人与鱼不如授人与渔',
  base: '/cx-blog/',
  outDir: './dist',
  themeConfig: {
    logo: '/logo.png',
    nav,
    sidebar,
    footer: {
      message: `备案号： <a target="_blank" href="https://beian.miit.gov.cn/"> 皖ICP备2023011112号-1</a>`,
      copyright: 'MIT License | Copyright © 刺勋',
    },
    search: {
      provider: 'local',
    },
    lastUpdated: {
      text: '最新更新',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
  },
})
```
