<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="5">
          <v-form v-model="valid">
            <v-card>
              <v-card-text>
                <v-row dense>
                  <v-col class="py-0" cols="12">
                    <v-text-field
                      filled
                      label="Username"
                      v-model="form.username"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col class="py-0" cols="12">
                    <v-text-field
                      filled
                      label="Password"
                      v-model="form.password"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="text-center" cols="12">
                    <v-btn color="secondary">Login</v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
    };
  },
};
</script>

<style></style>
