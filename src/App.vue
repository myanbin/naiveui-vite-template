<script setup lang="ts">
import { NConfigProvider, lightTheme } from 'naive-ui'
</script>

<template>
  <n-config-provider :theme="lightTheme">
    <router-view></router-view>
  </n-config-provider>
</template>

<style>

</style>
