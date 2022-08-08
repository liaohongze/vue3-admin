import { defineStore } from 'pinia'

interface IAppInfo {
  appId: string
  companyName: string
  dyNickname: string
  expireTime: string
  headimgurl: string
  userId: string
  username: string
  appType: number
  companyId: number
  companyVersion: number
  enableDyShop: number
  isMain: boolean | null
  isOpenAgent: number
  isOpenDy: number
  isOpenDyVideo: number
  isOpenKwai: number
  isOpenWxapp: number
  isQualificationUploaded: number
  isShopWindow: number
  isTeacherIntroduction: number
  tokenUserType: number
}

export const useUserStore = defineStore({
  id: 'user',

  state: () => ({
    appInfo: {} as IAppInfo, // 抖店公司数据
    toUrlPath: null, // 目标页
    leftMenu: null, // 左侧导航栏
    currentLink: null, // 在当前页需要引导
    menuList: [], // 左侧导航栏可下拉
    roleType: '', // 登录角色
    menuPermission: {}, // 菜单栏权限
    tiktokAccountType: '',
    tiktokUserId: '' // 抖店登录id
  }),

  actions: {}
})
