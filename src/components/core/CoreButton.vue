<template>
  <button
    class="core-button rounded"
    @click="emit('on-click')"
    :disabled="disabled"
    :class="buttonWrapperClass"
  >
    {{ title }}
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

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
    const buttonWrapperClass = computed(() => {
      return {
        "button-disabled": props.disabled,
        "button-normal": !props.disabled,
      };
    });

    return { emit, buttonWrapperClass };
  },
  emits: ["on-click"],
});
</script>

<style scoped lang="scss">
.core-button {
  max-width: 412px;
  height: 64px;
  border: 0;
  color: #fff;
  font-size: 18px;

  @include media-down(lg) {
    max-width: 300px;
  }

  @include media-down(md) {
    max-width: 100%;
  }
}
</style>
