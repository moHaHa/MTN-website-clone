let project = {
  name: "project",
  path: "",
  component: () => import("./module-layout.vue"),
  children: [
    {
      name: "",
      path: "/",
      component: () => import("./layouts/layout/default-layout.vue"),
      children: [
        {
          path: "",
          component: () => import("./pages/vue/vue-page.vue"),
          children: [
            {
              path: "",
              component: () => import("./pages/vue/pages/home/home-page.vue"),
              children: [
              ]
            },
            {
              path: "register",
              component: () => import("./pages/vue/pages/register/register-page.vue"),
              children: [
              ]
            },
            {
              path: "login",
              component: () => import("./pages/vue/pages/login/login-page.vue"),
              children: [
              ]
            },
            {
              path: "bill",
              component: () => import("./pages/vue/pages/bill/bill-module.vue"),
              children: [
                {
                  path: "",
                  component: () => import("./pages/vue/pages/bill/pages/search-bill-page"),
                  children: [

                  ]
                },
                {
                  path: ":number",
                  component: () => import("./pages/vue/pages/bill/pages/view-bill-page"),
                  children: [

                  ]
                }
              ]
            },
          ]
        },
        {
          path: "admin",
          component: () => import("./pages/admin/admin-module.vue"),
          children: [
            {
              path: "",
              component: () => import("./pages/admin/pages/users.vue"),
              children: [
              ]
            },
            {
              path: "add-bill/:user",
              component: () => import("./pages/admin/pages/add-bill.vue"),

            },
          ]
        },

      ],
    },
  ],
};
export default project