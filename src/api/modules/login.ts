import axios from '../index'

// 用户登录表单
interface LoginReqForm {
  username: string
  password: string
}
// 登录成功后返回的token
interface LoginResData {
  token: string
}
// 用户登录
export const login: any = (params: LoginReqForm) => {
  // 返回的数据格式可以和服务端约定
  return axios.post<LoginResData>('/user/login', params)
}

interface resData {
  appStartTime: string
  currConfig: string
  data: string
  msg: string
  requestId: string
  statusCode: number
  timestamp: number
}
// 获取验证码
export const getRandomImage: any = (checkKey: number) => {
  // 返回的数据格式可以和服务端约定
  return axios.get<resData>(`ttapi/admin/app/randomImage/${checkKey}`)
}

interface checkExistReqForm {
  username: string
  checkKey: number
  captcha: string
}

export const checkExist: any = (params: checkExistReqForm) => {
  return axios.get<resData>('/ttapi/admin/app/checkExist', params)
}

interface validCodeReqForm {
  mobile: string
}
export const validSmsCode: any = (
  params: validCodeReqForm,
  smsType: number
) => {
  // smsType验证码类型 100：登录 500：重置密码
  return axios.get<resData>(`/ttapi/admin/common/validCode/${smsType}`, params)
}

interface resetPwdReqForm {
  username: string //手机号
  captcha: string //图形验证码
  checkKey: string //获取图形验证码的时间戳
  validCode: string //短信验证码
  password: string //密码
  confirmPassword: string //确认密码
}

export const resetPassword: any = (params: resetPwdReqForm) => {
  return axios.post<resData>('/ttapi/admin/app/resetPwd', params)
}
