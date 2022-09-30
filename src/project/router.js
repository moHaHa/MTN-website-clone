let project = {
  name: "project",
  path: "",
  redirect:"project-vue-studio",
  component:()=> import("./module-layout.vue"),
  children: [
    {
      name: "project-vue-studio",
      path: "project-vue-studio",
      component:()=> import("./layouts/vue/vue-layout.vue"),
      children: [
        {
          path: "",
          component:()=>   import("./pages/vue/vue-page.vue"),
        },
      ],
    },
  ],
};
export default project