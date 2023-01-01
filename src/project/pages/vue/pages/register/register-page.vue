<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-form v-model="valid">
            <v-card>
              <v-card-text>
                <v-row dense>
                  <v-col class="py-0" cols="12" lg="3">
                    <v-autocomplete
                      filled
                      :rules="[(v) => !!v || 'required']"
                      label="Title"
                      :items="['Mr', 'Mrs']"
                      v-model="name"
                    >
                    </v-autocomplete>
                  </v-col>
                  <v-col class="py-0" cols="12" lg="3">
                    <v-text-field
                      filled
                      :rules="[(v) => !!v || 'required']"
                      label="First Name"
                      v-model="form.firstName"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col class="py-0" cols="12" lg="3">
                    <v-text-field
                      filled
                      :rules="[(v) => !!v || 'required']"
                      label="Last Name"
                      v-model="form.lastName"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" lg="3" class="px-0 py-0"></v-col>
                  <v-col class="py-0" cols="12" lg="3">
                    <v-text-field
                      filled
                      :rules="[(v) => !!v || 'required']"
                      label="Number"
                      v-model="form.number"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col class="py-0" cols="12" lg="3">
                    <v-text-field
                      filled
                      :rules="[(v) => !!v || 'required']"
                      label="Email"
                      v-model="form.email"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col class="py-0" cols="12" lg="3">
                    <v-text-field
                      filled
                      :rules="[(v) => !!v || 'required']"
                      label="Username"
                      v-model="form.username"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col class="py-0" cols="12" lg="3">
                    <v-text-field
                      filled
                      :rules="[(v) => !!v || 'required']"
                      label="Password"
                      v-model="form.password"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col class="py-0" cols="12" lg="6">
                    <v-text-field
                      filled
                      :rules="[(v) => !!v || 'required']"
                      label="City"
                      v-model="form.city"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col class="py-0" cols="12" lg="6">
                    <v-text-field
                      filled
                      :rules="[(v) => !!v || 'required']"
                      label="Gender"
                      v-model="form.gender"
                    >
                    </v-text-field>
                  </v-col>

                  <v-col class="py-0" cols="12" lg="6">
                    <v-text-field
                      filled
                      :rules="[(v) => !!v || 'required']"
                      label="address"
                      v-model="form.address"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col class="py-0" cols="12" lg="6">
                    <v-text-field
                      filled
                      :rules="[(v) => !!v || 'required']"
                      label="birth day"
                      v-model="form.birthday"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col class="py-0" cols="12" lg="6">
                    <v-text-field
                      filled
                      :rules="[(v) => !!v || 'required']"
                      label="job"
                      v-model="form.job"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-spacer></v-spacer>
                    <v-btn color="secondary">submit</v-btn>
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
      valid: false,
      form: {},
    };
  },
};
</script>

<style></style>
