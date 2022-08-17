<template>
  <div class="relative w-full">
    <el-input
      v-model="formProxy.modelValue"
      autocomplete="off"
      maxlength="16"
      placeholder="请输入短信验证码"
      class="w-full"
      @input="emits('update:modelValue', $event)"
      @keyup.enter="emits('handleLogin')"
    ></el-input>

    <el-button
      link
      type="primary"
      class="absolute top-1 right-0 text-16"
      :disable="Boolean(interval)"
      @click="smsCodeGet"
      >{{ codeStatusMsg }}</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { isPhoneNumber } from '@/utils/validate'
import { ElMessage } from 'element-plus'
import { checkExist, validSmsCode } from '@/api/modules/login'
import { baseParams } from '@/hooks/autoSetProps'

type params = {
  mobile?: string
  username?: string
  captcha: string
  checkKey: string | null
}

type Props = {
  modelValue: string
  smsType?: number
  params?: params
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  smsType: 100, // 验证码类型 100：登录 500：重置密码
  params: () => ({ mobile: '', username: '', captcha: '', checkKey: '' })
})

const emits = defineEmits(['update:modelValue', 'handleLogin'])

const formProxy = baseParams(
  {
    modelValue: props.modelValue
  },
  props,
  emits
)

let interval: any = null
let leftSecond = 60
const codeStatusMsg = ref<string>('获取验证码')

const smsCodeGet = async () => {
  // 是否正在倒计时
  if (interval) return

  if (!sendSmsValidator()) return

  const existRes = await checkExist(props.params)
  if (existRes === false) return

  codeStatusMsg.value = '发送中'

  const res = await validSmsCode(
    { ...props.params, mobile: props.params.username },
    props.smsType
  )

  // 重置，防止倒计时出错
  interval = null

  if (res === false) {
    codeStatusMsg.value = '获取验证码'
    return
  }

  interval = setInterval(countDown, 1000)
}

const countDown = () => {
  leftSecond -= 1
  codeStatusMsg.value = `${leftSecond}秒后重新获取`

  if (leftSecond === 0) {
    clearInterval(interval)
    interval = null
    codeStatusMsg.value = '获取验证码'
    leftSecond = 60
  }
}

// 获取短信验证码之前的校验
const sendSmsValidator = () => {
  const {
    params: { mobile, username, captcha }
  } = props

  const phone = mobile || username || ''

  if (!phone.length) {
    ElMessage.error('请输入手机号')
    return false
  }

  if (!isPhoneNumber(phone)) {
    ElMessage.error('手机号码不正确')
    return false
  }

  if (!captcha) {
    ElMessage.error('请输入图形验证码')
    return false
  }

  return true
}
</script>
