/*
 * @message: 路由配置
 * @Author: lzh
 * @since: 2019-11-05 11:45:32
 * @lastTime: 2019-11-05 20:35:30
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
      },
      {
        path: "/categories/edit/:id",
        name: "categoryEdit",
        component: () => import("@/views/categories/edit.vue"),
        props: true
      },
      {
        path: "/items/list",
        name: "itemList",
        component: () => import("@/views/items/list.vue")
      },
      {
        path: "/items/create",
        name: "itemCreate",
        component: () => import("@/views/items/edit.vue")
      },
      {
        path: "/items/edit/:id",
        name: "itemEdit",
        component: () => import("@/views/items/edit.vue"),
        props: true
      }
    ]
  }
];
