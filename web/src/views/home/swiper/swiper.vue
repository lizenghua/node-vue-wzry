<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-11-12 16:58:24
 * @lastTime: 2019-11-12 17:54:16
 * @LastAuthor: Do not edit
 -->
<template>
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item, i) in banners" :key="i"
        ><img :src="item" class="w-100"
      /></swiper-slide>
      <!-- Optional controls -->
      <div
        class="swiper-pagination pagination-home text-right px-2"
        slot="pagination"
      ></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Swiper",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      banners: [
        require("@/assets/images/banner1.jpeg"),
        require("@/assets/images/banner2.jpeg"),
        require("@/assets/images/banner3.jpeg")
      ],
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        },
        loop: true,
        autoplay: {
          disableOnInteraction: false,
          delay: 2000
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_var.scss";
::v-deep .pagination-home {
  .swiper-pagination-bullet {
    width: 0.7692rem;
    height: 0.7692rem;
    border-radius: 2px;
    &.swiper-pagination-bullet {
      background: map-get($map: $colors, $key: "white");
      opacity: 1;
    }
    &.swiper-pagination-bullet-active {
      background: map-get($map: $colors, $key: "blue");
    }
  }
}
</style>
