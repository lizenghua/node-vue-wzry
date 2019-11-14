<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-11-12 14:48:44
 * @lastTime: 2019-11-14 20:12:32
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
        <div>
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
        </div>
      </template>
    </m-card-list>
    <!-- <m-card-list :dataSource="" icon="iconotherobject_icon" title="英雄列表">
    </m-card-list> -->
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
      newsData: []
    };
  },
  created() {
    this.fetchNewsData();
  },
  methods: {
    async fetchNewsData() {
      const res = await this.$http.get("news/list");
      this.newsData = res.data;
    }
  }
};
</script>

<style lang="scss" scoped></style>
