import frontEnd from './frontEnd'
import rearEnd from './rearEnd'
import project from './project'

/**
 * 学习笔记
 * 1. 前端
 * 2. 后端 python + go + node
 * 3. 实战笔记
 */

export default {
  '/docs/study': [
    {
      text: '前端',
      collapsed: true,
      link: '/docs/study/frontEnd/',
      items: [
        { text: 'vue', link: '/docs/study/frontEnd/vue/' },
        { text: 'react', link: '/docs/study/frontEnd/react/' },
        { text: '状态管理', link: '/docs/study/frontEnd/data' },
      ],
    },
    {
      text: '后端',
      collapsed: true,
      link: '/docs/study/rearEnd/',
      items: [
        { text: 'python', link: '/docs/study/rearEnd/python/' },
        { text: 'go', link: '/docs/study/rearEnd/go/' },
      ],
    },
    {
      text: '实战记录',
      collapsed: true,
      link: '/docs/study/project/',
      items: [
        { text: '毕业设计', link: '/docs/study/project/graduation/' },
        { text: 'vitepress', link: '/docs/study/project/vitepress/' },
        { text: 'pywebview', link: '/docs/study/project/pywebview/' },
      ],
    },
  ],
  ...frontEnd,
  ...rearEnd,
  ...project,
}
