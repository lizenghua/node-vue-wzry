<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-11-06 17:49:38
 * @lastTime: 2019-11-07 11:15:35
 * @LastAuthor: Do not edit
 -->
<template>
  <div class="login">
    <el-card header="请先登录" class="login-card">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input
            v-model="model.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="model.password"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async login() {
      const res = await this.$http.post("login", this.model);
      const { token, username } = res.data;
      // 本地存储 token
      localStorage.token = token;
      localStorage.username = username;
      this.$router.push("/");
      this.$message({
        type: "success",
        message: `登录成功，欢迎您，${username}`
      });
    }
  }
};
</script>

<style>
.login-card {
  width: 30rem;
  margin: 10rem auto;
}
</style>
