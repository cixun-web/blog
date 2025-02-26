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

const list = [
  {
    key: '/docs/code/HCJ',
    items: [
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
  }
]

export default list
