<script setup lang="ts">
defineProps({
  submitButton: {
    type: String,
    required: false,
    default: "Submit",
  },
  cancelButton: {
    type: String,
    required: false,
    default: "Cancel",
  },
  widthButton: {
    type: String,
    required: false,
  },
});
const emit = defineEmits(["submitForm", "closeForm"]);

const submitForm = (formData: Object) => emit("submitForm", formData);
const closeForm = (formData: Object) => emit("closeForm", formData);
</script>
<template>
  <span class="dialog-footer">
    <el-button data-cy="formfooter-elbutton-cancel_button" @click="closeForm">{{
      cancelButton
    }}</el-button>
    <el-button
      data-cy="formfooter-elbutton-submit_button"
      type="primary"
      @click="submitForm"
      >{{ submitButton }}</el-button
    >
  </span>
</template>

<style lang="scss" scoped>
.el-button {
  width: v-bind(widthButton) !important;
}
</style>
