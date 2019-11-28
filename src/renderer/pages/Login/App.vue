<!-- login -->
<template>
  <div id="App">
    <el-main class="lgin_main dragable">
      <header>
        <el-avatar
          class="avatar"
          :size="100"
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        ></el-avatar>
      </header>

      <el-form class="login_form no-dragable" :model="loginForm" ref="loginForm">
        <el-form-item>
          <el-input type="text" v-model="loginForm.account"></el-input>
        </el-form-item>
        <el-form-item class="password_input">
          <el-input type="password" v-model="loginForm.password"></el-input>
          <span class="login_btn el-icon-s-promotion" @click="submitForm('loginForm')"></span>
        </el-form-item>
      </el-form>
    </el-main>
  </div>
</template>

<script>
import { ipcRenderer, remote } from "electron";
// let win = remote.getCurrentWindow();
// const pos = win.setSize(250,390);
export default {
  data() {
    return {
      show: false,
      loginForm: {
        account: "283448189",
        password: ""
      }
    };
  },
  methods: {
    submitForm(loginForm) {
      this.$http({
        method: "post",
        url: "/sys/login",
        data: this.loginForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$cookie.set("token", data.token);
          // ipcRenderer.send("hideLoginWindow");
          ipcRenderer.send("showMainWindow");
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.lgin_main {
  height: 100vh;
  background: #ffffff;
  .avatar {
    border: 1px solid #cdd0d2;
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    &:hover {
      border-color: $default_color;
    }
  }
  .login_form {
    padding: 50px 10px 0 10px;
    .login_btn {
      position: absolute;
      right: 0;
      top: 6px;
      width: 20px;
      height: 20px;
      border: 1px solid;
      border-radius: 50%;
      text-align: center;
      line-height: 20px;
      &:hover {
        color: $default_color;
      }
    }
  }
}
</style>