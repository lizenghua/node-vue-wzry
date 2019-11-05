<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-11-05 14:18:38
 * @lastTime: 2019-11-05 17:43:28
 * @LastAuthor: Do not edit
 -->
<template>
  <div class="list">
    <h2 class="title">分类列表</h2>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="250"> </el-table-column>
      <el-table-column prop="name" label="分类名称"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      items: []
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("categories");
      this.items = res.data;
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
