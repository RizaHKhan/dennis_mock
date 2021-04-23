<template>
  <div class="home">
    <h1 class="heading-lg">Congrats! You are now logged in!</h1>
    <p>Refresh the page to clear store and logout!</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
});
</script>

<style lang="scss" scoped>
.home {
  margin: auto;
  text-align: center;
}
</style>
