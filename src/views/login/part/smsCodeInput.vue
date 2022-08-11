<template>
  <div class="relative">
    <el-input
      :value="modelValue"
      autocomplete="off"
      maxlength="16"
      placeholder="请输入短信验证码"
      @input="emits('update:modelValue')"
    ></el-input>

    <el-button type="text" class="absolute" @click="smsCodeGet">{{
      codeStatusMsg
    }}</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { checkExist } from '@/api/modules/login'

type ValidateFn = {
  (mobile: string): boolean
}

type params = {
  mobile: string
}

type Props = {
  modelValue: string
  params?: params
  preValidator?: ValidateFn
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  params: () => ({ mobile: '' }),
  preValidator: function () {
    return true
  }
})

const emits = defineEmits(['update:modelValue'])

let interval: any = null
const leftSecond = 60
const codeStatusMsg = ref<string>('获取验证码')

const smsCodeGet = async () => {
  const { preValidator, params } = props
  // 是否正在倒计时
  if (interval) return

  if (preValidator && !preValidator(params.mobile)) return

  const res = await checkExist()

  codeStatusMsg.value = '发送中'

  // 重置，防止倒计时出错
  interval = null
}
</script>
