<template>
  <el-form-item prop="username">
    <el-input v-model="form.username" placeholder="请输入手机号码"> </el-input>
  </el-form-item>

  <el-form-item prop="password" class="relative">
    <el-input
      v-model="form.password"
      :type="passwordVisible ? 'text' : 'password'"
      placeholder="请输入密码"
    ></el-input>

    <span
      class="absolute right-0 cursor-pointer"
      @click="passwordVisible = !passwordVisible"
    >
      <el-icon v-if="passwordVisible" :size="18"><View /></el-icon>
      <i v-else class="iconfont c-fs-14">&#xe694;</i>
    </span>
  </el-form-item>

  <el-form-item prop="captcha">
    <captchaInput
      v-model:captcha="form.captcha"
      v-model:checkKey="form.checkKey"
      @handle-login="emits('handleLogin')"
    />
  </el-form-item>

  <div>
    <el-checkbox v-model="baseProxy.passwordRemember">记住密码</el-checkbox>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { View } from '@element-plus/icons-vue'
import { objectParams, baseParams } from '@/hooks/autoSetProps'

import captchaInput from '@/views/login/part/captchaInput.vue'

type Props = {
  loginForm: Record<string, any>
  passwordRemember: boolean
}

const props = defineProps<Props>()
const emits = defineEmits(['handleLogin'])

const form = objectParams(props.loginForm)
const baseProxy = baseParams(
  { passwordRemember: props.passwordRemember },
  props,
  emits
)

const passwordVisible = ref<boolean>(false)
</script>
