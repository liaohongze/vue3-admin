<template>
  <div
    class="relative w-full h-400 mt-15 mb-20 text-center rounded-10 c-box-shadow4"
  >
    <img
      src="@/assets/logo/wechatLogo.png"
      class="absolute top-0 right-0"
      width="150"
      alt=""
    />

    <span class="absolute contact-close pointer" @click="close"
      ><i class="el-icon-close text-24 c-fc-666"></i
    ></span>

    <p class="pt-60 mb-30 text-24 leading-30 c-fc-333 font-medium">联系我们</p>

    <div class="c-bd1-ccc w-160 h-160 mx-auto">
      <img
        :src="`${imgWebUrl}/assets/loginBanner/contactUs.jpg`"
        class="w-full"
        alt=""
      />
    </div>
    <div class="text-14 c-fc-333 mt-20 font-medium leading-20">
      请打开“<span class="c-fc-blue">企业微信</span>”，使用扫一扫
      <p>添加上面客服进行沟通</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { imgWebUrl } from '@/constants/global'

type Props = {
  contactUsVisible: boolean
}
defineProps<Props>()

const emit = defineEmits(['update:modelValue'])

const close = () => {
  emit('update:modelValue', 1)
}
</script>

<style lang="scss" scoped>
.contact-us::after {
  position: absolute;
  bottom: -20px;
  left: 307px;
  display: block;
  width: 0;
  height: 0;
  overflow: hidden;
  font-size: 0;
  line-height: 0;
  border: 10px;
  border-color: #fff transparent transparent;
  border-style: solid dashed dashed;
  content: '';
}
</style>
