<template>
  <div class="relative inline-block">
    <span class="c-fc-blue cursor-pointer" @click="visible = !visible">
      <slot></slot>
    </span>

    <div
      v-if="visible"
      class="absolute w-380 h-400 text-center bg-white rounded-10 c-box-shadow4"
      style="top: -410px; left: -324px"
    >
      <img
        src="@/assets/logo/wechatLogo.png"
        class="absolute top-0 right-0"
        width="150"
        alt=""
      />

      <el-icon
        :size="18"
        class="absolute contact-close cursor-pointer"
        @click="visible = false"
        ><Close
      /></el-icon>

      <p class="pt-60 mb-30 text-24 leading-30 c-fc-333 font-medium">
        联系我们
      </p>

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
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { imgWebUrl } from '@/constants/global'
import { Close } from '@element-plus/icons-vue'

const visible = ref<boolean>(false)
</script>

<style lang="scss" scoped>
.contact-close {
  right: 10px;
  top: 10px;
  z-index: 1;
}
.contact-close:hover {
  // hover的时候关闭按钮旋转一圈
  transform: rotate(180deg);
  -ms-transform: rotate(180deg); /* IE 9 */
  -moz-transform: rotate(180deg); /* Firefox */
  -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
  -o-transform: rotate(180deg); /* Opera */
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}
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
