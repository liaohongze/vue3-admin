<template>
  <el-form-item prop="username">
    <el-input v-model="form.username" placeholder="请输入手机号码"> </el-input>
  </el-form-item>

  <el-form-item prop="captcha">
    <captchaInput
      v-model:captcha="form.captcha"
      v-model:checkKey="form.checkKey"
    />
  </el-form-item>
</template>

<script setup lang="ts">
import { objectParams } from '@/hooks/autoSetProps'

type Props = {
  loginForm: Record<string, any>
}

const props = defineProps<Props>()
const emits = defineEmits(['handleLogin'])

const form = objectParams(props.loginForm)
</script>
