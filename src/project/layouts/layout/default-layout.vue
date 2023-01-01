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
              <v-tab :to="'/'">home</v-tab>
              <v-tab :to="'/bill'">Check Bill</v-tab>
              <v-divider vertical class="mx-3"></v-divider>
              <v-tab :to="'/admin'">Customers List</v-tab>
            </v-tabs>
          </div>
          <div class="ms-auto">
            <div class="px-3">
              <v-btn to="/register" class="me-3" depressed color="primary">
                Register Customer
              </v-btn>
              <v-btn to="/login" outlined color="primary">admin login </v-btn>
            </div>
          </div>
        </div>
      </v-card>
    </v-app-bar>
    <v-main style="background: #f5f5f5">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import mtnLogo from "@/assets/mtn-logo.svg";
export default {
  components: {},
  data() {
    return {
      mtnLogo,
    };
  },
};
</script>

<style></style>
