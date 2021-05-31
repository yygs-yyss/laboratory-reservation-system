import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    props: true,
    path: "/homework/ReserveLab",
    component: () => import("@/views/homework/ReserveLab.vue")
  },
  {
    props: true,
    path: "/homework/teacherCourse",
    component: () => import("@/views/homework/TeacherCourse.vue")
  },
  {
    props: true,
    path: "/homework/courseM",
    component: () => import("@/views/homework/CourseM.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
