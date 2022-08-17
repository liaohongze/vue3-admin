<template>
  <div class="relative w-full">
    <el-input
      v-model="formProxy.modelValue"
      :type="visible ? 'text' : 'password'"
      :placeholder="placeholder"
    ></el-input>

    <span class="absolute right-0 cursor-pointer" @click="visible = !visible">
      <el-icon v-if="visible" :size="18"><View /></el-icon>
      <i v-else class="iconfont c-fs-14">&#xe694;</i>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { View } from '@element-plus/icons-vue'
import { baseParams } from '@/hooks/autoSetProps'

type Props = {
  modelValue: string
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  placeholder: '请输入密码'
})
const emits = defineEmits(['update:modelValue'])

const formProxy = baseParams(
  {
    modelValue: props.modelValue
  },
  props,
  emits
)

const visible = ref<boolean>(false)
</script>
