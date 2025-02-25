# 路由

在.vitepress文件夹下的config.js中配置路由

```js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: ['/', '/page-a', ['/page-b', 'Explicit link text']],
  },
}
```

nav是顶部导航栏，sidebar是侧边栏，可以是数组，也可以是对象，对象的key是路径，value是标题

这种写法很简单，当然我们也可以将nav和sidebar封装起来从文件中导入，这样就不会显得那么臃肿了
