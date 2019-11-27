<!-- Aheader-template -->
<template>
  <section class="header_container">
    <div class="search_bar">
      <el-input class="search_input" size="mini" v-model="value" prefix-icon="el-icon-search"></el-input>
    </div>

    <el-menu class="nav_menu no-dragable" mode="horizontal" :default-active="$route.name" router @select="handleSelect">
      <el-menu-item index="wechat">
        <i class="iconfont icon-wechat"></i>
      </el-menu-item>
      <el-menu-item index="contact">
        <i class="iconfont icon-friend"></i>
      </el-menu-item>
      <el-menu-item index="collect">
        <i class="iconfont icon-collect"></i>
      </el-menu-item>
    </el-menu>
    <el-avatar class="avatar" :size="36">
      <img src="~@/assets/images/avatar.png" />
    </el-avatar>
  </section>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  computed: {
    chatId: {
      get() {
        return this.$store.state.chat.chatId;
      },
      set(val) {
        this.$store.commit("updateChatid", val);
      }
    }
  },
  methods: {
    showLoginWindow() {
      ipcRenderer.send("showLoginWindow");
    },
    handleSelect(e) {
      this.chatId = "";
    }
  }
};
</script>
<style scoped lang="scss">
.header_container {
  background-color: #e7e8e8;
  width: 100%;
  color: #333;
  text-align: center;
  line-height: 55px;
  display: flex;
  justify-content: space-between;
  .search_bar {
    padding-left: 70px;
    width: 160px;
  }
  .search_input {
    color: red;
    /deep/ input {
      border-radius: 20px;
    }
  }
  .nav_menu {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .avatar {
    margin: 9.5px 10px 0 0;
    cursor: pointer;
  }
}
</style>