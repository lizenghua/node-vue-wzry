<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-11-12 21:26:46
 * @lastTime: 2019-11-13 14:54:49
 * @LastAuthor: Do not edit
 -->
<template>
  <div class="card-box">
    <div class="card bg-white mt-3 p-3">
      <div class="card-header d-flex ai-center pb-3">
        <i class="iconfont iconnews_SFontCN"></i>
        <div class="fs-xl flex-1 px-2">新闻资讯</div>
        <i class="iconfont icongengduo"></i>
      </div>
      <div class="card-body pt-3">
        <div class="nav jc-between">
          <div class="nav-item active">
            <div class="nav-link">热门</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">新闻</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">公告</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">活动</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">赛事</div>
          </div>
        </div>
        <swiper>
          <swiper-slide v-for="n in 5" :key="n">
            <ul>
              <li v-for="m in 5" :key="m" class="d-flex pt-3">
                <div class="flex-1 text-space">
                  <span class="text-grey-1">[新闻]</span>
                  <span class="px-2">|</span>
                  <span class="text-dark"
                    >KPL季后赛开赛 参与活动送好礼KPL季后赛开赛
                    参与活动送好礼KPL季后赛开赛 参与活动送好礼</span
                  >
                </div>
                <span class="text-grey">2019-05-01</span>
              </li>
            </ul>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Card",
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_var.scss";
.card {
  border-bottom: 1px solid map-get($map: $colors, $key: "light-2");

  .card-header {
    border-bottom: 1px solid map-get($map: $colors, $key: "light-2");
  }
}
</style>
