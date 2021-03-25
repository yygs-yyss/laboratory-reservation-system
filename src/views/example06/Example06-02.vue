<template>
  <div>
    <form>
      <label>
        <input type="checkbox" :v-model="agree" :value="true" />
        同意条款
      </label>
      <br />
      <template v-for="(c, index) of courses" :key="index">
        <label>
          <input type="checkbox" v-model="courseRef" :value="c.name" />
          {{ c.name }}
        </label>
        <br />
      </template>
      <button :disabled="!agree || len < 2">submit</button>
      {{ agree }}
      {{ len }}
      {{ courseRef }}
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { listCourses } from "@/datasource/DataSource";
import { Course } from "@/datasource/Types";
const course1: Course[] = [];
export default defineComponent({
  setup() {
    const agree = false;
    const courses = listCourses();
    const courseRef = ref<Course[]>(course1);
    const len = ref(0);
    watch(courseRef, () => {
      len.value = courseRef.value.length;
    });
    return {
      courses,
      agree,
      courseRef,
      len
    };
  }
});
</script>
