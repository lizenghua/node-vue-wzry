<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-11-06 17:49:38
 * @lastTime: 2019-11-07 17:20:04
 * @LastAuthor: Do not edit
 -->
<template>
  <div class="login">
    <el-card header="请先登录" class="login-card">
      <el-form
        :model="model"
        :rules="rules"
        ref="ruleForm"
        status-icon
        @submit.native.prevent="login('ruleForm')"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="model.username"
            placeholder="请输入用户名"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="model.password"
            type="password"
            placeholder="请输入密码"
            autocomplete="off"
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
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      model: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ validator: validateName, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    async login(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
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
        } else {
          return false;
        }
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
