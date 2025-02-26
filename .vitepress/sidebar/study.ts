const rearEndPython = [
    {
      text: '上一级',
      link: '/docs/study/rearEnd/',
    },
    {
      text: '简介',
      link: '/docs/study/rearEnd/python/',
    },
    {
      text: '基础',
      link: '/docs/study/rearEnd/python/base',
    },
    {
      text: '高级',
      link: '/docs/study/rearEnd/python/advanced',
    },
    {
      text: '函数',
      link: '/docs/study/rearEnd/python/func',
    },
    {
      text: '文件',
      link: '/docs/study/rearEnd/python/file',
    },
    {
      text: '异常捕获',
      link: '/docs/study/rearEnd/python/catch',
    },
  ]
const rearEndGo = [
  {
    text: '上一级',
    link: '/docs/study/rearEnd/',
  },
  {
    text: '简介',
    link: '/docs/study/rearEnd/go/',
  },
  {
    text: '基础',
    link: '/docs/study/rearEnd/go/base',
  },
  {
    text: '开发环境',
    link: '/docs/study/rearEnd/go/开发环境',
  },
  {
    text: '函数',
    link: '/docs/study/rearEnd/go/func',
  },
  {
    text: '文件',
    link: '/docs/study/rearEnd/go/file',
  },
  {
    text: '异常捕获',
    link: '/docs/study/rearEnd/go/catch',
  },
]

const rearEnd = [
  {
    key: '/docs/study/rearEnd/python',
    items: rearEndPython
  },
  {
    key: '/docs/study/rearEnd/go',
    items: rearEndGo
  }
]

const vitePress = [
    {
      text: '上一级',
      link: '/docs/study/project/',
    },
    {
      text: '简介',
      link: '/docs/study/project/vitePress/',
    },
    {
      text: '快速入门',
      collapsed: true,
      items: [
        {
          text: '起步',
          link: '/docs/study/project/vitePress/start',
        },
        {
          text: '路由',
          link: '/docs/study/project/vitePress/router',
        },
        {
          text: '配置',
          link: '/docs/study/project/vitePress/config',
        },
        {
          text: '部署',
          link: '/docs/study/project/vitePress/deploy',
        },
      ],
    },
    {
      text: '写作',
      link: '/docs/study/project/vitePress/writing',
    },
    {
      text: '主题',
      link: '/docs/study/project/vitePress/theme',
    },
    {
      text: '实战',
      link: '/docs/study/project/vitePress/practice',
    },
  ]

const graduation = [
  {
    text: '上一级',
    link: '/docs/study/project/',
  },
  {
    text: '环境配置',
    link: '/docs/study/project/graduation/environment/',
  },
  {
    text: 'HTML+CSS+JS',
    collapsed: true,
    items: [
      {
        text: 'HTML',
        link: '/docs/study/project/graduation/base/html',
      },
      {
        text: 'CSS',
        link: '/docs/study/project/graduation/base/css',
      },
      {
        text: 'JS',
        link: '/docs/study/project/graduation/base/js',
      },
    ],
  },
  {
    text: 'Vue',
    link: '/docs/study/project/graduation/frame/vue',
  },
  {
    text: '后端搭建',
    link: '/docs/study/project/graduation/frame/node',
  },
  {
    text: '前后端通信',
    link: '/docs/study/project/graduation/practice',
  },
  {
    text: '小程序开发',
    link: '/docs/study/project/graduation/uniapp',
  },
]

const project = [
  {
    key: '/docs/study/project/vitePress',
    items: vitePress
  },
  {
    key: '/docs/study/project/graduation',
    items: graduation
  }
]

const list = [
  {
    key: '/docs/study',
    items: [
      {
        text: '前端',
        collapsed: true,
        link: '/docs/study/frontEnd/',
        items: [
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
          { text: 'vitePress', link: '/docs/study/project/vitePress/' },
          { text: 'pywebview', link: '/docs/study/project/pywebview/' },
        ],
      },
    ]
  },
  ...rearEnd,
  ...project
]

export default list
