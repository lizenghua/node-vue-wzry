<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-11-05 14:34:28
 * @lastTime: 2019-11-05 17:22:43
 * @LastAuthor: Do not edit
 -->
<template>
  <div class="create">
    <h2 class="title">新建分类</h2>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "create",
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async save() {
      await this.$http.post("categories", this.model);
      // 跳转到分类列表页
      this.$router.push("/categories/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
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
