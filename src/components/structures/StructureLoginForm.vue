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
      <div
        class="forgot-password"
        :class="passwordHasErrors ? 'border-left' : ''"
      >
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
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "StructureLoginForm",
  components: {
    CoreInput,
    CoreButton,
  },
  setup() {
    const { userEmail, userPassword, v, handleBlur } = useLoginForm();

    const store = useStore();
    const { push } = useRouter();

    const isSubmitDisabled = computed(() => {
      return v.value.userEmail.$error || v.value.userPassword.$error;
    });

    const passwordHasErrors = computed(() => {
      return v.value.userPassword.$error;
    });

    const handleSubmit = () => {
      v.value.$touch();

      if (!v.value.userEmail.$error && !v.value.userPassword.$error) {
        // emit value to view page and route to new page
        store.commit("logIn", true);
        push({ name: "Home" });
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
      passwordHasErrors,
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

  @include media-down(md) {
    width: 100%;
  }

  a {
    margin: auto 0;

    @include media-down(md) {
      margin: auto;
    }
  }

  @include media-down(md) {
    margin-left: 0;
    margin-top: 10px;
  }
}
.border-left {
  border-left: 1px solid #d6d6d6;
  padding-left: 28px;

  @include media-down(md) {
    width: 100%;
    border-top: 1px solid #d6d6d6;
    border-left: 0;
    padding-left: 0;
    padding-top: 10px;
    text-align: center;
  }
}
</style>
