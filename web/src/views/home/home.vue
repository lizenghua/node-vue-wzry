<!--
 * @message: 
 * @Author: lzh
 * @since: 2019-11-12 14:48:44
 * @lastTime: 2019-11-14 11:45:04
 * @LastAuthor: Do not edit
 -->
<template>
  <div class="home">
    <m-swiper></m-swiper>
    <div class="bg-white entry-box mt-3">
      <m-category></m-category>
    </div>
    <m-card-list
      :dataSource="dataSource"
      icon="iconnews_SFontCN"
      title="新闻资讯"
    >
      <template #items="{category}">
        <div>
          <ul>
            <li v-for="(item, i) in category.list" :key="i" class="d-flex pt-3">
              <div class="flex-1 text-space">
                <span class="text-grey-1">[{{ item.flag }}]</span>
                <span class="px-2">|</span>
                <span class="text-dark">{{ item.title }}</span>
              </div>
              <span class="text-grey">{{ item.date }}</span>
            </li>
          </ul>
        </div>
      </template>
    </m-card-list>
    <m-card-list
      :dataSource="dataSource1"
      icon="iconotherobject_icon"
      title="英雄列表"
    >
      <template #items="{category}">
        <div>
          <ul>
            <li v-for="(item, i) in category.list" :key="i" class="d-flex pt-3">
              <div class="flex-1 text-space">
                <span class="text-grey-1">[{{ item.flag }}]</span>
                <span class="px-2">|</span>
                <span class="text-dark">{{ item.title }}</span>
              </div>
              <span class="text-grey">{{ item.date }}</span>
            </li>
          </ul>
        </div>
      </template>
    </m-card-list>
  </div>
</template>

<script>
import MSwiper from "./components/swiper";
import MCategory from "./components/category";
import MCardList from "@/components/Card/list";
export default {
  name: "Home",
  components: {
    MSwiper,
    MCategory,
    MCardList
  },
  data() {
    return {
      dataSource: [
        {
          name: "热门",
          list: [
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            }
          ]
        },
        {
          name: "新闻",
          list: [
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            }
          ]
        },
        {
          name: "公告",
          list: [
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            }
          ]
        },
        {
          name: "活动",
          list: [
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            }
          ]
        },
        {
          name: "赛事",
          list: [
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            }
          ]
        }
      ],
      dataSource1: [
        {
          name: "热门1",
          list: [
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            }
          ]
        },
        {
          name: "新闻",
          list: [
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            }
          ]
        },
        {
          name: "公告",
          list: [
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            }
          ]
        },
        {
          name: "活动",
          list: [
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            }
          ]
        },
        {
          name: "赛事",
          list: [
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            },
            {
              flag: "新闻",
              title: "KPL季后赛开赛 参与活动送好礼KPL季后赛开赛",
              date: "2019-05-01"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
