/*
 * @message:
 * @Author: lzh
 * @since: 2019-11-05 11:32:17
 * @lastTime: 2019-11-07 16:22:41
 * @LastAuthor: Do not edit
 */
import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "./routerConfig";

/**
 * 重写路由的push方法
 * 解决：在路由中点击了相同的路由（会报不允许vue导航到当前位置）的错误
 */
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};

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
