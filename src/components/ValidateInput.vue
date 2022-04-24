<template>
  <div class="validate-input-container pb-3">
    <input class="form-control"
      :class="{'is-invalid':inputRef.error}"
      :value="inputRef.val"
      @input="updateValue"
      @blur="validateInput"
      v-bind="$attrs">
    <span v-if="inputRef.error"
      class="invalid-feedback">{{inputRef.message}}</span>
  </div>
</template>

<script lang="ts">
// 表单规则验证组件

import { defineComponent, onMounted, PropType, reactive } from "@vue/runtime-core";
import { emitter } from './ValidateForm.vue'

// 邮箱验证规则
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
interface RuleProp {
  type: 'required' | 'email'
  message: string
}
export type RulesProp = RuleProp[]
export default defineComponent({
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
  // 禁用Attribute继承
  inheritAttrs: false,
  // -------setup
  setup (props, context) {
    // 表单响应式对象
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })
    // 文本框输入监听事件
    const updateValue = (e: KeyboardEvent) => {
      // 获取输入的值
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }
    // 表单验证逻辑
    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = (inputRef.val.trim() != '')
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
        return allPassed
      }
      return true
    }
    onMounted(() => {
      emitter.emit('form-item-created', validateInput)
    })
    return {
      inputRef, validateInput, updateValue
    }
  }

})
</script>

<style>
</style>