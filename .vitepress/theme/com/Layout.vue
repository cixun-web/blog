<script setup>
import DefaultTheme from 'vitepress/theme'
import NotFound from '../NotFound.vue'
import UserInfo from './UserInfo.vue'

const { Layout } = DefaultTheme
</script>

<!-- 具体可配置的插槽 https://vitepress.dev/zh/guide/extending-default-theme -->
<template>
  <Layout>
    <template #nav-bar-content-after>
      <UserInfo />
      <el-backtop :right="100" :bottom="100" />
    </template>
    <template #not-found>
      <NotFound />
    </template>
  </Layout>
</template>
