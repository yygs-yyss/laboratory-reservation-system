<template>
  <h1>Welcome</h1>
  {{ msg }}
  {{ mymsg }}
  <button @click="change">rr</button>
  {{ sid }}/{{ hid }}
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: ["sid", "hid"],
  data: () => {
    return {
      msg: "hello"
    };
  },
  methods: {
    change() {
      this.msg = "world";
    }
  },
  computed: {
    mymsg(): string {
      return this.msg + "1";
    }
  },
  watch: {
    mymsg(newv, old) {
      alert(newv);
    }
  }
});
</script>

<style scoped>
h1 {
  color: red;
  border: 1px solid red;
  padding: 10px;
}
</style>
