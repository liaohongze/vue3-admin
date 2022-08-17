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
      class="w-600 mx-auto py-40 px-100 c-bg-white rounded-10 c-box-shadow4 sm:w-full"
    >
      <p class="text-center text-16 c-fc-333 font-semibold mb-30">重置密码</p>
      <div v-if="successStatus" class="flex flex-col items-center py-40"></div>

      <template v-else>
        <el-form :model="form" :rules="rules" class="modifyForm">
          <el-form-item prop="mobile">
            <el-input
              v-model="form.mobile"
              class="el-input"
              name="mobile"
              type="tel"
              placeholder="请输入手机号码"
              auto-complete="off"
            />
          </el-form-item>

          <el-form-item prop="captcha">
            <captchaInput
              v-model:captcha="captcha.captcha"
              v-model:checkKey="captcha.checkKey"
            />
          </el-form-item>

          <el-form-item prop="code">
            <smsCodeInput
              v-model="form.code"
              :sms-type="500"
              :params="{
                mobile: form.mobile,
                captcha: captcha.captcha,
                checkKey: captcha.checkKey
              }"
            />
          </el-form-item>

          <el-form-item prop="password">
            <passwordInput v-model="form.password" />
          </el-form-item>

          <el-form-item prop="confirmPwd">
            <passwordInput
              v-model="form.confirmPwd"
              placeholder="请输入确认密码"
            />
          </el-form-item>
        </el-form>
      </template>
    </div>

    <copyright />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { isPhoneNumber } from '@/utils/validate'
import copyright from './part/copyright.vue'

import passwordInput from '@/views/login/part/passwordInput.vue'
import captchaInput from '@/views/login/part/captchaInput.vue'
import smsCodeInput from '@/views/login/part/smsCodeInput.vue'

const successStatus = ref<boolean>(false)

const form = reactive({
  mobile: '',
  password: '',
  confirmPwd: '',
  code: ''
})

const validateTel = (rule: any, value: any, callback: any) => {
  if (!value || value.trim() == '') {
    callback(new Error('请输入手机号码'))
  } else {
    if (!isPhoneNumber(value)) {
      callback(new Error('请输入正确的手机号码'))
    }
    callback()
  }
}
const validatePassword = (rule: any, value: any, callback: any) => {
  if (!value || value.trim() == '') {
    callback(new Error('请输入密码'))
  } else {
    if (
      !/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[#@!~%^&*.])[a-zA-Z\d#@!~%^&*.]{6,}$/.test(
        value
      )
    ) {
      callback(
        new Error('请输入至少6位的数字、字母和特殊字符(#@!~%^&*)的组合密码')
      )
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (!value || value.trim() == '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== form.password) {
    callback(new Error('两次输入密码不一致!'))
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
const rules = reactive({
  mobile: [{ required: true, trigger: 'blur', validator: validateTel }],
  password: [{ required: true, trigger: 'blur', validator: validatePassword }],
  confirmPwd: [{ required: true, trigger: 'blur', validator: validatePass2 }],
  code: [{ required: true, trigger: 'blur', validator: validateCaptcha }]
})

const captcha = reactive({
  captcha: '',
  checkKey: null
})
</script>

<style lang="scss" scoped>
.modifyForm :deep(.el-input__wrapper) {
  padding-right: 0;
  padding-left: 0;
  box-shadow: none;
}

.modifyForm :deep(.el-input__wrapper .el-input__inner) {
  padding-bottom: 14px;
  font-size: 16px;
  border-bottom: 1px solid #dbdee0;
}

.modifyForm :deep(.el-form-item.is-error .el-input__inner) {
  border: 0;
  border-bottom: 1px solid #f56c6c;
}

.modifyForm :deep(.el-form-item) {
  margin-bottom: 27px;
}
</style>
