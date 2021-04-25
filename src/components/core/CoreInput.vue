<template>
  <div class="input-container">
    <input
      class="input-container__core-input rounded"
      type="text"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      @blur="handleBlur"
      :class="inputWrapperClass"
      :placeholder="placeholder"
    />

    <div class="input-container__errors" :class="{ 'has-errors': hasErrors }">
      <p
        class="input-container__errors--text-error text-error"
        v-for="$error in validationStatus.$errors"
        :key="$error.$property"
      >
        {{ $error.$message }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
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

    const inputWrapperClass = computed(() => {
      return {
        "input-error": props.validationStatus.$errors.length,
        "input-success": !props.validationStatus.$errors.length,
      };
    });

    const hasErrors = computed(() => {
      return !!props.validationStatus.$errors.length;
    });

    return { handleBlur, emit, inputWrapperClass, hasErrors };
  },
  emits: ["update:modelValue", "on-blur"],
});
</script>

<style scoped lang="scss">
.input-container {
  display: grid;
  grid-template-columns: 412px 1fr;

  @include media-down(lg) {
    grid-template-columns: 300px 1fr;
  }

  @include media-down(md) {
    grid-template-columns: 1fr;
  }

  &__core-input {
    height: 64px;
    border-width: 1px;
    font-size: 18px;
    padding: 24px;

    &:focus {
      outline: none;
    }
  }

  &__errors {
    display: flex;
    padding-right: 28px;
    width: 0px;
    opacity: 0;
    height: 0px;
    overflow: hidden;
    transition: all 0.5s ease;

    &--text-error {
      text-align: left;
      font-size: 14px;
      margin: auto 0;
      padding-left: 48px;

      @include media-down(md) {
        margin-top: 10px;
        padding-left: 0;
      }
    }
  }
}

.has-errors {
  width: 275px;
  height: 60px;
  opacity: 1;

  @include media-down(md) {
    max-height: 50px;
  }
}
</style>
