/*
 * @message:
 * @Author: lzh
 * @since: 2019-11-05 11:29:06
 * @lastTime: 2019-11-12 14:52:19
 * @LastAuthor: Do not edit
 */
import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "./routerConfig";
Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

export default router;
