<template>
  <input
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
