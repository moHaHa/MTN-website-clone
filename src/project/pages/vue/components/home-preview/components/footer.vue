<template>
  <v-footer dark class="m-footer black white--text rounded-t-xl">
    <v-container>
      <div class="py-8"></div>
    </v-container>
    <v-container>
      <v-row justify="space-between" align="start">
        <v-col cols="auto">
          <a href="#" class="text-decoration-none d-flex align-center">
            <div><v-img :src="contactIcon" width="27"> </v-img></div>
            <!-- <v-icon color="primary"> mdi-home</v-icon> -->
            <div class="mx-2 white--text text-bold">Contact Us</div>
          </a>
        </v-col>
        <v-col cols="auto">
          <div class="d-flex align-center">
            <a href="#" class="ms-2 m-hover-line primary--text"> TWITTER </a>
            <a href="#" class="ms-2 m-hover-line primary--text"> LINKEDIN </a>
            <a href="#" class="ms-2 m-hover-line primary--text"> YOUTUBE </a>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row justify="space-between" align="end">
        <v-col cols="auto">
          <div>
            <div class="d-flex align-center">
              <a href="#" class="m-hover-line me-3 white--text"> TWITTER </a>
              <a href="#" class="m-hover-line me-3 white--text"> LINKEDIN </a>
              <a href="#" class="m-hover-line me-3 white--text"> YOUTUBE </a>
            </div>
          </div>
          <div class="text-caption">
            © 2023 MTN GROUP MANAGEMENT SERVICES (PTY) LTD, ALL RIGHTS RESERVED.
          </div>
        </v-col>

        <v-col cols="auto">
          <div class="d-flex align-center">
            <div
              class="me-5 primary--text text-bold MTNBrighterSans-Bold text-h5 font-weight-bold"
            >
              Everywhere You Go
            </div>
            <div><v-img :src="mtnLogoY" width="97"> </v-img></div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <div class="py-16"></div>
    </v-container>
  </v-footer>
</template>

<script>
import contactIcon from "@/assets/icons/contact.svg";
import mtnLogoY from "@/assets/mtn-logo-y.svg";
export default {
  name: "m-footer",
  data() {
    return {
      contactIcon,
      mtnLogoY,
    };
  },
};
</script>

<style lang="scss">
.m-footer {
}
</style>
