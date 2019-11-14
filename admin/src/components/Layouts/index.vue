<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-11-05 11:48:37
 * @lastTime: 2019-11-05 14:21:33
 * @LastAuthor: Do not edit
 -->
<template>
  <div class="layout">
    <el-container style="height: 100vh;">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <side-menu></side-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right;">
          <top-bar></top-bar>
        </el-header>

        <el-main>
          <router-view :key="$route.path"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import TopBar from "@/components/Layouts/topBar";
import SideMenu from "@/components/Layouts/sideMenu";
export default {
  name: "layout",
  components: {
    TopBar,
    SideMenu
  }
};
</script>

<style scoped>
.el-header {
  background-color: #58c2be;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
</style>
