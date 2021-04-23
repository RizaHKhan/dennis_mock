<template>
  <div class="nav">
    <CoreLogo />
    <div class="nav__signup">
      <p class="hints">New user?</p>
      <a>Sign up</a>
    </div>
  </div>
  <router-view />
  <!-- empty div on purpose -->
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CoreLogo from "@/components/core/CoreLogo.vue";

export default defineComponent({
  name: "App",
  components: { CoreLogo },
});
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  padding: 27px 32px;

  @include media-down(md) {
    padding: 10px;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.nav {
  display: flex;
  justify-content: space-between;

  &__signup {
    display: flex;
    font-size: 16px;

    @include media-down(sm) {
      font-size: 12px;
    }

    p {
      margin-right: 5px;
    }

    a {
      color: black;
    }
  }
}
</style>
