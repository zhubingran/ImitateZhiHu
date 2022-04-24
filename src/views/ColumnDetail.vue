<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center"
      v-if="column">
      <div class="col-3 text-center">
        <img :src="column.avatar"
          :alt="column.title"
          class="rounded-circle border w-100">
      </div>
      <div class="col-9">
        <h4>{{column.title}}</h4>
        <p class="text-muted">{{column.description}}</p>
      </div>
    </div>
    <post-list :list="list"></post-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useRoute } from 'vue-router'
import { testPosts } from '../hooks/testData'
import { testData } from '../hooks/testData'
import PostList from '@/components/PostList.vue'

export default defineComponent({
  components: {
    PostList
  },
  setup () {
    const route = useRoute()
    // +转换类型
    const currentId = +route.params.id
    // find 查找testData的每一项下的id属性 与currentId进行匹配 返回 匹配成功的值
    const column = testData.find(c => c.id === currentId)
    const list = testPosts.filter(post => post.columnId === currentId)
    return {
      route, column, list
    }
  }
})

</script>
