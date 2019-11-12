<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-11-12 14:48:44
 * @lastTime: 2019-11-12 18:15:17
 * @LastAuthor: Do not edit
 -->
<template>
  <div class="home">
    <swiper></swiper>
    <div class="bg-white entry-box mt-2">
      <ul class="entry-list d-flex jc-around text-center flex-wrap">
        <li class="my-3" v-for="(item, index) in entryNavs" :key="index">
          <a href="#">
            <span class="icon">
              <i class="sprite" :class="item.icon"></i>
            </span>
            <p>{{ item.text }}</p>
          </a>
        </li>
      </ul>
      <div class="bg-light py-2 text-center text-grey-1">
        <i class="sprite up mx-1"></i>
        <span>收起</span>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "./swiper/swiper";
export default {
  name: "Home",
  components: {
    Swiper
  },
  data() {
    return {
      entryNavs: [
        {
          icon: "blz",
          text: "爆料站"
        },
        {
          icon: "gsz",
          text: "故事站"
        },
        {
          icon: "zb",
          text: "周边商城"
        },
        {
          icon: "tyf",
          text: "体验服"
        },
        {
          icon: "xrq",
          text: "新人专区"
        },
        {
          icon: "cc",
          text: "荣耀·传承"
        },
        {
          icon: "mnz",
          text: "模拟战资料库"
        },
        {
          icon: "yd",
          text: "王者营地"
        },
        {
          icon: "gzh",
          text: "公众号"
        },
        {
          icon: "bbjs",
          text: "版本介绍"
        },
        {
          icon: "djhj",
          text: "对局环境"
        },
        {
          icon: "wzt",
          text: "无限王者团"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_var.scss";
.entry-box {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  li {
    width: 25%;
    border-left: 1px solid $border-color;
    &:nth-child(4n + 1) {
      border-left: none;
    }
    .icon {
      display: inline-block;
      width: 2.3846rem;
      height: 2.3846rem;
    }
    .sprite {
      width: 1.7692rem;
      height: 1.5385rem;
      &.blz {
        background-position: 63.546% 15.517%;
      }
      &.gsz {
        background-position: 90.483% 15.614%;
      }
      &.zb {
        background-position: 36.746% 0.924%;
      }
      &.tyf {
        background-position: 10.408% 15.517%;
      }
      &.xrq {
        background-position: 89.733% 1.266%;
      }
      &.cc {
        background-position: 36.467% 15.287%;
      }
      &.mnz {
        width: 2.3846rem;
        height: 1.9231rem;
        background-position: 9.302% 0.813%;
      }
      &.yd {
        width: 1.8462rem;
        height: 1.8462rem;
        background-position: 63.3% 0.927%;
      }
      &.gzh {
        background-position: 0 96.207%;
      }
      &.bbjs {
        width: 2.3846rem;
        height: 1.9231rem;
        background-position: 63.3% 0.927%;
      }
      &.djhj {
        width: 2.3846rem;
        height: 1.9231rem;
        background-position: 63.3% 0.927%;
      }
      &.wzt {
        width: 2.3846rem;
        height: 1.9231rem;
        background-position: 63.3% 0.927%;
      }
    }
  }
  .up {
    width: 0.7692rem;
    height: 0.7692rem;
    background-position: 38.577% 52.076%;
  }
}
</style>
