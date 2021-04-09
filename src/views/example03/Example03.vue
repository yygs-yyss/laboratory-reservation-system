<template>
  <h2>studentID:{{ sid }}</h2>
  <h2>homeworkID:{{ hid }}</h2>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["sid", "hid"],
  created() {
    console.log(this.$route.params.sid);
    console.log(this.$route.params.hid);
  }
});
</script>

<style scoped>
h2 {
  color: blue;
  /* border: 1px solid red; */
}
</style>
