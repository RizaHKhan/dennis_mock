<template>
  <button @click="handleClick" :disabled="disabled">{{ title }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CoreButton",
  props: {
    title: {
      type: String,
      default: "Click",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const handleClick = () => {
      emit("on-click");
    };

    return { handleClick };
  },
  emits: ["on-click"],
});
</script>
