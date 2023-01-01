<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="text-h3">Bill Details</div>
        </v-col>
        <v-col>
          <v-card outlined class="rounded-xl">
            <v-row>
              <v-col cols="12" md="6">
                <v-card-title> Customer </v-card-title>
                <v-card-text> Hakim Ziyech</v-card-text>
              </v-col>
              <v-col cols="12" md="6">
                <v-card-title> Amount </v-card-title>
                <v-card-text> 1550 $</v-card-text>
              </v-col>
              <v-col cols="12" md="6">
                <v-card-title> Phone Number </v-card-title>
                <v-card-text>9634400441</v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn> <v-icon class="me-2">mdi-arrow-left</v-icon> back </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
