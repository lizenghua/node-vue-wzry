<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-11-13 17:44:56
 * @lastTime: 2019-11-15 19:09:45
 * @LastAuthor: lzh
 -->
<template>
  <div class="card-box">
    <div class="card bg-white mt-3 p-3">
      <div
        class="card-header d-flex ai-center"
        :class="{ 'border-bottom': !plain, 'pb-3': !plain }"
      >
        <i class="iconfont" :class="`${icon}`"></i>
        <div class="fs-xl flex-1 px-2">{{ title }}</div>
        <i class="iconfont icongengduo" v-if="!plain"></i>
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
    },
    plain: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped></style>
