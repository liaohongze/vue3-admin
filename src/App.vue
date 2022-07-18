<template>
  <div id="app" class="h-screen overflow-y-hidden">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { provide } from 'vue'

provide('tableHeadStyle', {
  'font-family': 'PingFangSC-Semibold',
  backgroundColor: '#f5f7fa',
  color: '#333333'
})
provide('tableCss', 'c-width100 c-fc-333 family-PingFangSC-Regular c-fs-12')
provide('pageSizes', [10, 20, 30, 40])
</script>

<style lang="scss" scoped>
.mask-moudle {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: none;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.2;
}

.mask-show {
  display: block;
}
</style>
