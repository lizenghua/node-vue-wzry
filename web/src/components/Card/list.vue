<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-11-13 18:09:27
 * @lastTime: 2019-11-14 11:46:41
 * @LastAuthor: Do not edit
 -->
<template>
  <div class="card-list">
    <m-card :icon="icon" :title="title">
      <div class="nav jc-between">
        <div
          class="nav-item"
          v-for="(item, i) in dataSource"
          :key="i"
          :class="{ active: active === i }"
          @click="$refs.list.swiper.slideTo(i)"
        >
          <div class="nav-link">{{ item.name }}</div>
        </div>
      </div>
      <swiper
        ref="list"
        @slide-change="() => (active = $refs.list.swiper.realIndex)"
      >
        <swiper-slide v-for="(category, i) in dataSource" :key="i">
          <slot name="items" :category="category"></slot>
        </swiper-slide>
      </swiper>
    </m-card>
  </div>
</template>

<script>
import MCard from "./card";
export default {
  name: "CardList",
  components: {
    MCard
  },
  props: {
    dataSource: {
      type: Array,
      required: true,
      default: () => []
    },
    icon: {
      type: String,
      required: true,
      default: ""
    },
    title: {
      type: String,
      required: true,
      default: ""
    }
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="scss"></style>
