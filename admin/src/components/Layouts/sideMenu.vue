<!--
 * @message: 左侧导航
 * @Author: lzh
 * @since: 2019-11-05 12:15:40
 * @lastTime: 2019-11-05 20:34:35
 * @LastAuthor: Do not edit
 -->
<template>
  <div class="side-menu">
    <el-menu router unique-opened :default-active="$route.path">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-cooperation"></i>内容管理
        </template>
        <el-menu-item-group>
          <template slot="title">
            分类
          </template>
          <el-menu-item index="/categories/create">创建分类</el-menu-item>
          <el-menu-item index="/categories/list">分类列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">
            物品
          </template>
          <el-menu-item index="/items/create">创建物品</el-menu-item>
          <el-menu-item index="/items/list">物品列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "sideMenu"
};
</script>

<style scoped></style>
