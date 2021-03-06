/*
 * @message:
 * @Author: lzh
 * @since: 2019-11-05 11:29:06
 * @lastTime: 2019-11-15 14:35:06
 * @LastAuthor: lzh
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import FastClick from "fastclick";
import VueAwesomeSwiper from "vue-awesome-swiper";
import http from "@/utils/http.js";
import * as custom from "@/filters/index.js";

Vue.config.productionTip = false;

if ("addEventListener" in document) {
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      FastClick.attach(document.body);
    },
    false
  );
}

import "@/assets/iconfont/iconfont.css";
import "@/assets/styles/global.scss";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);

Vue.prototype.$http = http;
// 导出的是对象，可以直接通过 key 和 value 来获得过滤器的名和过滤器的方法
Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key]);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
