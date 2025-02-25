import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus' // 引入组件库
import 'element-plus/dist/index.css' // 引入样式
import Layout from './com/Layout.vue'
import Login from './com/Login.vue'
import './css/el.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router }) {
    app.component('Login', Login)
    app.use(ElementPlus) // 注册组件库
    router.onBeforeRouteChange = async to => {
      return true
    }
  },
}
