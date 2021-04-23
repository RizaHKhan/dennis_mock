<template>
  <form class="form">
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

export default defineComponent({
  name: "StructureLoginForm",
  components: {
    CoreInput,
    CoreButton,
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
