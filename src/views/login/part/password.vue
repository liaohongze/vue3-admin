<template>
  <el-form-item prop="username">
    <el-input v-model="form.username" placeholder="请输入手机号码"> </el-input>
  </el-form-item>

  <el-form-item prop="password" class="relative">
    <el-input
      v-model="form.password"
      :type="pwdVisible ? 'text' : 'password'"
      placeholder="请输入密码"
    ></el-input>

    <span
      class="absolute right-0 cursor-pointer"
      @click="pwdVisible = !pwdVisible"
    >
      <el-icon v-if="pwdVisible" :size="18"><View /></el-icon>
      <i v-else class="iconfont c-fs-14">&#xe694;</i>
    </span>
  </el-form-item>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { View } from '@element-plus/icons-vue'
import { objectParams } from '@/hooks/autoSetProps'

type Props = {
  loginForm: Record<string, any>
}

const props = defineProps<Props>()

const form = objectParams(props.loginForm)

const pwdVisible = ref<boolean>(false)

// const formProxy = baseParams(
//   {
//     username: props.username
//   },
//   props,
//   emit
// )
</script>
