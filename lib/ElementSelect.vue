<script setup lang="ts">
defineProps({
  dataCy: {
    type: String,
    default: "",
    required: true,
  },
  label: {
    type: String,
    default: "",
    required: false,
  },
  labelProp: {
    type: String,
    default: "",
    required: false,
  },
  modelValue: {
    type: [Array, String],
    required: true,
  },
  multiple: {
    type: Boolean,
    default: false,
    required: false,
  },
  options: {
    type: Object,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
    required: false,
  },
  noDataText: {
    type: String,
    default: "",
    required: false,
  },
  noMatchText: {
    type: String,
    default: "",
    required: false,
  },
  width: {
    type: String,
    default: "200px",
    required: false,
  },
  size: {
    type: String,
    default: "default",
    required: false,
  },
  valueKey: {
    type: String,
    default: "value",
    required: false,
  },
  labelWidth: {
    type: [String, Number],
    default: "120px",
  },
});
</script>
<template>
  <el-form-item class="element-select" :label="label" :prop="labelProp">
    <el-select
      v-bind="$attrs"
      :modelValue="modelValue"
      :multiple="multiple"
      filterable
      :size="size"
      default-first-option
      :value-key="valueKey"
      :reserve-keyword="false"
      :no-data-text="noDataText"
      :no-match-text="noMatchText"
      :placeholder="placeholder"
      :data-cy="dataCy"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.value"
        :value="item[valueKey]"
      />
    </el-select>
  </el-form-item>
</template>

<style lang="scss">
.element-select {
  .el-select {
    width: v-bind(width) !important;
  }
  .el-form-item__label {
    width: v-bind(labelWidth) !important;
  }
}
</style>
