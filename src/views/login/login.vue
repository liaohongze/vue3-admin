<template>
  <div
    class="flex flex-col justify-between h-full min-h-720 pb-50 overflow-hidden c-bg-F8F9FB"
  >
    <div class="pt-15 pl-30 sm:pl-0 sm:text-center">
      <a href="http://www.ckjr001.com" target="blank"
        ><img src="@/assets/logo/logo.svg" width="140" alt="logo"
      /></a>
    </div>

    <div
      class="flex w-1000 mx-auto rounded-10 overflow-hidden c-box-shadow3 sm:w-full sm:mt-20"
    >
      <div class="w-420 sm:hidden">
        <img
          :src="`${imgWebUrl}/assets/loginBanner/banner.jpg`"
          alt=""
          class="w-full h-fulll"
        />
      </div>

      <div class="flex-1 pt-20 pb-30 c-bg-white">
        <div class="mx-auto w-400 px-10 sm:w-80p">
          <div class="flex justify-center items-center pt-35 mb-50">
            <div
              v-for="(item, index) in loginTypeOptions"
              :key="index"
              class="cursor-pointer"
              :class="{
                'mr-30': index < loginTypeOptions.length - 1,
                'text-18 c-fc-sgray leading-28': loginType != item.type,
                'text-24 c-fc-333 leading-36 font-medium':
                  loginType == item.type
              }"
              @click="loginTypeChange(item)"
            >
              {{ item.title }}
            </div>
          </div>

          <el-form
            ref="loginFormRef"
            :model="loginForm"
            :rules="loginRules"
            label-position="left"
            class="loginForm"
          >
            <component
              :is="loginComponents[loginType]"
              :login-form="loginForm"
              @handle-login="handleLogin"
            />

            <el-button type="primary" class="w-full h-48 my-16 text-16"
              >登录</el-button
            >
          </el-form>

          <div class="flex items-center justify-between mb-10 text-14">
            <div class="flex items-center">
              <el-checkbox v-model="isCheckedService"></el-checkbox>
              <span class="ml-10">阅读并同意</span>
              <useRule
                :id="62"
                name="《服务协议》"
                name-css="text-14 c-fc-blue"
                :show-icon="false"
              />
            </div>

            <div class="flex">
              <span
                v-if="loginType === 'password'"
                class="mr-10 c-fc-blue cursor-pointer"
                @click="modifyPassword"
              >
                忘记密码
              </span>

              <contactUs>联系我们</contactUs>
            </div>
          </div>
        </div>
      </div>
    </div>

    <copyright />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, markRaw } from 'vue'
import type { FormInstance } from 'element-plus'

import { imgWebUrl } from '@/constants/global'

import contactUs from './part/contactUs.vue'
import password from './part/password.vue'
import code from './part/code.vue'
import copyright from './part/copyright.vue'
import useRule from '@/components/useRule.vue'

import { useRouter } from 'vue-router'
const router = useRouter()

const isCheckedService = ref<boolean>(true)

const loginComponents: Record<string, any> = reactive({
  password: markRaw(password),
  code: markRaw(code)
})

// 切换登录方式 开始
const loginType = ref<string>('password')
const loginTypeOptions = reactive([
  { type: 'password', title: '密码登录' },
  { type: 'code', title: '验证码登录' }
])

const loginTypeChange = (item: any) => {
  loginType.value = item.type

  // 清除一下已经输入的验证码
  loginForm.captcha = ''
}
// 切换登录方式 结束

const modifyPassword = () => {
  router.push({ name: 'modifyPassword' })
}

// 登录
const loginFormRef = ref<FormInstance>()

const loginForm = reactive({
  username: '',
  password: '',
  mobile: '',
  checkKey: 0, // 时间戳，获取图形验证码用
  captcha: '',
  // code: '',
  validCode: '' // 短信验证码
})

const validateUsername = (rule: any, value: any, callback: any) => {
  if (!value || value.trim() == '') {
    callback(new Error('请输入手机号'))
  } else {
    callback()
  }
}
const validatePassword = (rule: any, value: any, callback: any) => {
  if (!value || value.trim() == '') {
    callback(new Error('请输入密码'))
  } else {
    callback()
  }
}
const validateCaptcha = (rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error('请输入验证码'))
  } else {
    callback()
  }
}

const loginRules = reactive({
  username: [{ required: true, trigger: 'blur', validator: validateUsername }],
  password: [{ required: true, trigger: 'blur', validator: validatePassword }],
  captcha: [{ required: true, trigger: 'blur', validator: validateCaptcha }],
  mobile: [{ required: true, trigger: 'blur', message: '请输入手机号' }],
  validCode: [{ required: true, trigger: 'blur', validator: validateCaptcha }]
})

// const isAdminLogin = computed(
//   () => loginForm.username && loginForm.username.trim() === 'admin'
// )

const handleLogin = () => {
  console.log('')
}
</script>

<style lang="scss" scoped>
.loginForm :deep(.el-input__wrapper) {
  padding-right: 0;
  padding-left: 0;
  box-shadow: none;
}

.loginForm :deep(.el-input__wrapper .el-input__inner) {
  padding-bottom: 14px;
  font-size: 16px;
  border-bottom: 1px solid #dbdee0;
}

.loginForm :deep(.el-form-item.is-error .el-input__inner) {
  border: 0;
  border-bottom: 1px solid #f56c6c;
}

.loginForm :deep(.el-form-item) {
  margin-bottom: 27px;
}
</style>
