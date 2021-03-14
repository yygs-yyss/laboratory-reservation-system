import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/example01",
    component: () => import("@/views/example01/Example01.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
