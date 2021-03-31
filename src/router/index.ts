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
  },
  {
    props: true,
    path: "/example06-01",
    component: () => import("@/views/example06/Example06-01.vue")
  },
  {
    props: true,
    path: "/example06-02",
    component: () => import("@/views/example06/Example06-02.vue")
  },
  {
    props: true,
    path: "/example06-03",
    component: () => import("@/views/example06/homework01.vue")
  },
  {
    props: true,
    path: "/example07",
    component: () => import("@/views/example07/Example07.vue")
  },
  {
    props: true,
    path: "/example09",
    component: () => import("@/views/example09/Example09.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
