<!-- WeChat -->
<template>
  <div class="main_container">
    <el-aside width="240px">
      <ul class="chat_list" v-loading="listLoading">
        <li
          class="chat_list-item el-icon-"
          :class="{active:item.id == chatId}"
          v-for="(item, index) in chatList"
          :key="index"
          @click="handleSelect(item)"
        >
          <img class="chat_list-avatar" :src="item.chatImage" alt />
          <div class="chat_list-content">
            <p class="title">{{item.title.length > 6 ? item.title.substr(0,6) + '...' : item.title}}</p>
            <p
              class="subtitle"
            >{{item.subtitle.length > 10 ? item.subtitle.substr(0,10) + '...' : item.subtitle}}</p>
          </div>
        </li>
      </ul>
    </el-aside>
    <el-main>Main</el-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listLoading: true
    };
  },
  computed: {
    chatList: {
      get() {
        return this.$store.state.chat.chatList;
      }
    },
    chatId: {
      get() {
        return this.$store.state.chat.chatId;
      },
      set(val) {
        this.$store.commit("updateChatid",val);
      }
    }
  },
  created() {
    this.getChatList();
  },
  methods: {
    getChatList() {
      this.listLoading = true;
      this.$store.dispatch("getList").then(res => {
        this.listLoading = false;
      });
    },
    handleSelect(e) {
      this.chatId = e.id;
    }
  }
};
</script>
<style scoped lang="scss">
.main_container {
  display: flex;
}
.chat_list {
  height: inherit;
  overflow-y: scroll;
  &-item {
    padding: 15px 0 15px 15px;
    display: flex;
    position: relative;
    &:hover {
      &::before {
        content: "\E6DB";
        position: absolute;
        left: 5px;
        line-height: 40px;
        font-size: 12px;
        color: #777777;
      }
    }
    &.active {
      background: #f3f3f3;
    }
  }
  &-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    margin-left: 5px;
  }
  &-content {
    text-align: left;
    .title {
      line-height: 25px;
      font-size: 14px;
      font-weight: bold;
    }
    .subtitle {
      line-height: 15px;
      font-size: 12px;
      color: #777777;
    }
  }
}
</style>