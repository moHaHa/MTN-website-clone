<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-form v-model="valid">
            <v-card>
              <v-card-title> Bill </v-card-title>
              <v-card-subtitle>Enter Your Phone Number </v-card-subtitle>
              <v-card-text>
                <v-text-field solo v-model.number="phoneNumber"> </v-text-field>
              </v-card-text>

              <v-card-actions>
                <v-btn color="secondary">Search</v-btn>
              </v-card-actions>
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
      status: {
        loading: false,
        phonNumberNotFound: false,
        getBill: false,
      },
      phoneNumber: "",
    };
  },
};
</script>

<style></style>
