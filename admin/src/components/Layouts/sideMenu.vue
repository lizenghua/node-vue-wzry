<!--
 * @message: 左侧导航
 * @Author: lzh
 * @since: 2019-11-05 12:15:40
 * @lastTime: 2019-11-06 16:12:05
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
        <el-menu-item-group>
          <template slot="title">
            英雄
          </template>
          <el-menu-item index="/heroes/create">创建英雄</el-menu-item>
          <el-menu-item index="/heroes/list">英雄列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">
            文章
          </template>
          <el-menu-item index="/articles/create">创建文章</el-menu-item>
          <el-menu-item index="/articles/list">文章列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">
            广告位
          </template>
          <el-menu-item index="/ads/create">创建广告位</el-menu-item>
          <el-menu-item index="/ads/list">广告位列表</el-menu-item>
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
