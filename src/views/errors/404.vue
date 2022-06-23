<script setup lang="ts">
import { useRouter } from 'vue-router'
import { NResult, NButton } from 'naive-ui'

const router = useRouter()
</script>

<template>
  <n-result status="404" title="找不到这个页面" description="生活总归带点荒谬">
    <template #footer>
      <n-button @click="router.replace({ name: 'home' })">返回首页</n-button>
    </template>
  </n-result>
</template>

<style scoped>

</style>
