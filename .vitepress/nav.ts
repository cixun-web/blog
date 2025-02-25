// @ts-ignore
// const isProduction = process.env.NODE_ENV === 'production'
// const baseUrl = isProduction ? 'http://www.cixun.vip' : 'http://test.cixun.vip'

export default [
  {
    text: '工具',
    link: '/docs/tools/',
  },
  {
    text: '考公',
    items: [
      { text: '行测', link: '/docs/kg/xc/判断推理' },
      { text: '申论', link: '/docs/kg/sl/概括类' },
      { text: '计算机', link: '/docs/kg/computer/基础知识' },
      { text: '综合应用', link: '/docs/kg/zy/B/概念分析' },
    ],
  },
  {
    text: '学习',
    items: [
      { text: '前端', link: '/docs/study/frontEnd/' },
      { text: '后端', link: '/docs/study/rearEnd/' },
      { text: '实战', link: '/docs/study/project/' },
    ],
  },
  {
    text: '🗡offer',
    items: [
      { text: '八股文', link: '/docs/offer/base/html' },
      { text: '提升', link: '/docs/offer/rearEnd/' },
      { text: '算法', link: '/docs/offer/project/' },
    ],
  },
  // {
  //   text: '个人项目',
  //   items: [{ text: '后台管理', link: `${baseUrl}/cx-admin`, target: '_self' }],
  // },
]
