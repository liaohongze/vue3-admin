<template>
  <div
    class="flex flex-col justify-between h-full min-h-720 pb-50 overflow-hidden"
  >
    <div class="pt-15 pl-30 sm:pl-0 sm:text-center">
      <a href="http://www.ckjr001.com" target="blank"
        ><img src="@/assets/logo/logo.svg" width="140" alt="logo"
      /></a>
    </div>

    <div
      class="flex flex-row w-1000 mx-auto rounded-10 overflow-hidden c-box-shadow3 sm:w-full sm:mt-20"
    >
      <div class="w-420 sm:hidden">
        <img
          v-for="(item, index) in loginBanner"
          :key="index"
          alt=""
          class="w-full h-fulll"
          :src="item.imgUrl"
        />
      </div>

      <div class="mx-auto w-400 px-10 sm:w-80p">
        <ContactUs v-if="contactUsVisible" v-model="contactUsVisible" />

        <template v-else>
          <div class="flex flex-row justify-center items-center pt-35 mb50">
            <div
              v-for="(item, index) in loginTypeOptions"
              :key="index"
              class="cursor-pointer"
              :class="{
                'mr-30': index < loginTypeOptions.length - 1,
                'text-18 c-fc-sgray leading-28': loginType != item.type,
                'text-24 c-fc-333 leading-36 font-medium':
                  loginType == item.type
              }"
              @click="loginTypeChange(item)"
            >
              {{ item.title }}
            </div>
          </div>
        </template>

        <div class="flex flex-row items-center justify-between mb-10 text-14">
          <div class="flex flex-row items-center">
            <span class="ml-5 text-14">阅读并同意</span>
          </div>

          <div class="flex flex-row">
            <div class="text-center c-fc-666">
              <span
                v-if="loginType === 'password'"
                class="c-fc-blue cursor-pointer"
                @click="modifyPassword"
              >
                忘记密码
              </span>
            </div>

            <span
              class="c-fc-blue cursor-pointer"
              @click="contactUsVisible = !contactUsVisible"
              >联系我们</span
            >
          </div>
        </div>
      </div>
    </div>

    <div class="text-center c-fc-sgray text-14">
      <p class="pb-23">-创客匠人 让商业更智能-</p>
      <p>创客匠人版权所有 闽ICP备16007622号-1</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

import { imgWebUrl } from '@/constants/global'
import ContactUs from './part/contactUs.vue'

const loginBanner = reactive([
  {
    imgUrl: `${imgWebUrl}/assets/loginBanner/banner.jpg`,
    value: 1
  }
])

// const loadCaptcha = () => {

// }

const loginType = ref<string>('password')
const loginTypeOptions = reactive([
  { type: 'password', title: '密码登录' },
  { type: 'code', title: '验证码登录' }
])

const loginTypeChange = item => {
  // loadCaptcha()
  loginType.value = item.type
}

const modifyPassword = () => {
  router.push({ name: 'modifyPassword' })
}

const contactUsVisible = ref<boolean>(false)
</script>
