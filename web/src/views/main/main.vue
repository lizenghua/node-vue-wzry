<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-11-12 15:55:20
 * @lastTime: 2019-11-14 11:26:47
 * @LastAuthor: Do not edit
 -->
<template>
  <div class="main">
    <div class="topbar bg-black py-2 px-4 d-flex ai-center">
      <img src="../../assets/images/logo.png" alt="logo" height="30" />
      <div class="px-3 flex-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-grey-1 fs-xxs mt-1">团队成就更多</div>
      </div>
      <button class="btn bg-primary">立即下载</button>
    </div>
    <!-- E topbar -->
    <div class="bg-primary pt-3 pb-2">
      <div class="nav nav-invert jc-around text-white pb-1">
        <div class="nav-item active">
          <router-link tag="div" to="/" class="nav-link">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link tag="div" to="/" class="nav-link">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link tag="div" to="/" class="nav-link">赛事中心</router-link>
        </div>
      </div>
    </div>
    <!-- E nav -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Main"
};
</script>

<style lang="scss" scoped>
.topbar {
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>
