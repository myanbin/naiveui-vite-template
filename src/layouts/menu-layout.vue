<script setup lang="ts">
import { h } from 'vue'
import { RouterLink } from 'vue-router'
import { NMenu, MenuOption } from 'naive-ui'

const menuOptions: MenuOption[] = [
  {
    label: () => h(
      RouterLink,
      { to: { name: 'home' } },
      { default: () => 'Home' }
    ),
    key: 'home-page'
  },
  {
    label: () => h(
      RouterLink,
      { to: { name: 'help' } },
      { default: () => 'Help' }
    ),
    key: 'help-page'
  }
]
</script>

<template>
  <n-menu :options="menuOptions" />
</template>

<style scoped>

</style>
