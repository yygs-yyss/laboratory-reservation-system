<template>
  <div>
    {{ login }}
    <button @click="change">NameLogin</button>
    <button @click="change">EmailLogin</button>
    <keep-alive>
      <NameLogin v-if="login" />
    </keep-alive>
    <keep-alive>
      <EmailLogin v-if="!login" />
    </keep-alive>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NameLogin from "@/views/example03/NameLogin.vue";
import EmailLogin from "@/views/example03/EmailLogin.vue";
export default defineComponent({
  components: { NameLogin, EmailLogin },
  data: () => ({
    login: true
  }),
  methods: {
    change() {
      this.login = !this.login;
    }
  }
});
</script>
