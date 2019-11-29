<!-- notice -->
<template>
  <div>
    notice
    <el-button @click="handleCloseModal">取消</el-button>
  </div>
</template>

<script>
import { ipcRenderer, remote } from "electron";
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    handleCloseModal() {
      ipcRenderer.send("showOrHideModal", { isOpen: false });
    }
  }
};
</script>
<style scoped>
</style>