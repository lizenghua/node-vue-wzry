<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-11-13 17:44:56
 * @lastTime: 2019-11-14 11:39:56
 * @LastAuthor: Do not edit
 -->
<template>
  <div class="card-box">
    <div class="card bg-white mt-3 p-3">
      <div class="card-header d-flex ai-center pb-3">
        <i class="iconfont" :class="`${icon}`"></i>
        <div class="fs-xl flex-1 px-2">{{ title }}</div>
        <i class="iconfont icongengduo"></i>
      </div>
      <div class="card-body pt-3">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
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
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_var.scss";
.card-header {
  border-bottom: 1px solid map-get($map: $colors, $key: "light-2");
}
</style>
