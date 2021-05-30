<template>
  <h></h>
  <div id="id">
    <sidebar></sidebar>
    <router-view key="$route.path"></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import sidebar from "@/views/homework/Sidebar.vue";
import h from "@/views/homework/Head.vue";
export default defineComponent({
  components: { sidebar, h }
});
</script>

<style>
#id {
  display: flex;
}
</style>
