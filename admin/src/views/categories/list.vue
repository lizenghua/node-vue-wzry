<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-11-05 14:18:38
 * @lastTime: 2019-11-05 20:11:02
 * @LastAuthor: Do not edit
 -->
<template>
  <div class="list">
    <h2 class="title">分类列表</h2>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="250"> </el-table-column>
      <el-table-column prop="parent.name" label="上级分类"> </el-table-column>
      <el-table-column prop="name" label="分类名称"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button
            @click="$router.push(`/categories/edit/${scope.row._id}`)"
            type="primary"
            size="small"
            >编辑</el-button
          >
          <el-button type="danger" size="small" @click="remove(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
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
      const res = await this.$http.get("rest/categories");
      this.items = res.data;
    },
    remove(row) {
      this.$confirm(`是否确定要删除分类【${row.name}】`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          await this.$http.delete(`rest/categories/${row._id}`);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.fetch(); //刷新列表
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
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
