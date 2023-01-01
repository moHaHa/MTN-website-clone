<template>
  <div>
    <local-home-preview></local-home-preview>
  </div>
</template>

<script>
import homePreview from "./components/home-preview/home-preview.vue";

export default {
  components: {
    "local-home-preview": homePreview,
  },
};
</script>
