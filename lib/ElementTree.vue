<script lang="ts" setup>
import { ref } from "vue";
defineProps({
  treeData: {
    type: Array,
    required: true,
  },
  defaultProps: {
    type: Object,
    required: false,
    default: () => {
      return {
        children: "children",
        label: "label",
      };
    },
  },
});
const refTree = ref();
</script>
<template>
  <el-tree
    class="filter-tree"
    :data="treeData"
    :props="defaultProps"
    default-expand-all
    :expand-on-click-node="false"
    ref="refTree"
    empty-text=""
  />
</template>
