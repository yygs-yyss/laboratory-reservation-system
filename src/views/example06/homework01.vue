<template>
  <div id="iq">
    <h1>Homework01</h1>
    <hr />
    <div style="display: flex">
      <div :style="{ color: activeColor }">{{ score }}</div>
      /12
    </div>
    <div id="eq">
      <div id="eq-1">
        <form>
          <template v-for="(c, index) of courses" :key="index">
            <label>
              <input v-model="icourseRef" type="checkbox" :value="c" />
              {{ c.name }}-{{ c.point }}({{ c.term }})
            </label>
            <br />
          </template>
        </form>
      </div>
      <div id="eq-2">
        <form>
          <template v-for="(c, index) of icourseRef" :key="index">
            <label>{{ c.name }}-{{ c.point }}({{ c.term }})</label>
            <br />
          </template>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { listCourses, Course } from "@/datasource/homework01";
import { computed, defineComponent, ref, watch } from "vue";
const course1: Course[] = [];
export default defineComponent({
  data() {
    // eslint-disable-next-line vue/return-in-computed-property
  },
  setup() {
    const courses = listCourses();
    const icourseRef = ref<Course[]>(course1);
    const score = ref(0);
    watch(icourseRef, () => {
      let sum = 0;
      icourseRef.value.sort();
      icourseRef.value?.forEach(c => {
        sum += c.point;
      });
      score.value = sum;
    });
    const activeColor = computed(() => {
      if (score.value < 12) {
        return "red";
      } else {
        return "green";
      }
    });
    return {
      courses,
      score,
      icourseRef,
      activeColor
    };
  }
});
</script>
<style scoped>
#iq {
  border: 1px solid red;
}
#eq {
  display: flex;
}
#eq-1 {
  border: 1px solid red;
}
#eq-2 {
  border: 1px solid red;
}
</style>
