import { defineConfig } from 'vitepress'
import sidebar from "./sidebar/router";
import nav from "./nav";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "教猫吃鱼",
  description: "授人以鱼不如授人以渔",
  base: '/blog/',
  cleanUrls: true,
  ignoreDeadLinks: true,
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
        // dateStyle: 'full',
        // timeStyle: 'medium'
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
  }
})
