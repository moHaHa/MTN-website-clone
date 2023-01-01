<template>
  <v-img :height="ImgHeight" :src="heroImg">
    <v-container class="height-fill mt-16">
      <v-row class="mt-16">
        <v-col cols="12">
          <div
            class="font-weight-bold"
            style="max-width: 400px"
            :class="[mobile ? 'text-h5' : 'text-h4']"
          >
            MTN Group publishes 2021 Integrated Suite of Reports
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>

<script>
import heroImg from "@/assets/Landing-Page.webp";
export default {
  name: "m-hero",
  data() {
    return {
      heroImg,
    };
  },
  computed: {
    ImgHeight() {
      return "100vh";
    },
    mobile() {
      return false;
    },
  },
};
</script>

<style></style>
