<template>
  <div style="margin-top: -81px">
    <m-hero> </m-hero>
    <m-media-feed> </m-media-feed>
    <m-contact></m-contact>
    <m-footer> </m-footer>
  </div>
</template>

<script>
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
    return {};
  },
};
</script>

<style></style>
