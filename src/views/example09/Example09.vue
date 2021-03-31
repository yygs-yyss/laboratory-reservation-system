<template>
  <div>
    <img :src="user.avatar_url" alt="bwhyman" style="width: 30%" />
    <br />
    login: {{ user.login }}
    <br />
    company: {{ user.company }}
    <br />
    resp_url:
    <router-link :to="`/emample09-02?url=${user.resp_url}`">
      {{ user.resp_url }}
    </router-link>
  </div>
</template>
<script lang="ts">
import { GithubUser } from "@/datasource/Types";
import { defineComponent, ref } from "vue";
import axios from "@/axios/index";
export default defineComponent({
  setup() {
    const user = ref<GithubUser>({});
    axios
      .create()
      .get("https://api.github.com/users/bwhyman")
      .then(resp => {
        user.value = resp.data;
      });
    return {
      user
    };
  }
});
</script>
