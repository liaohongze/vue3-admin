<template>
  <el-form-item prop="username">
    <el-input v-model="form.username" placeholder="请输入手机号码"> </el-input>
  </el-form-item>

  <el-form-item prop="password">
    <passwordInput v-model="form.password" />
  </el-form-item>

  <el-form-item prop="captcha">
    <captchaInput
      v-model:captcha="form.captcha"
      v-model:checkKey="form.checkKey"
      @handle-login="emits('handleLogin')"
    />
  </el-form-item>

  <div>
    <el-checkbox v-model="passwordRemember">记住密码</el-checkbox>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { objectParams } from '@/hooks/autoSetProps'

import passwordInput from '@/views/login/part/passwordInput.vue'
import captchaInput from '@/views/login/part/captchaInput.vue'

type Props = {
  loginForm: Record<string, any>
}

const props = defineProps<Props>()
const emits = defineEmits(['handleLogin'])

const form = objectParams(props.loginForm)

const passwordRemember = ref<boolean>(false)

defineExpose({ passwordRemember })
</script>
