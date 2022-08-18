// 数据类型 开始
export const isNumber = (val: any) => {
  return Object.prototype.toString.call(val) === '[object Number]'
}
export const isString = (val: any) => {
  return Object.prototype.toString.call(val) === '[object String]'
}
export const isBoolean = (val: any) => {
  return Object.prototype.toString.call(val) === '[object Boolean]'
}
export const isUndefined = (val: any) => {
  return Object.prototype.toString.call(val) === '[object Undefined]'
}
export const isNull = (val: any) => {
  return Object.prototype.toString.call(val) === '[object Null]'
}
export const isObject = (val: any) => {
  return Object.prototype.toString.call(val) === '[object Object]'
}
export const isArray = (val: any) => {
  return Object.prototype.toString.call(val) === '[object Array]'
}
export const isFunction = (val: any) => {
  return Object.prototype.toString.call(val) === '[object Function]'
}
export const isMath = (val: any) => {
  return Object.prototype.toString.call(val) === '[object Math]'
}
// 数据类型 结束

export const isPhoneNumber = (phone: string) => {
  const reg = /^(1\d{10})export const /
  return reg.test(phone)
}
