/*
 * @message:
 * @Author: lzh
 * @since: 2019-11-12 14:49:29
 * @lastTime: 2019-11-15 10:41:20
 * @LastAuthor: lzh
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
      },
      {
        path: "/article_details/:id",
        name: "ArticleDetails",
        component: () => import("@/views/article/details.vue"),
        props: true
      }
    ]
  }
];
