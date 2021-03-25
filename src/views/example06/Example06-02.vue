<template>
  <div>
    <form>
      <input type="text" v-model="user.name" />
      <br />
      <select v-model="user.title">
        <option v-for="(t, index) of titles" :key="index" :value="t">
          {{ t.name }}
        </option>
      </select>
      <br />
      <template v-for="(c, index) of courses" :key="index">
        <label>
          <input type="checkbox" v-model="user.courses" :value="c.name" />
          {{ c.name }}
        </label>
        <br />
      </template>
    </form>
    <p>{{ user }}</p>
    <input type="file" @change="fileChange($event.target.files[0])" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { User } from "@/datasource/Types";
import { listCourses, listTitles } from "@/datasource/DataSource";

interface VFile {
  fileName?: string;
  fileSize?: string;
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
    const user = ref<User>({ name: "123", courses: [] });
    const file = ref({ fileName: "", fileSize: "" });
    const titles = listTitles();
    const courses = listCourses();
    const { fileChange } = useFile(file);
    return {
      user,
      file,
      titles,
      courses,
      fileChange
    };
  }
});
</script>
