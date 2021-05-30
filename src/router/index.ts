import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    props: true,
    path: "/homework/ReserveLab",
    component: () => import("@/views/homework/ReserveLab.vue")
  },
  {
    props: true,
    path: "/example12",
    component: () => import("@/views/example12/Example12.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
