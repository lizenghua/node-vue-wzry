/*
 * @message:
 * @Author: lzh
 * @since: 2019-11-05 11:32:17
 * @lastTime: 2019-11-07 15:59:34
 * @LastAuthor: Do not edit
 */
import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "./routerConfig";

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

// 前置路由
router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return next("/login");
  }
  next();
});

export default router;
