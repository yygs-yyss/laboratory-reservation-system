<template>
  <div>{{ users.name }}/{{ users.address }}</div>
</template>
<script lang="ts">
import { User } from "@/datasource/Types";
import { State } from "@/store/index";
import { computed, defineComponent } from "vue";
import { mapState, Store, useStore } from "vuex";
export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const users = computed(() => {
      return store.state.user;
    });
    const updateUser = () => {
      store.commit("updateUser", {
        name: "yyy1",
        addres: "1234562"
      } as User);
    };
    return {
      users,
      updateUser
    };
  }
});
</script>
