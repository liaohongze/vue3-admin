<template>
  <div class="inline-block cursor-pointer">
    <div @click="showRuleDialog">
      <slot>
        <span
          v-if="showIcon"
          class="text-14 cursor-pointer ml-10"
          :class="iconCss ? iconCss : 'c-fc-blue'"
        >
          <i class="iconfont text-14">&#xe76a;</i>
        </span>
        <span :class="nameCss || 'c-fc-blue text-14'">{{ name }}</span>
      </slot>
    </div>

    <tutorialDialog
      v-if="dialogVisible"
      :id="id"
      @close="dialogVisible = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import tutorialDialog from '@/components/tutorialDialog.vue'

type Props = {
  id: string | number
  name: string
  from?: string
  showIcon?: boolean
  iconCss?: string
  nameCss?: string
}

const props = withDefaults(defineProps<Props>(), {
  id: 1,
  name: '',
  from: '',
  showIcon: true,
  iconCss: '',
  nameCss: ''
})

const baseUrl = 'https://help.ckjr001.com'

const fromMap: Record<string, string> = {
  tikTokContentCheck: '/problem/791/891',
  howToTiktok: '/problem/791/901',
  shareTitle: '/problem/791/936', // 分享课程标题规范
  Agent: '/problem/791/942' // 服务商教程
}

const dialogVisible = ref<boolean>(false)

const showRuleDialog = () => {
  let link = fromMap[props.from]
  if (link) {
    link = baseUrl + link
    window.open(link)
  } else {
    dialogVisible.value = true
  }
}
</script>
