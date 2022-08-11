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
