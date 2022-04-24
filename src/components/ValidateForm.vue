<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <!-- 提交区域 -->
    <div class="submit-area"
      @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit"
          class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from "@vue/runtime-core";
import mitt from 'mitt'
type ValidateFunc = () => boolean
type Emits<EventType extends string | symbol, T> = {
  on (type: EventType, handler: (arg: T) => void): void
  off (type: EventType, handler: (arg: T) => void): void
  emit (type: EventType, arg: T): void
}

// 存在多个定义变量时，& 符号连接Emits
// type Emitter = Emits<'a', number> & Emits<'b', string>;
type Emitter = Emits<'form-item-created', ValidateFunc>

export const emitter: Emitter = mitt()


export default defineComponent({
  emits: ['form-submit'],
  setup (props, context) {
    // 数组 存放一种函数 可以显示错误信息 并且返回input是否通过
    let funcArr: ValidateFunc[] = []
    // 表单提交事件
    const submitForm = () => {
      const result = funcArr.map(func => func()).every(result => result)
      context.emit('form-submit', result)
    }
    // 回调函数
    const callback = (func: ValidateFunc) => {
      funcArr.push(func)
    }
    emitter.on('form-item-created', callback)
    onUnmounted(() => {
      emitter.off('form-item-created', callback)
      funcArr = []
    })
    return {
      submitForm
    }
  }
})
</script>

<style>
</style>