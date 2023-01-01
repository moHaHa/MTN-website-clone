<template>
  <div>
    <local-task-preview></local-task-preview>
  </div>
</template>

<script>
import taskPreview from "./components/task-preview/task-preview.vue";

export default {
  components: {
    "local-task-preview": taskPreview,
  },
};
</script>
