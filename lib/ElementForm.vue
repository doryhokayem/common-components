<script setup lang="ts">
import type { FormInstance } from "element-plus";
import { useForm } from "./composable/useForm";
import { ref } from "vue";
const { submitForm, resetForm } = useForm();
const elementFormRef = ref<FormInstance>();
const emit = defineEmits(["submitForm", "errorForm"]);

defineProps({
  buttonsForm: {
    type: Boolean,
    default: true,
    required: false,
  },
  buttonSubmit: {
    type: Boolean,
    default: true,
    required: false,
  },
  buttonSubmitLabel: {
    required: false,
  },
  buttonIsDisabled: {
    type: Boolean,
    default: false,
    required: false,
  },
  buttonSize: {
    type: String,
    default: "",
    required: false,
  },
  buttonLoading: {
    type: Boolean,
    default: false,
    required: false,
  },
  showResetButton: {
    type: Boolean,
    default: false,
    required: false,
  },
  labelReset: {
    type: String,
    default: "reset",
    required: false,
  },
  buttonPosition: {
    type: String,
    default: "flex-end",
    required: false,
  },
  formSize: {
    type: String,
    default: "large",
  },
  labelPosition: {
    type: String,
    default: "right",
  },
  buttonClass: {
    type: String,
    default: "",
  },
  buttonIcon: {
    type: String,
    default: "",
  },
  labelWidth: {
    type: [String, Number],
    default: "120px",
  },
  rules: {
    type: Object,
  },
  model: {
    type: Object,
  },
  callBack: {
    type: Function,
  },
});
</script>
<template>
  <el-form :model="model" :rules="rules" :label-width="labelWidth" ref="elementFormRef" :size="formSize"
    :label-position="labelPosition">
    <slot></slot>

    <div v-if="buttonsForm" class="button-position">
      <el-button v-if="buttonSubmit" :class="buttonClass" :icon="buttonIcon" :size="buttonSize" :loading="buttonLoading"
        data-cy="form-button-submit" :disabled="buttonIsDisabled" @click="submitForm(elementFormRef, emit)">{{
        buttonSubmitLabel }}
      </el-button>
      <el-button v-if="showResetButton" @click="resetForm(elementFormRef)">{{
      labelReset
      }}</el-button>
    </div>
  </el-form>
</template>

<style lang="scss" scoped>
.button-position {
  display: flex;
  justify-content: v-bind(buttonPosition);
}
</style>
