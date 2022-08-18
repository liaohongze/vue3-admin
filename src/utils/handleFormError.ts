import { ElMessage } from 'element-plus'

export default function (err: Record<string, any>, rules: object) {
  const keys = Object.keys(rules)
  for (let i = 0; i < keys.length; i++) {
    const errItem = err[keys[i]]
    if (errItem) {
      ElMessage.error(errItem[0].message)
      break
    }
  }
  return false
}
