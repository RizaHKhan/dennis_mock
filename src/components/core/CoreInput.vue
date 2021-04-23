<template>
  <input
    class="core-input rounded"
    type="text"
    :value="modelValue"
    @input="emit('update:modelValue', $event.target.value)"
    @blur="handleBlur"
    :placeholder="placeholder"
  />

  <div class="errors" v-if="validationStatus.$error">
    <p v-for="$error in validationStatus.$errors" :key="$error.$property">
      {{ $error.$message }}
    </p>
  </div>
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
    placeholder: {
      type: String,
      default: "",
    },
    validationStatus: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const handleBlur = () => {
      emit("on-blur");
    };

    return { handleBlur, emit };
  },
  emits: ["update:modelValue", "on-blur"],
});
</script>

<style scoped lang="scss">
.core-input {
  max-width: 512px;
  height: 64px;
  border-width: 1px;
}
</style>
