<template>
  <div>
    <h1>Vue实例</h1>
    <ul>
      <li><router-link to="/example01">Welcome</router-link></li>
      <li>
        <router-link to="/example03/student/24/homework/24">
          Welcome1
        </router-link>
      </li>
      <li>
        <router-link to="/example03/student/20/homework/46">
          Welcome2
        </router-link>
      </li>
      <button @click="change">change</button>
      <button @click="chane">chane</button>
      <li>
        Form Input Bindings
        <ul>
          <li><router-link to="/example06-01">v-module</router-link></li>
          <li><router-link to="/example06-02">Examples</router-link></li>
        </ul>
      </li>
      <li>
        <router-link to="/example06-03">
          Homework - 1
        </router-link>
      </li>
      <li>
        <router-link to="/example07">
          Example07
        </router-link>
      </li>
      <li>
        <router-link to="/example09">
          Example09
        </router-link>
      </li>
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
    isshow(newValue) {
      alert(newValue);
    }
  }
});
</script>
