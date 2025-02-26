const htmlItems = [
  {
    text: '简介',
    link: '/docs/code/HCJ/html/',
  },
  {
    text: '基础',
    link: '/docs/code/HCJ/html/base',
  },
  {
    text: '额外扩展',
    link: '/docs/code/HCJ/html/extra',
  },
  {
    text: '面试题',
    link: '/docs/code/HCJ/html/interview',
  },
]

const cssItems = []

const jsItems = [
  {
    text: '基础知识',
    link: '/docs/code/HCJ/js/',
  },
  {
    text: '数组扩展',
    link: '/docs/code/HCJ/js/数组扩展.md',
  },
  {
    text: '隐式转换',
    link: '/docs/code/HCJ/js/隐式转换.md',
  },
  {
    text: '类型判断',
    link: '/docs/code/HCJ/js/类型判断.md',
  },
  {
    text: '事件循环',
    link: '/docs/code/HCJ/js/事件循环.md',
  },
  {
    text: 'promise',
    link: '/docs/code/HCJ/js/promise',
  },
  {
    text: '刨析原型',
    link: '/docs/code/HCJ/js/刨析原型.md',
  },
]

const HCJ = [
  {
    text: 'HTML',
    collapsed: true,
    link: '/docs/code/HCJ/html',
    items: htmlItems
  },
  {
    text: 'css',
    collapsed: true,
    link: '/docs/code/HCJ/css',
    items: cssItems
  },
  {
    text: 'js',
    collapsed: true,
    link: '/docs/code/HCJ/js',
    items: jsItems
  }
]

const vue = [
  {
    text: '指令',
    link: '/docs/code/frame/vue/指令',
  },
  {
    text: '数据响应式',
    link: '/docs/code/frame/vue/数据响应式',
  },
  {
    text: '组件',
    link: '/docs/code/frame/vue/组件',
  },
  {
    text: 'setup',
    link: '/docs/code/frame/vue/数据响应式',
  },
  {
    text: '生命周期',
    link: '/docs/code/frame/vue/生命周期',
  },
  {
    text: '计算属性与侦听',
    link: '/docs/code/frame/vue/计算属性与侦听',
  },
]

const frame = [
  {
    text: 'vue',
    collapsed: true,
    link: '/docs/code/frame/vue',
    items: vue
  },
  {
    text: 'react',
    collapsed: true,
    link: '/docs/code/frame/react',
    items: []
  }
]

const list = [
  {
    key: '/docs/code/HCJ',
    items: HCJ
  },
  {
    key: '/docs/code/frame',
    items: frame
  }
]

export default list
