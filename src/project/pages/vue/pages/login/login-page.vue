<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="5">
          <v-form>
            <v-card>
              <v-card-text>
                <v-row dense>
                  <v-col class="py-0" cols="12">
                    <v-text-field
                      filled
                      :rules="[(v) => (v && v == 'admin') || 'hint : admin']"
                      label="Username"
                      v-model="form.username"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col class="py-0" cols="12">
                    <v-text-field
                      filled
                      :rules="[(v) => (v && v == '123') || 'hint : 123']"
                      label="Password"
                      v-model="form.password"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="text-center" cols="12">
                    <v-btn v-if="loading" color="secondary">loading ...</v-btn>
                    <v-btn v-else @click="login" color="secondary">Login</v-btn>
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
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      loading: false,
    };
  },
  methods: {
    ...mapMutations("g", ["setAdmin"]),
    login() {
      if (this.form.username === "admin" && this.form.password == "123") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          setTimeout(() => {
            this.setAdmin(true);
            this.$router.push({ path: "/admin" });
          }, 500);
        }, 2000);
      }
    },
  },
};
</script>

<style></style>
