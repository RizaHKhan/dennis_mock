<template>
  <input
    class="core-input rounded"
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CoreInput",
  props: {
    modelValue: {
      type: String,
      required: true,
      default: "",
    },
  },
  emits: ["update:modelValue"],
});
</script>

<style scoped lang="scss">
.core-input {
  max-width: 512px;
  height: 64px;
  border-width: 1px;
}
</style>
