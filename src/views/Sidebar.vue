<template>
  <div>
    <h1>Vue实例</h1>
    {{ isshow ? "true" : "false " }}
    {{ message }}
    {{ myDate }}
    {{ isshow }}
    {{ replaceDate(user.inserttime) }}
    <ul>
      <li><router-link to="/example01">Welcome</router-link></li>
      <button @click="change">change</button>
      <button @click="chane">chane</button>
    </ul>
  </div>
</template>
<script lang="ts">
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
    },
    chane() {
      this.isshow = !this.isshow;
    }
  },
  computed: {
    myDate(): string {
      return this.user.inserttime.replace("T", " ");
    },
    replaceDate() {
      return (date: string) => {
        return date.replace("T", " ");
      };
    }
  },
  watch: {
    isshow(newValue, oldValue) {
      alert(newValue);
    }
  }
});
</script>
