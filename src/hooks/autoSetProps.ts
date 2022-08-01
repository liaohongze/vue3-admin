import { toRaw } from 'vue'

export function objectParams(reactiveObj: Record<string, any>) {
  const obj = toRaw(reactiveObj)
  return new Proxy(obj, {
    get: function (target, propKey: string) {
      return reactiveObj[propKey]
    },
    set: function (target, propKey: string, value, receive) {
      reactiveObj[propKey] = value
      return Reflect.set(target, propKey, value, receive)
    }
  })
}

export function baseParams(obj: Record<string, any>, props: any, emit: any) {
  return new Proxy(obj, {
    get: function (target, propKey: string) {
      return props[propKey]
    },
    set: function (target, propKey: string, value, receive) {
      emit(`update:${propKey}`, value)
      return Reflect.set(target, propKey, value, receive)
    }
  })
}
