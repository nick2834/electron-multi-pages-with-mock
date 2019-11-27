<!-- login -->
<template>
  <div id="App">
    <el-main class="modal_main dragable">
      <el-button @click="handleCloseModal">关闭模态框</el-button>
    </el-main>
  </div>
</template>

<script>
import { ipcRenderer, remote } from "electron";
export default {
  data() {
    return {};
  },
  methods: {
    handleCloseModal(){
      ipcRenderer.send('showOrHideModal',false)
    }
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.modal_main {
  height: 100vh;
  background: #ffffff;
}
</style>