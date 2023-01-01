<template>
  <v-app>
    <v-app-bar elevation="0" height="90" fixed color="transparent">
      <v-card width="100%">
        <div class="d-flex align-center">
          <div class="px-8 py-4">
            <v-img :src="mtnLogo" width="70"></v-img>
          </div>
          <div class="px-0 py-0">
            <v-tabs>
              <v-tab>home</v-tab>
              <v-tab>Check Bill</v-tab>
            </v-tabs>
          </div>
          <div class="ms-auto">
            <div class="px-3">
              <v-btn class="me-3 black--text" depressed color="primary">
                Register
              </v-btn>
              <v-btn outlined color="primary"> login </v-btn>
            </div>
          </div>
        </div>
      </v-card>
    </v-app-bar>
    <v-main class="white">
      <m-hero> </m-hero>
      <m-media-feed> </m-media-feed>
      <m-contact></m-contact>
      <m-footer> </m-footer>
    </v-main>
  </v-app>
</template>

<script>
import mtnLogo from "@/assets/mtn-logo.svg";
import mHero from "./components/hero.vue";
import mMediaFeed from "./components/media-feed.vue";
import mContact from "./components/contact.vue";
import mFooter from "./components/footer.vue";
export default {
  components: {
    "m-hero": mHero,
    "m-media-feed": mMediaFeed,
    "m-contact": mContact,
    "m-footer": mFooter,
  },
  data() {
    return {
      mtnLogo,
    };
  },
};
</script>

<style></style>
