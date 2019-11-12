<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-11-12 14:48:44
 * @lastTime: 2019-11-12 18:20:55
 * @LastAuthor: Do not edit
 -->
<template>
  <div class="home">
    <swiper></swiper>
    <div class="bg-white entry-box mt-2">
      <category></category>
    </div>
  </div>
</template>

<script>
import Swiper from "./components/swiper";
import Category from "./components/category";
export default {
  name: "Home",
  components: {
    Swiper,
    Category
  }
};
</script>

<style lang="scss" scoped></style>
