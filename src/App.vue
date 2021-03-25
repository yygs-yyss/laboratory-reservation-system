<template>
  <div id="app">
    <sidebar id="sidebar" />
    <router-view id="router1" :key="$router.path" />
  </div>
  <!-- <div>
    <login />
  </div>
  <br />
  <br /> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import sidebar from "@/views/Sidebar.vue";
// import login from "@/views/example03/Login.vue";
// import setup from "@/views/example02/Example02.vue";
// import model from "@/views/example06/Example06-01.vue";
export default defineComponent({
  components: { sidebar }
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
