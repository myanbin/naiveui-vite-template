<script setup lang="ts">
import { NCard, NForm, NFormItem, NInput, NSpace, NButton } from 'naive-ui'
</script>

<template>
  <div class="page">
    <n-card class="login" title="用户登录">
      <n-form>
        <n-form-item path="username" label="用户名">
          <n-input type="text" placeholder="请输入你的用户名" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item path="password" label="密码">
          <n-input type="password" placeholder="请输入你的密码" @keydown.enter.prevent />
        </n-form-item>
        <n-form-item>
          <n-space>
            <n-button type="primary">登录</n-button>
            <n-button>Long! Long! Cross thae line!</n-button>
          </n-space>
        </n-form-item>
      </n-form>
    </n-card>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
}
.login {
  width: 400px;
}
</style>
