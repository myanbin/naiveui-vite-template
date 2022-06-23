<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue'
import { NButton } from 'naive-ui'

defineProps<{ message: string }>()

const count = ref(0)
</script>

<template>
  <div>
    <h1>{{ message }}</h1>

    <n-button type="primary" @click="count++">计数器: {{ count }}</n-button>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
