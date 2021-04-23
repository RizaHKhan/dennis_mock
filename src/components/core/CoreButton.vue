<template>
  <button class="core-button rounded" @click="handleClick" :disabled="disabled">
    {{ title }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CoreButton",
  props: {
    title: {
      type: String,
      default: "Log In",
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

<style scoped lang="scss">
.core-button {
  max-width: 512px;
  height: 64px;
  border: 0;
  color: #fff;
  font-size: 18px;
}
</style>
