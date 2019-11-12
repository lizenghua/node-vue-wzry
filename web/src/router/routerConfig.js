/*
 * @message:
 * @Author: lzh
 * @since: 2019-11-12 14:49:29
 * @lastTime: 2019-11-12 15:58:55
 * @LastAuthor: Do not edit
 */
export const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/views/main/main.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("@/views/home/home.vue")
      }
    ]
  }
];
