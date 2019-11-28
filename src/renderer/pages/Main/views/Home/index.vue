<!-- main -->
<template>
  <el-container>
    <el-header class="header dragable" style="height:55px">
      <a-header></a-header>
    </el-header>
    <el-container>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </el-container>
  </el-container>
</template>

<script>
import { ipcRenderer } from "electron";
import AHeader from "@/components/Aheader";
export default {
  data() {
    return {
      value: ""
    };
  },
  components: { AHeader }
};
</script>
<style scoped lang="scss">
.el-header {
  background-color: #e7e8e8;
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