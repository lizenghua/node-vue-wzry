/*
 * @message:
 * @Author: lzh
 * @since: 2019-11-05 11:29:06
 * @lastTime: 2019-11-12 15:39:02
 * @LastAuthor: Do not edit
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import FastClick from "fastclick";

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

import "@/assets/styles/global.scss";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
