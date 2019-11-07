<!--
 * @message: 顶部条
 * @Author: lzh
 * @since: 2019-11-05 11:57:46
 * @lastTime: 2019-11-07 12:29:19
 * @LastAuthor: Do not edit
 -->
<template>
  <div class="top-bar">
    <span>{{ username }}</span>
  </div>
</template>

<script>
export default {
  name: "topBar",
  data() {
    return {
      username: ""
    };
  },
  created() {
    this.username = localStorage.username;
  }
};
</script>

<style scoped></style>
