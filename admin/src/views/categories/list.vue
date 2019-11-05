<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-11-05 14:18:38
 * @lastTime: 2019-11-05 14:27:16
 * @LastAuthor: Do not edit
 -->
<template>
  <div class="list">
    <h2 class="title">分类列表</h2>
    <el-table :data="tableData">
      <el-table-column prop="date" label="日期" width="140"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
};
</script>

<style lang="scss"></style>
