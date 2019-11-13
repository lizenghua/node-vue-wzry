<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-11-12 14:48:44
 * @lastTime: 2019-11-13 14:34:31
 * @LastAuthor: Do not edit
 -->
<template>
  <div class="home">
    <swiper></swiper>
    <div class="bg-white entry-box mt-3">
      <category></category>
    </div>
    <card></card>
  </div>
</template>

<script>
import Swiper from "./components/swiper";
import Category from "./components/category";
import Card from "./components/card";
export default {
  name: "Home",
  components: {
    Swiper,
    Category,
    Card
  }
};
</script>

<style lang="scss" scoped></style>
