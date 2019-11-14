/*
 * @message:
 * @Author: lzh
 * @since: 2019-11-05 11:29:06
 * @lastTime: 2019-11-14 17:29:49
 * @LastAuthor: lzh
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import FastClick from "fastclick";
import VueAwesomeSwiper from "vue-awesome-swiper";
import http from "@/utils/http.js";

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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
