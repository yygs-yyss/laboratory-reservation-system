<template>
  <div>
    {{ messageRef }}
    {{ user.name }}
    {{ userRef.name }}
    {{ userComputed }}
    <button @click="change">change</button>
  </div>
</template>
<script lang="ts">
import { watch, computed, defineComponent, ref, Ref } from "vue";
interface User {
  id?: string;
  name?: string;
  insertTime?: string;
  address?: string;
}
function userMessage(msg: Ref<string>) {
  const reverseMessage = computed(() => {
    return msg.value
      .split("")
      .reverse()
      .join("");
  });
  const changeMessage = () => {
    msg.value = "api";
  };
  return {
    reverseMessage,
    changeMessage
  };
}
function useUser(user: Ref<User>) {
  const formatDateFunc = computed(() => {
    return (data: string) => data.replace("T", " ");
  });
  const changeAddress = () => {
    return (user.value.address = (Math.random() * 1000).toFixed(0).toString());
  };
  return {
    formatDateFunc,
    changeAddress
  }
}
export default defineComponent({
  setup() {
    const user: User = {
      name: "y",
      insertTime: "2046-04-09T15:30:30"
    };
    const messageRef = ref("hello world");
    const userRef = ref(user);

    const userAsync: User = {
      name: "yyy",
      insertTime: "2049-04-10T15:30:30",
      address: "aaa"
    };
    const change = () => {
      setTimeout(() => {
        userRef.value = userAsync;
      }, 1000);
    };
    const userComputed = computed(() => {
      return userRef.value.insertTime?.replace("T", " ");
    });
    watch(userRef, (newValue, oldValue) => {
      alert("true");
    });
    return {
      messageRef,
      user,
      userRef,
      change,
      userComputed
    };
  }
});
</script>
