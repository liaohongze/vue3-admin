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

  <el-form-item prop="captcha">
    <smsCodeInput
      v-model="form.validCode"
      :params="{
        username: loginForm.username,
        captcha: loginForm.captcha,
        checkKey: loginForm.checkKey
      }"
      @handle-login="emits('handleLogin')"
    />
  </el-form-item>
</template>

<script setup lang="ts">
import { objectParams } from '@/hooks/autoSetProps'

import captchaInput from '@/views/login/part/captchaInput.vue'
import smsCodeInput from '@/views/login/part/smsCodeInput.vue'

type Props = {
  loginForm: Record<string, any>
  passwordRemember: boolean
}

const props = defineProps<Props>()
const emits = defineEmits(['handleLogin'])

const form = objectParams(props.loginForm)
</script>
