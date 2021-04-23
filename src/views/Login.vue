<template>
  <div class="login">
    <h1 class="login__title">Log in <span>with EdgeKit</span></h1>
    <StructureLoginForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StructureLoginForm from "@/components/structures/StructureLoginForm.vue";

export default defineComponent({
  name: "Login",
  components: {
    StructureLoginForm,
  },
});
</script>

<style lang="scss" scoped>
.login {
  margin: auto 0;

  &__title {
    font-size: 48px;
    margin-bottom: 40px;

    span {
      display: block;
    }
  }
}
</style>
