<template>
  <div>
    <form>
      <input type="text" v-model="user.name" />
      <br />
      <label>
        <input type="radio" v-model="user.sex" value="male" />
        男
      </label>
      <br />
      <label>
        <input type="radio" v-model="user.sex" value="female" />
        女
      </label>
      <br />
      <select v-model="user.title">
        <option v-for="(t, index) of titles" :key="index" :value="{ id: t.id }">
          {{ t.name }}
        </option>
      </select>
      <br />
      <template v-for="(c, index) of courses" :key="index">
        <label>
          <input type="checkbox" v-model="user.courses" :value="{ id: c.id }" />
          {{ c.name }}
        </label>
        <br />
      </template>
      {{ a }}/{{ b }}
      <button type="button">提交</button>
    </form>
    <p>{{ user }}</p>
    <input type="file" @change="fileChange($event.target.files[0])" />
    <br />
    {{ file.fileName }}/ {{ file.fileSize }}
    <button @click="change">kk</button>
  </div>
  <p @mouseover="agree = true" @mouseleave="agree = false" :class="bg - red">
    xx
  </p>
</template>
<script lang="ts">
import { computed, defineComponent, ref, Ref } from "vue";
import { User } from "@/datasource/Types";
import { listCourses, listTitles } from "@/datasource/DataSource";

interface VFile {
  fileName?: string;
  fileSize?: string;
}
function kk(u: Ref<VFile>) {
  const change = () => {
    return 1;
  };
  return {
    change
  };
}
function useFile(file: Ref<VFile>) {
  const fileChange = (f: File) => {
    console.log(f);
    file.value.fileName = f.name;
    file.value.fileSize = `${(f.size / 1024 / 1024).toFixed(2)}MB`;
  };
  return {
    fileChange
  };
}
export default defineComponent({
  setup() {
    const user = ref<User>({ courses: [] });
    const file = ref({ fileName: "", fileSize: "" });
    const titles = listTitles();
    const courses = listCourses();
    const { fileChange } = useFile(file);
    const a = ref(1);
    const b = computed(() => {
      return a.value + 1;
    });
    const change = () => {
      a.value++;
    };

    return {
      user,
      file,
      titles,
      courses,
      fileChange,
      a,
      b,
      change
    };
  }
});
</script>
<style scoped>
.bg-red {
  background-color: red;
}
</style>
