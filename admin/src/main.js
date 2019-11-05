/*
 * @message:
 * @Author: lzh
 * @since: 2019-11-05 11:32:17
 * @lastTime: 2019-11-05 14:51:19
 * @LastAuthor: Do not edit
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import http from "@/utils/http.js";

Vue.config.productionTip = false;
Vue.prototype.$http = http;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
