<script lang="ts" setup>
defineProps({
  borderRadius: {
    type: String,
    required: false,
    default: "15px",
  },
  icon: {
    type: String,
    required: false,
  },
  padding: {
    type: String,
    required: false,
    default: "10px",
  },
  width: {
    type: String,
    required: false,
    default: "auto",
  },
  maxHeightScroll: {
    type: String,
    required: false,
    default: "",
  },
  widthScroll: {
    type: String,
    required: false,
    default: "100%",
  },
  title: {
    type: String,
    required: false,
  },
});
</script>
<template>
  <el-scrollbar :max-height="maxHeightScroll" class="scrollbar">
    <el-card class="box-card">
      <template #header v-if="title">
        <div class="card-header">
          <div class="title">
            <i :class="icon" />
            <span>{{ title }}</span>
          </div>
        </div>
      </template>
      <slot></slot>
    </el-card>
  </el-scrollbar>
</template>

<style lang="scss" scoped>
.el-card__header {
  padding: v-bind(padding) !important;
}
.scrollbar {
  width: v-bind(widthScroll) !important;
}
.box-card {
  @extend %box-shadow;
  overflow: hidden;
  background-color: $color-white;
  border-radius: 15px;
  height: auto;
  margin: 20px;
  width: v-bind(width) !important;
  &:hover {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1), 2px 2px 10px rgba(0, 0, 0, 0.15);
  }
}

.el-card {
  border-radius: v-bind(borderRadius) !important;
}

.card-header {
  display: flex;
  justify-content: space-between;
  padding: 0;

  .title {
    margin-top: 0.2rem;
    color: black;

    span {
      font-size: 18px;
      margin-left: 1rem;
      font-weight: bold;
    }
  }

  .action {
    margin-right: 1rem;
  }
}
</style>
