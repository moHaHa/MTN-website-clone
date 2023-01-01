<template>
  <section class="m-contact">
    <v-container>
      <v-row justify="center">
        <v-col cols="10">
          <v-row align="center">
            <v-col cols="12" md="6">
              <div class="text-h4 MTNBrighterSans-Bold font-weight-bold mb-5">
                Working with MTN
              </div>
              <div>
                <div>
                  <div class="m-big-link">
                    <div class="d-flex justify-space-between align-center">
                      <div class="col m-big-link--text px-0 pb-5">
                        Become an MTNer
                      </div>
                      <div class="col-auto m-big-link--icon ps-0 mt-2">
                        <v-icon>mdi-chevron-right</v-icon>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="m-big-link">
                    <div class="d-flex justify-space-between align-center">
                      <div class="col m-big-link--text px-0 pb-5">
                        Becoming a supplier
                      </div>
                      <div class="col-auto m-big-link--icon ps-0 mt-2">
                        <v-icon>mdi-chevron-right</v-icon>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="m-big-link">
                    <div class="d-flex justify-space-between align-center">
                      <div class="col m-big-link--text px-0 pb-5">
                        Contact Us
                      </div>
                      <div class="col-auto m-big-link--icon ps-0 mt-2">
                        <v-icon>mdi-chevron-right</v-icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <v-card
                dark
                class="rounded-xl left-card mx-auto white--text px-6 py-6"
                max-width="444"
              >
                <v-card-text class="white--text">
                  <div class="text-caption mb-2">
                    LOOKING FOR SOMETHING ELSE?
                  </div>
                  <p class="text-h3">About Us</p>
                  <p>
                    Discover more about Africa’s largest mobile network operator
                  </p>
                  <div class="text--primary">
                    Just say Y’ello. Get in touch here.
                  </div>
                </v-card-text>
                <v-card-actions>
                  <div>
                    <v-divider></v-divider>

                    <div class="arrow-link">
                      <div class="d-flex justify-space-between align-center">
                        <div class="col text-title px-0">Read more</div>
                        <div class="col-auto arrow-link--icon">
                          <v-icon color="white">mdi-chevron-right</v-icon>
                        </div>
                      </div>
                    </div>
                    <div class="mt-16">
                      <v-icon x-small color="primary" class="me-3"
                        >mdi-checkbox-blank-circle</v-icon
                      >
                      <v-icon x-small class="me-3"
                        >mdi-checkbox-blank-circle</v-icon
                      >
                      <v-icon x-small class="me-3"
                        >mdi-checkbox-blank-circle</v-icon
                      >
                    </div>
                  </div>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "m-contact",
};
</script>

<style lang="scss">
.m-contact {
  .left-card {
    background: linear-gradient(
        180deg,
        rgba(115, 115, 115, 0.4) 0%,
        rgba(0, 0, 0, 0.8) 50%
      ),
      #232323;
  }
}
.m-big-link {
  max-width: 400px;
  .m-big-link--text {
    font-size: 20px;
    transition: all 0.3s ease;

    border-bottom: 1px solid grey;
  }
  cursor: pointer;
  .m-big-link--icon {
    transform: translateX(0px);
    transition: all 0.3s ease;
    .v-icon {
      font-size: 24px;

      color: var(--v-black-base) !important;
    }
  }
  &:hover {
    .m-big-link--text {
      transition: all 0.3s ease;

      border-bottom: 1px solid var(--v-primary-base);
    }

    .m-big-link--icon {
      transform: translateX(5px);
      transition: all 0.3s ease;
      .v-icon {
        color: var(--v-primary-base) !important;
      }
    }
  }
}
</style>
