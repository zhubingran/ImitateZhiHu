<template>
  <validate-form @form-submit="onFormSubmit">
    <div class="mb-3">
      <label class="form-label">邮箱地址</label>
      <!-- 表单验证 -->
      <validate-input :rules="emailRules"
        v-model="emailVal"
        placeholder="请输入邮箱地址"
        type="text"
        ref="inputRef"></validate-input>
    </div>
    <div class="mb-3">
      <label class="form-label">密码</label>
      <!-- 表单验证 -->
      <validate-input :rules="passwordRules"
        v-model="passwordVal"
        placeholder="请输入密码"
        type="password"></validate-input>
    </div>
    <template v-slot:submit>
      <span class="btn btn-danger">Submit</span>
    </template>
  </validate-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "@vue/runtime-core";
import { useRouter } from 'vue-router'
// 引入表单验证规则
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm.vue'

export default defineComponent({
  name: 'Login',
  components: {
    ValidateInput, ValidateForm
  },
  setup () {
    const router = useRouter()
    const inputRef = ref<any>()
    const emailVal = ref()
    const passwordVal = ref()
    // 表单验证规则
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    const passwordRules: RulesProp = [
      { type: 'required', message: '密码不能为空' }
    ]
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    // 表单提交后的结果处理
    const onFormSubmit = (result: boolean) => {
      if (result) {
        router.push({ name: 'column', params: { id: 1 } })
      }
    }
    return {
      emailRef,
      emailRules,
      emailVal,
      passwordVal,
      passwordRules,
      onFormSubmit,
      inputRef
    }
  }
})
</script>

<style>
</style>