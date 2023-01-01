let project = {
  name: "project",
  path: "",
  redirect: "project-vue-studio",
  component: () => import("./module-layout.vue"),
  children: [
    {
      name: "project-vue-studio",
      path: "project-vue-studio",
      component: () => import("./layouts/vue/vue-layout.vue"),
      children: [
        {
          path: "",
          component: () => import("./pages/vue/vue-page.vue"),
          children: [
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

      ],
    },
  ],
};
export default project