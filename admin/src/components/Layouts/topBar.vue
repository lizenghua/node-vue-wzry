<!--
 * @message: 顶部条
 * @Author: lzh
 * @since: 2019-11-05 11:57:46
 * @lastTime: 2019-11-05 12:21:20
 * @LastAuthor: Do not edit
 -->
<template>
  <div class="top-bar">
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>王小虎</span>
  </div>
</template>

<script>
export default {
  name: "topBar"
};
</script>

<style scoped></style>
