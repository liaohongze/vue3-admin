import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse
} from 'axios'
import { ElMessage } from 'element-plus'

import { useUserStore } from '@/stores/user'

// 数据返回的接口
// 定义请求响应参数，不含data
interface Result {
  statusCode?: number
  ext?: object
  [propName: string]: any
}

// 请求响应参数，包含data
interface ResultData<T = any> extends Result {
  data?: T
}

interface IHeaders {
  [propName: string]: string
}

const URL: string = import.meta.env.VITE_BASE_API
enum RequestEnums {
  TIMEOUT = 60 * 1000,
  OVERDUE = 600, // 登录失效
  FAIL = 999, // 请求失败
  SUCCESS = 200 // 请求成功
}
const config = {
  // 默认地址
  baseURL: URL as string,
  // 设置超时时间
  timeout: RequestEnums.TIMEOUT as number,
  // 跨域时候允许携带凭证
  withCredentials: true,
  url: ''
}

class RequestHttp {
  // 定义成员变量并指定类型
  service: AxiosInstance
  public constructor(config: AxiosRequestConfig) {
    // 实例化axios
    this.service = axios.create(config)
    /**
     * 请求拦截器
     * 客户端发送请求 -> [请求拦截器] -> 服务器
     * token校验(JWT) : 接受服务器返回的token,存储到vuex/pinia/本地储存当中
     */

    this.service.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const headers: IHeaders = {}
        const url = String(config.url)

        if (
          url.includes('kpapi0.ckjr001.com/api/admin/ttapi/') ||
          url.includes('formalapi.ckjr001.com/api/admin/ttapi/')
        ) {
          // 抖音正式域名不一样，加个判断
          config.url = url.replace(
            import.meta.env.VITE_BASE_API,
            import.meta.env.VITE_TIKTOK_API
          )
        }

        // 数据分析请求头
        const { appId, userId, companyId } = useUserStore().appInfo
        if (appId) {
          const pathUrl = encodeURIComponent(window.location.pathname)

          headers['X-DMP'] = `
            u=${userId}&
            c=${companyId}&
            url=${pathUrl}&
            chl=admtp
          `
        }

        const token = localStorage.getItem('token') || ''
        if (token) {
          headers.Authorization = `Bearer ${token}`
        }

        return {
          ...config,
          headers: {
            ...headers,
            'X-Requested-Version': '20220825' // 抖店版本号
          }
        }
      },
      (error: AxiosError) => {
        // 请求报错
        Promise.reject(error)
      }
    )
    /**
     * 响应拦截器
     * 服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
     */

    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data } = response // 解构

        return data.data
      },
      (error: AxiosError) => {
        const { response } = error
        if (response) {
          this.handleCode(response.status, response.data)
        }
        if (!window.navigator.onLine) {
          ElMessage.error('网络连接失败') // 可以跳转到错误页面，也可以不做操作 // return router.replace({ // path: '/404' // });
        }
      }
    )
  }

  handleCode(code: number, data: any): void {
    ElMessage.error(data ? data.msg : '请求失败')
  }

  // 常用方法封装
  get<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.get(url, { params })
  }
  post<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.post(url, params)
  }
  put<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.put(url, params)
  }
  delete<T>(url: string, params?: object): Promise<ResultData<T>> {
    return this.service.delete(url, { params })
  }
}

// 导出一个实例对象
export default new RequestHttp(config)
