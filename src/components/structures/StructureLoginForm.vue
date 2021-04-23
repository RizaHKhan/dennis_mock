<template>
  <form class="form" @submit.prevent="handleSubmit">
    <div class="row">
      <CoreInput />
    </div>
    <div class="row">
      <CoreInput />
      <div class="forgot-password">
        <a>Forgot Password?</a>
      </div>
    </div>
    <div class="row">
      <CoreButton />
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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

    const handleSubmit = () => {
      v.value.$touch();

      if (!v.value.userEmail.$error && !v.value.userPassword.$error) {
        // emit value to view page and route to new page
        return;
      }

      console.log("validation failed");
    };

    return { userEmail, userPassword, handleSubmit };
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
}
</style>
