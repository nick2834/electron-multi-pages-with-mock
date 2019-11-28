<!-- WeChat -->
<template>
  <div class="main_container">
    <el-aside width="240px">
      <a-chat-list></a-chat-list>
    </el-aside>
    <el-main class="wechat_contaner">
      
      <a-docdom v-if="chatId == ''"></a-docdom>
      <keep-alive v-else>
        <router-view></router-view>
      </keep-alive>
    </el-main>
  </div>
</template>

<script>
import AChatList from "@/components/Achatlist";
import ADocdom from "@/components/ADocdom";
export default {
  data() {
    return {};
  },
  components: { AChatList, ADocdom },
  computed: {
    chatId: {
      get() {
        return this.$store.state.chat.chatId;
      }
    }
  }
};
</script>
<style scoped lang="scss">
.main_container {
  display: flex;
  .wechat_contaner {
    padding: 0;
    position: relative;
  }
}
</style>