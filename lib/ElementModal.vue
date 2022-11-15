<script setup lang="ts">
import { ref } from "vue";
import { ElMessageBox } from "element-plus";

const props = defineProps({
  closeBtn: {
    type: Boolean,
    default: false,
  },
  showClose: {
    type: Boolean,
    default: false,
  },
  draggable: {
    type: Boolean,
    default: false,
  },
  dialogVisible: {
    type: Boolean,
    required: true,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    required: false,
    default: "100%",
  },
  handleCloseMessage: {
    type: String,
    required: false,
    default: "",
  },
  submitBtn: {
    type: Boolean,
    default: true,
  },
  appendToBody: {
    type: Boolean,
    default: true,
  },
  closeOnClickModal: {
    type: Boolean,
    default: false,
  },
  modal: {
    type: Boolean,
    default: false,
  },
});
const submitButton = ref("Submit");
const emit = defineEmits(["submit", "close"]);
const submit = (data: Event) => emit("submit", data);
const close = () => emit("close", false);
const handleClose = (done: () => void) => {
  if (props.handleCloseMessage.length > 0) {
    ElMessageBox.confirm("Are you sure to close this dialog?")
      .then(() => {
        done();
        emit("close", false);
      })
      .catch(() => {
        // catch error
      });
  } else {
    emit("close", false);
    done();
  }
};
</script>

<template>
  <div>
    <el-dialog
      ref="el"
      :model-value="dialogVisible"
      :title="title"
      :width="width"
      :draggable="draggable"
      :before-close="handleClose"
      :show-close="showClose"
      :close-on-click-modal="closeOnClickModal"
      :append-to-body="appendToBody"
      :modal="modal"
    >
      <slot></slot>

      <!-- FOOTER -->
      <template #footer>
        <span class="dialog-footer">
          <el-button v-if="closeBtn" @click="close()">Cancel</el-button>
          <el-button type="primary" v-if="submitBtn" @click="submit">{{
            submitButton
          }}</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
