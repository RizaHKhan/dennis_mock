<template>
  <img
    class="logo"
    :src="require(`@/assets/${logo}`)"
    :style="{ height, width }"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CoreLogo",
  props: {
    logo: {
      type: String,
      default: "logo.svg",
    },
    height: {
      type: String,
      default: "22px",
    },
    width: {
      type: String,
      default: "32px",
    },
  },
});
</script>
