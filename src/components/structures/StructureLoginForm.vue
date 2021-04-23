<template>
  <form class="form" @submit.prevent="handleSubmit">
    <CoreInput
      v-model="userEmail"
      placeholder="Email"
      @on-blur="handleBlur('userEmail')"
      :validationStatus="v.userEmail"
    />
    <div class="row">
      <CoreInput
        v-model="userPassword"
        placeholder="Password"
        @on-blur="handleBlur('userPassword')"
        :validationStatus="v.userPassword"
      />
      <div class="forgot-password">
        <a>Forgot Password?</a>
      </div>
    </div>
    <CoreButton :disabled="isSubmitDisabled" />
  </form>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import CoreInput from "../core/CoreInput.vue";
import CoreButton from "../core/CoreButton.vue";
import { useLoginForm } from "@/composables/login.ts";

export default defineComponent({
  name: "StructureLoginForm",
  components: {
    CoreInput,
    CoreButton,
  },
  setup() {
    const { userEmail, userPassword, v, handleBlur } = useLoginForm();

    const isSubmitDisabled = computed(() => {
      return v.value.userEmail.$error || v.value.userPassword.$error;
    });

    const handleSubmit = () => {
      v.value.$touch();

      if (!v.value.userEmail.$error && !v.value.userPassword.$error) {
        // emit value to view page and route to new page
        console.log("do something nice");
        return;
      }

      console.log("validation failed");
    };

    return {
      userEmail,
      userPassword,
      handleSubmit,
      handleBlur,
      v,
      isSubmitDisabled,
    };
  },
});
</script>

<style scoped lang="scss">
.form {
  display: grid;
  grid-gap: 24px;
  grid-auto-flow: row;
}

.row {
  display: flex;
  width: 100%;

  @include media-down(md) {
    flex-direction: column;
  }
}

.forgot-password {
  display: flex;
  font-size: 14px;
  width: 100px;
  height: 100%;
  text-justify: center;
  margin-left: 48px;

  a {
    margin: auto 0;
  }

  @include media-down(md) {
    margin-left: 0;
    margin-top: 10px;
  }
}
</style>
