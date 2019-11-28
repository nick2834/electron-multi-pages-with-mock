<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "electron-vue-mock",
  computed: {
    chatId: {
      get() {
        return this.$store.state.chat.chatId;
      },
      set(val) {
        this.$store.commit("updateChatid", val);
      }
    },
    chatList: {
      get() {
        return this.$store.state.chat.chatList;
      }
    }
  }
};
</script>

<style>
@import "../../assets/fonts/iconfont.css";
</style>
