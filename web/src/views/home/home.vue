<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-11-12 14:48:44
 * @lastTime: 2019-11-15 10:08:42
 * @LastAuthor: lzh
 -->
<template>
  <div class="home">
    <m-swiper></m-swiper>
    <div class="bg-white entry-box mt-3">
      <m-category></m-category>
    </div>
    <m-card-list
      :dataSource="newsData"
      icon="iconnews_SFontCN"
      title="新闻资讯"
    >
      <template #items="{category}">
        <ul>
          <li
            v-for="(item, i) in category.newsList"
            :key="i"
            class="d-flex pt-3"
          >
            <div class="flex-1 text-space">
              <span class="text-grey-1">[{{ item.categoryName }}]</span>
              <span class="px-2">|</span>
              <span class="text-dark">{{ item.title }}</span>
            </div>
            <span class="text-grey ml-2 fs-sm">{{
              item.createdAt | date
            }}</span>
          </li>
        </ul>
      </template>
    </m-card-list>
    <m-card-list
      :dataSource="heroesData"
      icon="iconotherobject_icon"
      title="英雄列表"
    >
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin:0 -0.5rem">
          <div
            class="p-2 text-center hero-item"
            v-for="(hero, index) in category.heroList"
            :key="index"
          >
            <img :src="hero.avatar" class="w-100" />
            <p>{{ hero.name }}</p>
          </div>
        </div>
      </template>
    </m-card-list>
  </div>
</template>

<script>
import MSwiper from "./components/swiper";
import MCategory from "./components/category";
import MCardList from "@/components/Card/list";
import dayjs from "dayjs";
export default {
  name: "Home",
  components: {
    MSwiper,
    MCategory,
    MCardList
  },
  filters: {
    date(val) {
      return dayjs(val).format("YYYY-MM-DD");
    }
  },
  data() {
    return {
      newsData: [],
      heroesData: []
    };
  },
  created() {
    this.fetchNewsData();
    this.fetchHeroesData();
  },
  methods: {
    async fetchNewsData() {
      const res = await this.$http.get("news/list");
      this.newsData = res.data;
    },
    async fetchHeroesData() {
      const res = await this.$http.get("heroes/list");
      this.heroesData = res.data;
    }
  }
};
</script>

<style lang="scss" scoped>
.hero-item {
  width: 20%;
}
</style>
