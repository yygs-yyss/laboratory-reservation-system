<template>
  <div>
    <a href="https://www.baidu.com" @click.prevent="choseUser(user.id)">111</a>
  </div>
</template>
<script lang="ts">
import { User } from "@/datasource/Types";
import { State } from "@/store";
import { LIST_USER_COURSES } from "@/store/VuexTypes";
import axios from "axios";
import { Store } from "vuex";
import { defineComponent, ref } from "vue";
function userUserCourses(store: Store<State>) {
  const choseUser = (userId: number) => {
    store.dispatch(LIST_USER_COURSES, userId);
  };
  return {
    choseUser
  };
}
export default defineComponent({
  setup() {
    const user = ref<User>({});
    axios
      .create()
      .get("users/12")
      .then(resp => {
        user.value = resp.data.data.user;
      });
  }
});
</script>
