<template>
  <!-- <div id="app">
    <sidebar id="sidebar" />
    <router-view id="router1" :key="$router.path" />
  </div>
  <div>
    <login />
  </div>
  <br />
  <br /> -->
  <div>
    <setup />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import sidebar from "@/views/Sidebar.vue";
import login from "@/views/example03/Login.vue";
import setup from "@/views/example02/Example02.vue";
export default defineComponent({
  components: { setup }
});
</script>

<style>
#app {
  margin-top: 10px;
  display: flex;
}
#sidebar {
  width: 300px;
  border: 1px solid red;
  padding: 15px;
}
</style>
