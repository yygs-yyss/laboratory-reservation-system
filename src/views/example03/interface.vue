<template>
  <div>welcome</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
interface Homework {
  id?: number | string | null;
  name?: string;
  createTime?: string;
}
interface Course {
  id?: string;
  name?: string;
  createTime?: string;
}
interface User {
  id?: string;
  title?: Title;
  courses?: Course[];
}
interface Title {
  id: string;
  name?: string;
}
const user: User = { id: "123" };
user.id;
export default defineComponent({});
</script>
