/*
 * @message: 路由配置
 * @Author: lzh
 * @since: 2019-11-05 11:45:32
 * @lastTime: 2019-11-05 14:37:04
 * @LastAuthor: Do not edit
 */
export const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("@/components/Layouts/index.vue"),
    redirect: "/categories/list",
    children: [
      {
        path: "/categories/list",
        name: "categoryList",
        component: () => import("@/views/categories/list.vue")
      },
      {
        path: "/categories/create",
        name: "categoryCreate",
        component: () => import("@/views/categories/edit.vue")
      }
    ]
  }
];
