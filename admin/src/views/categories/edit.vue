<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-11-05 14:34:28
 * @lastTime: 2019-11-05 20:11:27
 * @LastAuthor: Do not edit
 -->
<template>
  <div class="create">
    <h2 class="title">{{ id ? "编辑" : "新建" }}分类</h2>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="上级分类">
        <el-select v-model="model.parent" placeholder="请选择">
          <el-option
            v-for="item in parents"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
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
  props: {
    id: {}
  },
  data() {
    return {
      model: {},
      parents: []
    };
  },
  created() {
    this.id && this.fetch();
    this.fetchParents();
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`rest/categories/${this.id}`, this.model);
      } else {
        await this.$http.post("rest/categories", this.model);
      }
      // 跳转到分类列表页
      this.$router.push("/categories/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/categories/${this.id}`);
      this.model = res.data;
    },
    async fetchParents() {
      const res = await this.$http.get("rest/categories");
      this.parents = res.data;
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
