<template>
  <div>
    <h1>Homework01</h1>
    <hr />
    {{ score }}/12
    <form>
      <template v-for="(c, index) of courses" :key="index">
        <label>
          <input v-model="icourseRef" type="checkbox" :value="c" />
          {{ c.name }}
        </label>
        <br />
      </template>
    </form>
  </div>
</template>
<script lang="ts">
import { listCourses, Course } from "@/datasource/homework01";
import { defineComponent, ref, watch } from "vue";
const course1: Course[] = [];
export default defineComponent({
  setup() {
    const courses = listCourses();
    const score = ref(0);
    const icourseRef = ref<Course[]>(course1);
    watch(icourseRef, () => {
      let sum = 0;
      icourseRef.value?.forEach(c => {
        sum += c.point;
      });
      score.value = sum;
    });
    return {
      courses,
      score,
      icourseRef
    };
  }
});
</script>
