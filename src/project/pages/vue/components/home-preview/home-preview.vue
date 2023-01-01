<template>
  <v-app>
    <v-main class="white">
      <div class="text-center">
        <div class="white--text pt-3">
          <div class="text-h5 mb-3">
            Ok so this is your studio, you're ready to work now !
          </div>
          <p>let's get started</p>
        </div>
      </div>
      <m-contact></m-contact>
      <m-footer> </m-footer>
    </v-main>
  </v-app>
</template>

<script>
import mContact from "./components/contact.vue";
import mFooter from "./components/footer.vue";
export default {
  components: {
    "m-contact": mContact,
    "m-footer": mFooter,
  },
};
</script>

<style></style>
