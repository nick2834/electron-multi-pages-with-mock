<!--  -->
<template>
  <el-container class="message_container">
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
          <div class="detail_info-title el-icon-" @click="handleNotice">群公告</div>
          <div class="detail_info-content">{{chatSubtitle}}</div>
        </div>
        <div class="detail_group">
          <div class="detail_group-nums">
            <span>成员 239/335</span>
            <span class="el-icon-search"></span>
          </div>
          <ul class="detail_group-list">
            <li
              v-for="(item,index) in memberList"
              :key="index"
              :class="{active:memId == item.id}"
              @click="handleSelect(item)"
            >
              <div class="content">
                <el-image
                  style="width: 20px; height: 20px;border-radius:50%"
                  :src="item.avatar"
                  lazy
                ></el-image>
                <span class="name">{{item.name}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </el-aside>
  </el-container>
</template>

<script>
import { ipcRenderer, remote } from "electron";
import AMessageBox from "@/components/AMessagebox";
import AMessageInput from "@/components/AMessageinput";
export default {
  data() {
    return {
      isOpen: true,
      chatSubtitle: "",
      memberList: [],
      memId: ""
    };
  },

  components: { AMessageBox, AMessageInput },

  computed: {
    chatId: {
      get() {
        return this.$store.state.chat.chatId;
      }
    },
    chatList: {
      get() {
        return this.$store.state.chat.chatList;
      }
    }
  },
  watch: {
    chatId(val) {
      this.chatSubtitle = this.watchSub();
      this.getList();
    }
  },
  methods: {
    watchSub() {
      return this.chatList.length > 0
        ? this.chatList.filter(item => item.id == this.chatId)[0].subtitle
        : "";
    },
    getList() {
      this.$http.get("/wechat/room/member").then(({ data }) => {
        if (data.code == 0) {
          this.memberList = data.page.list;
        }
      });
    },
    handleSelect(item) {
      this.memId = item.id;
    },
    handleNotice() {
      let sendData = {
        isOpen: true,
        url: "notice",
        options: {
          width: 520,
          height: 476,
          movable: false
        },
        data: {
          chatId: this.chatId
        }
      };
      ipcRenderer.send("showNotice", sendData);
    }
  },
  created() {
    this.chatSubtitle = this.watchSub();
  },
  activated() {
    this.getList();
  }
};
</script>
<style scoped lang="scss">
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
  // transition: 300ms;
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
    color: #777777;
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
        font-size: 11px;
      }
    }
    .detail_group {
      text-align: left;
      &-nums {
        font-size: 12px;
        padding: 0 15px;
        display: flex;
        justify-content: space-between;
        span {
          line-height: 40px;
        }
      }
      &-list {
        height: calc(100vh - 336px);
        overflow-y: scroll;
        li {
          line-height: 30px;
          font-size: 11px;
          &.active {
            background: #e5e5e5;
          }
        }
        .content {
          display: flex;
          align-items: center;
          padding: 0 15px;
        }
        .name {
          margin-left: 5px;
        }
      }
    }
  }
  .message_tab {
    padding: 0 15px;
  }
}
</style>