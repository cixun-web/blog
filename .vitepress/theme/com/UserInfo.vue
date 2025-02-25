<script setup>
import { useRoute, useRouter } from 'vitepress'
import { watch, ref } from 'vue'

const route = useRoute()
const router = useRouter()
const userInfo = ref(null)
const showLogin = ref(false)
const showMore = ref(false)

const moreList = ref([
  {
    title: '我的资料',
    click: () => {},
  },
  {
    title: '个人空间',
    click: () => {},
  },
  {
    title: '退出登录',
    click: () => {
      // window.localStorage.removeItem('token')
      userInfo.value = null
      showMore.value = false
    },
  },
])

const authCheck = () => {
  // 从本地获取token
  // const token = window.localStorage.getItem('token')
  const token = true
  if (!token) {
    // 判断页面鉴权方式
    const authType = false
    const noLoginPageList = ['/404', '/login', '/register']
    // 跳转到登录页面
    if (authType && !noLoginPageList.includes(route.path)) {
      router.go('/login')
      return
    }
  }
  userInfo.value = {
    userName: 'cx',
  }
}

const toLogin = () => {
  const toUrl = '/login?url=' + '1321123'
  router.go(toUrl)
}

watch(
  () => route.path,
  () => {
    authCheck()
  },
  {
    immediate: true,
  }
)
</script>

<template>
  <div class="user-info">
    <div v-if="userInfo" @click="showMore = !showMore" class="user-info-txt">
      {{ userInfo.userName }}
    </div>
    <div v-else @click="toLogin" class="user-info-txt">登 录</div>
    <div class="user-info-more" v-if="showMore">
      <div class="user-info-more-txt">UID: {{ userInfo.uid }}</div>
      <div
        class="user-info-more-item"
        v-for="(item, index) in moreList"
        :key="item.title + index"
        @click="item.click"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="user-info-login"></div>
  </div>
</template>

<style scoped>
.user-info {
  margin-left: 8px;
  position: relative;
}
.user-info-txt {
  cursor: pointer;
}
.user-info-more {
  position: absolute;
  right: 0;
  content: '';
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}
.user-info-more-txt,
.user-info-more-item {
  line-height: 36px;
  width: 100px;
  text-indent: 10px;
}
.user-info-more-item:hover {
  background-color: #305aff;
  color: #fff;
}
</style>
