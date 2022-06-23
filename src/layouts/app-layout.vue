<script setup lang="ts">
import { NLayout, NLayoutHeader, NLayoutSider, NLayoutContent, NCard } from 'naive-ui'
import MenuLayout from './menu-layout.vue'
import HeaderLayout from './header-layout.vue'
</script>

<template>
  <n-layout>
    <n-layout-header bordered class="header">
      <header-layout />
    </n-layout-header>
    <n-layout has-sider class="body">
      <n-layout-sider width="240" show-trigger="bar">
        <menu-layout />
      </n-layout-sider>
      <n-layout-content embedded content-style="padding: 16px;">
        <n-card>
          <router-view></router-view>
        </n-card>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style scoped>
.header {
  padding: 0 12px;
  height: 48px;
}
.body {
  height: calc(100vh - 48px);
}
</style>
