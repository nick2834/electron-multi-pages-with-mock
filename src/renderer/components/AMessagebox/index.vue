<!-- 聊天窗口 -->
<template>
  <div class="message_box">
    <div class="message_title">
      <span class="title">{{chatTitle.length > 8 ? chatTitle.substr(0,8):chatTitle}}</span>
      <div class="title_btn-group">
        <i class="iconfont icon-manage" @click="showModal"></i>
        <i class="el-icon-folder-opened"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { ipcRenderer, remote } from "electron";
export default {
  data() {
    return {};
  },
  computed: {
    chatTitle: {
      get() {
        return this.$store.state.chat.chatTitle;
      }
    }
  },
  methods: {
    showModal() {
      ipcRenderer.send("showOrHideModal", true);
    }
  }
};
</script>
<style scoped lang="scss">
.message_box {
  height: calc(100vh - 256px);
  overflow: hidden;
  .message_title {
    font-weight: bold;
    line-height: 40px;
    padding: 0 20px;
    border-bottom: 1px solid $borderColor;
    display: flex;
    justify-content: space-between;
    color: #000000;
    .title {
      cursor: pointer;
    }
    .title_btn-group {
      color: #888a92;
      i {
        padding: 0 5px;
        cursor: pointer;
        &:hover {
          color: #12b7f5;
        }
      }
    }
  }
  .message_list {
    height: calc(100vh - 286px);
    overflow-y: scroll;
    padding: 10px 0;
    .message_item {
      overflow: hidden;
    }
    .time {
      width: 100%;
      font-size: 10px;
      margin: 7px auto;
      text-align: center;

      span {
        display: inline-block;
        padding: 4px 6px;
        color: #9e9e9e;
        border-radius: 3px;
        background-color: #f8f8f8;
      }
    }
    .enter__time {
      width: 100%;
      font-size: 10px;
      margin: 7px auto;
      text-align: center;

      span {
        display: inline-block;
        line-height: 2;

        p {
          background-color: #f8f8f8;
          padding: 4px 6px;
          color: #9e9e9e;
          border-radius: 3px;
          margin-bottom: 5px;
        }
      }
    }
    .message_main {
      .username {
        font-size: 12px;
        line-height: 2;
        color: #9ca8c9;
        position: relative;
      }
      .content {
        display: inline-block;
        position: relative;
        padding: 6px 10px;
        max-width: 330px;
        min-height: 36px;
        line-height: 24px;
        box-sizing: border-box;
        font-size: 12px;
        text-align: left;
        word-break: break-all;
        background-color: #f3f3f3;
        border-radius: 4px;
        &:before {
          content: " ";
          position: absolute;
          top: 12px;
          right: 100%;
          border: 6px solid transparent;
          border-right-color: #f3f3f3;
        }
        .que__title {
          border-bottom: 1px solid #e9e9e9;
          line-height: 3;
          font-size: 12px;
          cursor: pointer;
          color: #777777;
        }
        .que__content {
          padding: 10px 0;
          font-size: 12px;
        }
        .con_list {
          width: 300px;
          line-height: 24px;
          background: #ffffff;
          border-radius: 5px;

          .con_list__item {
            line-height: 48px;
            border-bottom: 1px solid #e7e7e7;
            text-align: center;
            color: #0052d9;
            display: flex;
            padding: 10px;
            cursor: pointer;

            img {
              position: absolute;
              width: 250px;
              height: 48px;
              left: 0;
              opacity: 0;
            }

            .iconfont {
              font-size: 28px;
            }

            .con_list_title {
              width: 100%;
              display: flex;
              flex-direction: column;
              line-height: 1.5;

              span {
                line-height: 30px;

                &:last-child {
                  line-height: 18px;
                  font-size: 12px;
                  color: #888888;
                }
              }
            }

            .doc_item {
              width: 100%;
              display: flex;
              flex-direction: column;
              line-height: 1.5;

              span {
                line-height: 48px;
              }
            }

            .evi_tool {
              width: 60px;
              border-left: 1px solid #e7e7e7;
            }

            &.apply_content {
              img {
                width: 100%;
              }
            }

            .take-down__tool {
              width: 120px;
              position: relative;

              img {
                width: 120px;
                height: 48px;
                left: 0;
                opacity: 0;
              }
            }

            .doc_tool {
              width: 120px;
              position: relative;

              img {
                position: absolute;
                width: 120px;
                height: 48px;
                left: 0;
                opacity: 0;
              }
            }

            &:last-child {
              border-bottom: none;
            }
          }
        }
      }
      &.self {
        text-align: right;
        .avatar {
          float: right;
          margin: 0 15px;
          margin-left: 0;
        }

        .message_body {
          // margin-right: 15px;
          margin-right: 65px;
          margin-left: 0;
          .content {
            background-color: #d9f4fe;
            &:before {
              left: 100%;
              border-right-color: transparent;
              border-left-color: #d9f4fe;
            }
          }
        }
      }
      &.other {
        text-align: left;
        .avatar {
          float: left;
          margin-left: 15px;
          border-radius: 3px;
        }
        .message_body {
          display: inline-block;
          margin-left: 15px;
          position: relative;
        }
      }
    }
  }
}
</style>