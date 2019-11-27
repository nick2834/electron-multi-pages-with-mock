<!-- WeChat -->
<template>
  <div class="main_container">
    <el-aside width="240px">
      <a-chat-list></a-chat-list>
    </el-aside>
    <a-docdom v-if="chatId == ''"></a-docdom>
    <el-container v-else class="message_container">
      <el-main class="message_content">
        <a-message-box></a-message-box>
        <a-message-input></a-message-input>
      </el-main>
      <el-aside :width="isOpen ? '220px':'0'" class="online_container">
        <span class="toggle_span" :style="{left:isOpen?'0':'-10px'}" @click="isOpen = !isOpen">
          <i :class="isOpen ? 'el-icon-arrow-right' : 'el-icon-arrow-left'"></i>
        </span>
        <div class="message_detail">
          <div class="detail_info">
            <div class="detail_info-title el-icon-">群公告</div>
            <div
              class="detail_info-content"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quibusdam ad corrupti dolor assumenda esse odio culpa rerum labore. Deserunt porro est pariatur adipisci asperiores voluptas temporibus deleniti nobis quam.</div>
          </div>
        </div>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import AChatList from "@/components/Achatlist";
import ADocdom from "@/components/ADocdom";
import AMessageBox from "@/components/AMessagebox";
import AMessageInput from "@/components/AMessageinput";
export default {
  data() {
    return {
      isOpen: true
    };
  },
  components: { AChatList, ADocdom, AMessageBox, AMessageInput },
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
.message_container {
  height: calc(100vh - 55px);
  display: flex;
}
.message_content {
  padding: 0;
}
.online_container {
  height: calc(100vh - 55px);
  background: #f6f7f9;
  position: relative;
  overflow: unset;
  transition: 300ms;
  .toggle_span {
    position: absolute;
    background: #dadada;
    width: 10px;
    height: 20px;
    color: #ffffff;
    left: 0;
    top: 13px;
    line-height: 20px;
    cursor: pointer;
    z-index: 2;
    &:hover {
      background: #12b7f5;
    }
  }
  .message_detail {
    position: relative;
    .detail_info {
      text-align: left;
      border-bottom: 1px solid #eeeff0;
      padding: 0 15px;
      height: 240px;
      &-title {
        line-height: 40px;
        color: #000;
        position: relative;
        width: 100%;
        &::after {
          content: "\E6E0";
          position: absolute;
          right: 0;
        }
      }
      &-content {
        color: #777777;
        font-size: 12px;
      }
    }
  }
  .message_tab {
    padding: 0 15px;
  }
}
</style>