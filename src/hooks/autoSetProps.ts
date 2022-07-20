import { reactive } from 'vue'

export function objectParams(
  propName: string,
  obj: Record<string, any>,
  emit: any
) {
  return new Proxy(obj, {
    get: function (target, propKey: string) {
      return obj[propKey]
    },
    set: function (target, propKey, value, receive) {
      emit(`update:${propName}`, reactive({ ...target, [propKey]: value }))
      return Reflect.set(target, propKey, value, receive)
    }
  })
}
