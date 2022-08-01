<template>
  <el-dialog v-model="visible" :title="teachInfo.title" width="850px">
    <div
      :id="`content-div${id}`"
      v-loading="loading"
      v-html="teachInfo.content"
    ></div>

    <template #footer>
      <el-button :disabled="loading || downCount" @click="emit('close')">
        {{ closeText }}
        <!-- {{
          closeText == '关闭' ? '' : interCount == 6 ? '' : `（${interCount}s）`
        }} -->
      </el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, nextTick } from 'vue'
import Http from '@/api/index'

type Props = {
  id: string | number
  closeText?: string
}

const props = withDefaults(defineProps<Props>(), {
  id: 0,
  closeText: '关闭'
})

const emit = defineEmits(['close'])

const loading = ref<boolean>(false)
const visible = ref<boolean>(false)
const teachInfo = reactive({
  title: '',
  content: ''
})

const downCount = ref<number>(6)

const getTeachByAuthId = () => {
  loading.value = true
  const res = Http.get(`/personalModel/teachInfo/${props.id}`)
  console.log('res', res)
  const { title, content } = res
  teachInfo.title = title
  teachInfo.content = content
  nextTick(cssAdjust)
}

const cssAdjust = () => {
  const imgDoms = document.querySelector(`content-div${props.id} img`)

  console.log('imgDoms', imgDoms)
}

onMounted(() => {
  visible.value = true
  getTeachByAuthId()
})
</script>
