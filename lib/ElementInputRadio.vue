<script setup lang="ts">
import { computed } from "vue";
const emit = defineEmits(["toggleRadio", "changeValue"]);

const props = defineProps({
  input: {
    type: Object,
    required: true,
  },
  isNameorCode: {
    type: String,
  },
  modelValue: {
    type: String,
  },
});
const toggleRadio = () => emit("toggleRadio", props.input.labelRadio);

const isDisabled = computed(() => {
  return props.input.labelRadio !== props.isNameorCode;
});

const changeValue = (event: Event) => {
  emit("changeValue", event, props.input.name);
};
</script>
<template>
  <div class="block-search-input">
    <el-radio
      class="search-radio"
      :label="input.labelRadio"
      :modelValue="isNameorCode"
      @click="toggleRadio"
      :data-cy="input.dataCyRadio"
    ></el-radio>
    <div class="search-input">
      <label>{{ input.label }}</label>
      <input
        v-bind="$attrs"
        :type="input.type"
        :value="modelValue"
        :name="input.name"
        @input="changeValue"
        :disabled="isDisabled"
        :data-cy="input.dataCy"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block-search-input {
  display: flex;
  align-items: center;
  margin: 1rem 0;
}
.search-input {
  width: 100%;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  input {
    height: 30px;
    width: 400px;
    outline-color: $color-input-outline;
    border: 1px solid $color-input-border;
    border-radius: 5px;
  }
  label {
    margin-bottom: 8px;
  }
}
</style>
