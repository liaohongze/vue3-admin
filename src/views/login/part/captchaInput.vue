<template>
  <div class="flex items-end w-full">
    <el-input
      v-model="formProxy.captcha"
      class="flex-1"
      maxlength="14"
      placeholder="请输入验证码"
      @keyup.enter="emits('handleLogin')"
    ></el-input>

    <img
      v-loading="loading"
      :src="captchaImg"
      class="w-136 h-50 ml-20 cursor-pointer"
      alt="验证码"
      title="点击图片重新获取验证码"
      @click="captchaGet"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { baseParams } from '@/hooks/autoSetProps'

import { getRandomImage } from '@/api/modules/login'

type Props = {
  captcha: string
  checkKey: number | null
}

const props = defineProps<Props>()
const emits = defineEmits(['update:captcha', 'update:checkKey', 'handleLogin'])

const formProxy = baseParams(
  {
    captcha: props.captcha,
    checkKey: props.checkKey
  },
  props,
  emits
)

const loading = ref<boolean>(false)
// 验证码图片
const captchaImg = ref<string>('')
const captchaGet = async () => {
  const timekey = +new Date()

  loading.value = true
  const res = await getRandomImage(timekey)
  loading.value = false
  if (!res) return

  formProxy.checkKey = timekey
  captchaImg.value = res
}

onMounted(captchaGet)
</script>
