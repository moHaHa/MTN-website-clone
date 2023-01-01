<template>
  <div>
    <local-register-preview></local-register-preview>
  </div>
</template>

<script>
import registerPreview from "./components/register-preview/register-preview.vue";

export default {
  components: {
    "local-register-preview": registerPreview,
  },
};
</script>
