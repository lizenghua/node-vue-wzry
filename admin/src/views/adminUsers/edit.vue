<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-11-06 16:48:15
 * @lastTime: 2019-11-07 17:20:24
 * @LastAuthor: Do not edit
 -->
<template>
  <div class="create">
    <h2 class="title">{{ id ? "编辑" : "新建" }}管理员</h2>
    <el-form
      :model="model"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      @submit.native.prevent="save('ruleForm')"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">{{
          id ? "保存" : "新建"
        }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "create",
  props: {
    id: {}
  },
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
  created() {
    this.id && this.fetch();
  },
  methods: {
    async save(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          if (this.id) {
            await this.$http.put(`rest/admin_users/${this.id}`, this.model);
          } else {
            await this.$http.post("rest/admin_users", this.model);
          }
          // 跳转到分类列表页
          this.$router.push("/admin_users/list");
          this.$message({
            type: "success",
            message: "保存成功"
          });
        } else {
          return false;
        }
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/admin_users/${this.id}`);
      this.model = res.data;
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 20px;
  color: #666;
  margin-bottom: 20px;
  padding: 10px 0;
}
</style>
