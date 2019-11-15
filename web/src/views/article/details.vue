<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-11-15 10:27:39
 * @lastTime: 2019-11-15 11:57:42
 * @LastAuthor: lzh
 -->
<template>
  <div class="article-details" v-if="model">
    <div class="d-flex px-2 py-3 border-bottom">
      <span class="text-dark">&lt;</span>
      <span class="flex-1 pl-2 text-space text-blue">{{ model.title }}</span>
      <span class="ml-2 text-grey fs-xs">{{ model.createdAt }}</span>
    </div>
    <div class="p-3 body" v-html="model.body"></div>
    <h3 class="text-blue p-3 border-top">相关资讯</h3>
    <router-link
      tag="div"
      :to="`/article_details/${item._id}`"
      v-for="item in model.related"
      :key="item._id"
      class="d-flex py-2 px-3"
    >
      <span class="flex-1 text-space">{{ item.title }}</span>
      <span class="ml-2 fs-xs text-grey">{{ item.createdAt }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ArticleDetails",
  props: {
    id: {
      type: String,
      required: true,
      default: ""
    }
  },
  data() {
    return {
      model: null
    };
  },
  watch: {
    id() {
      this.fetchDetails();
    }
  },
  created() {
    this.fetchDetails();
  },
  methods: {
    async fetchDetails() {
      const res = await this.$http.get(`articles/${this.id}`);
      this.model = res.data;
      console.log(res.data);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_var.scss";
.border-bottom {
  border-bottom: 1px solid map-get($map: $colors, $key: "light-2");
}
.border-top {
  border-top: 2px solid map-get($map: $colors, $key: "grey");
}
::v-deep .body {
  p {
    line-height: 2rem;
    font-size: map-get($map: $font-sizes, $key: "xl");
  }
  img {
    max-width: 100%;
    height: auto;
  }
  iframe {
    width: 100%;
    height: auto;
  }
}
</style>
