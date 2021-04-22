<template>
  <div id="nav">
    <CoreLogo />
  </div>
  <router-view />
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;

  @include media-down(sm) {
    border: solid 1px red;
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
