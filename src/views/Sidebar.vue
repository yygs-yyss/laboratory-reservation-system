<template>
  <div>
    <h1>Vue实例</h1>
    {{ isshow ? "true" : "false " }}
    {{ message }}
    {{ replaceDate(user.inserttime) }}
    <ul>
      <li><router-link to="/example01">Welcome</router-link></li>
      <button @click="change">change</button>
    </ul>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  data: () => ({
    isshow: false,
    message: "hello",
    user: {
      name: "BO",
      inserttime: "2046-04-09T11:04:25",
      address: ""
    }
  }),
  methods: {
    change() {
      this.user.name = "y";
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    },
    addAddress() {
      this.user.address = "956";
    }
  },
  computed: {
    myDate: function() {
      return this.user.inserttime.replace("T", " ");
    },
    replaceDate() {
      return date => {
        return date.replace("T", " ");
      };
    }
  }
});
</script>
