<template>
  <column-list :list="list"></column-list>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import ColumnList from '@/components/ColumnList.vue'
import { testData } from '../hooks/testData'





export default defineComponent({
  setup () {
    return {
      list: testData,
    }
  },
  components: {
    ColumnList
  }
})
</script>

