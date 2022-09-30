import Vue from "vue";
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import ProjectRouter from '@/project/router.js'
const routes = [
  {
    path: "/",
    component: () => import("@/app/App.vue"),
    children: [ProjectRouter],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  },
  routes,
});

export default router;
