import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/example01",
    component: () => import("@/views/example01/Example01.vue")
  },
  {
    props: true,
    path: "/example03/student/:sid/homework/:hid",
    component: () => import("@/views/example03/Example03.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
