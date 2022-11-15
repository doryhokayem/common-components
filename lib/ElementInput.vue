<script setup lang="ts">
defineProps({
  clearable: {
    type: Boolean,
    default: false,
    required: false,
  },
  color: {
    type: String,
    default: "black",
    required: false,
  },
  dataCy: {
    type: String,
    default: "",
    required: false,
  },
  fontWeight: {
    type: String,
    default: "100",
    required: false,
  },
  label: {
    type: String,
    default: "",
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  labelProp: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
    required: false,
  },
  prepend: {
    type: String,
    default: "",
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  size: {
    type: String,
    default: "default",
    required: false,
  },
  controlsPosition: {
    type: String,
    default: "",
    required: false,
  },
  showPassword: {
    type: Boolean,
    default: false,
  },
  widthInput: {
    type: String,
    required: false,
    default: "100%",
  },
  labelWidth: {
    type: [String, Number],
    default: "200px",
  },
});
</script>
<template>
  <el-form-item
    class="element-input"
    :label="label"
    :prop="labelProp"
    :label-width="labelWidth"
  >
    <el-input
      v-bind="$attrs"
      :placeholder="placeholder"
      :modelValue="modelValue"
      :data-cy="dataCy"
      :min="min"
      :type="type"
      :max="max"
      :size="size"
      :clearable="clearable"
      :show-password="showPassword"
    >
      <template v-if="prepend" #prepend>{{ prepend }}</template>
    </el-input>
  </el-form-item>
</template>
<style lang="scss" scoped>
.element-input {
  .el-form-item__label {
    font-weight: v-bind(fontWeight) !important;
    color: v-bind(color) !important;
  }
  .el-input {
    width: v-bind(widthInput) !important;
  }
}
</style>
