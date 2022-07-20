<template>
  <el-form-item prop="username">
    <el-input v-model="form.username" placeholder="请输入手机号码"> </el-input>
  </el-form-item>
</template>

<script setup lang="ts">
import { toRaw } from 'vue'
import { objectParams } from '@/hooks/autoSetProps'

type Props = {
  loginForm: Record<string, any>
}

const props = defineProps<Props>()
const emit = defineEmits(['update:loginForm'])
const form = objectParams('loginForm', toRaw(props.loginForm), emit)
</script>
