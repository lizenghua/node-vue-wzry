<!--
 * @message: 顶部条
 * @Author: lzh
 * @since: 2019-11-05 11:57:46
 * @lastTime: 2019-11-07 17:45:25
 * @LastAuthor: Do not edit
 -->
<template>
  <div class="top-bar">
    <span class="title">欢迎您，{{ username }}</span>
    <el-dropdown @command="handleCommand">
      <i class="el-icon-setting icon-setting"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="unlogin">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "topBar",
  data() {
    return {
      username: ""
    };
  },
  created() {
    this.username = localStorage.username;
  },
  methods: {
    handleCommand(command) {
      if (command == "unlogin") {
        localStorage.clear();
        this.$router.push("/login");
      }
    }
  }
};
</script>

<style scoped>
.icon-setting {
  margin-left: 15px;
  font-size: 16px;
  color: #fff;
}
.title {
  font-size: 16px;
  color: #fff;
}
</style>
