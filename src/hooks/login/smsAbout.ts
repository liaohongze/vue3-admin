import { reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { isPhoneNumber } from '@/utils/validate'

export default function smsAbout() {
  // 图形验证码
  const captcha = reactive({
    captcha: '',
    captchaKey: ''
  })

  const mobileValidator = (mobile: string) => {
    if (!mobile.length) {
      ElMessage.error('请输入手机号')
      return false
    }

    if (!isPhoneNumber(mobile)) {
      ElMessage.error('手机号码不正确')
      return false
    }

    return true
  }

  const sendSmsValidator = (mobile: string) => {
    return () => {
      if (!mobileValidator(mobile)) return false

      if (!captcha.captcha) {
        ElMessage.error('请输入图形验证码')
        return false
      }

      return true
    }
  }

  return { captcha, mobileValidator, sendSmsValidator }
}
