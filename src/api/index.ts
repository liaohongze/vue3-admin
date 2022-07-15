import service from './service'
import { ElLoading, ElMessage } from 'element-plus'

function request(method: string, url: string, data = {}, loading = false) {
  const loadingInstance = loading ? ElLoading.service() : null

  return new Promise((resolve, reject) => {
    service({
      method,
      url,
      data
    })
      .then(res => {
        loadingInstance?.close()
        if (res.status === 200) {
          resolve(res.data)
        } else {
          ElMessage(res.data.message)
        }
      })
      .catch(error => {
        loadingInstance?.close()
        reject(error.message)
        ElMessage(error.message)
      })
  })
}

const Http = {
  get: (url: string, loading: boolean) => request('get', url, loading),
  post: (url: string, data: object, loading?: boolean) =>
    request('post', url, data, loading),
  put: (url: string, data: object, loading: boolean) =>
    request('put', url, data, loading),
  patch: (url: string, data: object, loading: boolean) =>
    request('patch', url, data, loading),
  delete: (url: string, data: object, loading: boolean) =>
    request('delete', url, data, loading)
}

export default Http
