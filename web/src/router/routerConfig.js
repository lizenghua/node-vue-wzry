/*
 * @message:
 * @Author: lzh
 * @since: 2019-11-12 14:49:29
 * @lastTime: 2019-11-12 15:08:18
 * @LastAuthor: Do not edit
 */
export const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/home.vue")
  }
];
