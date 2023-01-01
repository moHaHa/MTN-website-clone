<template>
  <div class="media-feed">
    <v-container>
      <v-row>
        <v-col cols="12" md="6" lg="4">
          <div class="mtn-card">
            <v-card class="mx-auto" color="white" elevation="0">
              <v-card-text class="text-body-1">
                <div class="d-flex align-center">
                  <v-avatar size="60" color="primary">
                    <v-img class="elevation-6" alt="" :src="mtnProfile"></v-img>
                  </v-avatar>
                  <div class="d-flex flex-column ps-3">
                    <div
                      class="text-h6 font-weight-bold black--text"
                      style="line-height: 28px"
                    >
                      @MTNGroup
                    </div>
                    <div class="text-caption font-weight-light">Twitter</div>
                  </div>
                </div>
              </v-card-text>
              <v-card-text class="text-body-1">
                Y’ello 2023 💛 We look forward to once again doing with
                intention as we drive our commitment to accelerate digital…
              </v-card-text>

              <v-card-actions>
                <v-list-item class="grow">
                  <v-row align="center" justify="end">
                    <v-icon class="mr-1"> mdi-heart </v-icon>
                    <span class="subheading mr-2">256</span>
                    <span class="mr-1">·</span>
                    <v-icon class="mr-1"> mdi-share-variant </v-icon>
                    <span class="subheading">45</span>
                  </v-row>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import mtnProfile from "@/assets/mtn-profile.jpg";
export default {
  data() {
    return {
      mtnProfile,
    };
  },
};
</script>

<style lang="scss">
.mtn-card {
  background-color: #fff;
  border: 2px solid #f5f5f5;
  border-radius: 24px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  margin-left: 7px;
  margin-right: 7px;
  padding: 10px;
  border-bottom: solid 4px #ffcb05;
}
</style>
