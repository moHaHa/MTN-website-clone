<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="rounded-xl">
          <v-data-table :headers="headers" :items="desserts">
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Registered Customers </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                  <v-card>
                    <v-card-title>
                      <span>Customer</span>
                    </v-card-title>
                    <v-card-subtitle>
                      <span>{{ targetUser.name }}</span>
                    </v-card-subtitle>

                    <v-card-text>
                      <v-row align="center">
                        <v-col cols="6">
                          <v-text-field
                            label="Amount"
                            v-model="amount"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="1"> $ </v-col>
                      </v-row>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="addBillCancel">
                        Cancel
                      </v-btn>
                      <v-btn color="blue darken-1" text @click="saveBill">
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <v-btn color="secondary" @click="addBill(item)">add bill</v-btn>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary" @click="initialize"> Reset </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    targetUser: {
      name: "",
    },
    amount: "",
    dialog: false,
    headers: [
      {
        text: "First Name",
        sortable: true,
        value: "firstName",
      },
      {
        text: "Last Name",
        sortable: true,
        value: "lastName",
      },

      {
        text: "",
        align: "end",
        value: "actions",
        sortable: false,
      },
    ],
    desserts: [],
  }),
  computed: {},

  created() {
    this.fetch();
  },

  methods: {
    addBill() {
      this.dialog = true;
    },
    fetch() {
      this.desserts = [
        {
          firstName: "Frozen Yogurt",
          lastName: "Frozen Yogurt",
        },
      ];
    },
  },
};
</script>

<style></style>
