<!--  -->
<template>
  <div class="message_input">
    <div class="input_tool">
      <i class="el-icon-microphone"></i>
      <i class="el-icon-picture-outline"></i>
      <i class="el-icon-files"></i>
      <i class="el-icon-receiving"></i>
      <i class="el-icon-set-up"></i>
    </div>
    <textarea name id cols="30" rows="10" class="input_area" placeholder="请在此输入内容" v-model="value"></textarea>
    <div class="send" @click="send">
      <span>发送(ent)</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { value: "" };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: { send() {} }
};
</script>
<style scoped lang="scss">
.message_input {
  border-top: 1px solid $borderColor;
  height: 200px;
  position: relative;
  .input_tool {
    height: 40px;
    line-height: 40px;
    color: #888a92;
    font-size: 20px;
    padding: 0 10px;
    i {
      padding: 0 5px;
      cursor: pointer;
      &:hover {
        color: #12b7f5;
      }
    }
  }
  .func-area {
    background: #ffffff;
    &__content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    &__item {
      margin-right: 10px;
      span.el-icon {
        background: #f3f3f3;
        border-radius: 10px;
        text-align: center;
        color: #888a92;
        border: 1px solid #f3f3f3;
        line-height: 50px;
        cursor: pointer;
        width: 50px;
        height: 50px;
        font-size: 22px;
      }
      .title {
        text-align: center;
        font-size: 12px;
      }
      &:hover {
        color: #12b7f5;
      }
    }
  }
  .input_area,
  .func-area {
    padding: 10px;
    height: 160px;
    box-sizing: border-box;
    width: 100%;
    border: none;
    outline: none;
    font-family: "Micrsofot Yahei";
    resize: none;
    font-size: 16px;
  }
  .send {
    position: absolute;
    bottom: 10px;
    right: 20px;
    width: 75px;
    height: 28px;
    line-height: 28px;
    box-sizing: border-box;
    text-align: center;
    border: 1px solid #12b7f5;
    border-radius: 3px;
    background: #12b7f5;
    font-size: 14px;
    color: #ffffff;
    cursor: pointer;

    &:hover {
      background: #12b7f5;
      color: #fff;
    }
  }
}
</style>