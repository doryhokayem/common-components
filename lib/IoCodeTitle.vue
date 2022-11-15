<script lang="ts" setup>
import { reactive } from "vue";
const emit = defineEmits(["clickIO"]);
const props = defineProps({
  ioCode: {
    type: Object,
    required: false,
    default: () => {},
  },
  params: {
    type: Object,
    default: () => {},
    required: false,
  },
  label: {
    type: String,
    default: "",
    required: false,
  },
  colorLabel: {
    type: String,
    default: "black",
    required: false,
  },
});

const ioCodeData = reactive(props.ioCode || props.params.ioCode);
const toggleEntityViewer = (ioCode: Object) => {
  emit("clickIO", ioCode);
};
</script>
<template>
  <div>
    <span v-if="label.length" class="label">{{ label }}</span>
    <el-button type="primary" link @click="toggleEntityViewer(ioCodeData)">
      {{ ioCodeData.value }}
    </el-button>
  </div>
</template>

<style scoped>
.label {
  color: v-bind(colorLabel) !important;
  font-weight: bold;
  margin-right: 5px;
}
</style>
